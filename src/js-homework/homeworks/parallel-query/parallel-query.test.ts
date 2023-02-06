import { parallelQuery } from '#/src/js-homework/homeworks/parallel-query/index';
import {
    fetchSimulator,
    staticParserGenerateRequestArray,
} from '#/src/js-homework/homeworks/parallel-query/utils';
import * as SharedUtils from '#/src/shared/utils';

jest.mock('#/src/shared/utils', () => ({
    __esModule: true,
    ...jest.requireActual('#/src/shared/utils'),
}));

type StaticParserTestCase = {
    testName: string;
    urlListLength: number;
    countParallelQuery: number;
};

const STATIC_PARSER_TEST_CASES: StaticParserTestCase[] = [
    {
        testName: '10 параллельных запросов, с массивом данных длинной в 12 элементов',
        urlListLength: 12,
        countParallelQuery: 10,
    },
    {
        testName: '10 параллельных запросов, с массивом данных длинной в 77 элементов',
        urlListLength: 77,
        countParallelQuery: 10,
    },
    {
        testName: '5 параллельных запросов, с массивом данных длинной в 25 элементов',
        urlListLength: 25,
        countParallelQuery: 5,
    },
    {
        testName: '25 параллельных запросов, с массивом данных длинной в 125 элементов',
        urlListLength: 125,
        countParallelQuery: 25,
    },
];

const IS_MAY_BE_FAILURE_ARRAY: [false, true] = [false, true];
const IS_NOT_FAILURE_POSTFIX = ', запросы всегда успешные';
const IS_FAILURE_POSTFIX = ', запросы могут не всегда быть успешными';

describe('Тесты задачи "Параллельные запросы"', () => {
    IS_MAY_BE_FAILURE_ARRAY.forEach((isMayBeFailure) => {
        describe(`Статический парсер${
            isMayBeFailure ? IS_FAILURE_POSTFIX : IS_NOT_FAILURE_POSTFIX
        }`, () => {
            afterEach(() => {
                // restore the spy created with spyOn
                jest.restoreAllMocks();
            });

            STATIC_PARSER_TEST_CASES.forEach((testCase) => {
                test(testCase.testName, () => {
                    const urls = staticParserGenerateRequestArray(testCase.urlListLength);

                    if (isMayBeFailure) {
                        const spyIsMoreRandomPercentage = jest.spyOn(
                            SharedUtils,
                            'isMoreRandomPercentage',
                        );

                        // Гарантируем падаение "моков" несколько раз, но без фанатизма.
                        spyIsMoreRandomPercentage
                            .mockReturnValue(false)
                            .mockReturnValueOnce(true)
                            .mockReturnValueOnce(true)
                            .mockReturnValueOnce(true)
                            .mockReturnValueOnce(true);
                    }

                    return parallelQuery<string>({
                        urls,
                        countDownloadRetries: 3,
                        countParallelQuery: testCase.countParallelQuery,
                        fetchCallback: (url) => fetchSimulator({ resultData: url, isMayBeFailure }),
                    }).then((result) => {
                        expect(result).toEqual(urls);
                    });
                });
            });
        });
    });
});
