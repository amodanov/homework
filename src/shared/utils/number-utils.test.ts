import { getMaxNumberByLength } from '#/src/shared/utils/number-utils';

type TestCase = {
    testName: string;
    input: number;
    output: number;
};

const GET_MAX_NUMBER_BY_LENGTH_TEST_CASES: TestCase[] = [
    {
        testName: 'Генерация максимального числа длинной в 1 символ',
        input: 1,
        output: 9,
    },
    {
        testName: 'Генерация максимального числа длинной в 2 символа',
        input: 2,
        output: 99,
    },
    {
        testName: 'Генерация максимального числа длинной в 5 символов',
        input: 5,
        output: 99999,
    },
    {
        testName: 'Генерация максимального числа длинной в 10 символов',
        input: 10,
        output: 9999999999,
    },
];

describe('Tests array-utils', () => {
    describe('Tests getMaxNumberByLength', () => {
        GET_MAX_NUMBER_BY_LENGTH_TEST_CASES.forEach((testCase) => {
            test(testCase.testName, () => {
                expect(getMaxNumberByLength(testCase.input)).toBe(testCase.output);
            });
        });
    });
});
