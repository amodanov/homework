import { compose } from '#/src/js-homework/homeworks/compose/index';
import type { AnyFunction } from '#/src/shared/models';
import { getMaxNumberByLength } from '#/src/shared/utils';

type TestCase = {
    functionsArray: AnyFunction[];
    composeArgs: number;
    output: number;
};

const plusOne = (number: number) => number + 1;
const halfOfNumber = (number: number) => number / 2;

const TEST_CASES: TestCase[] = [
    {
        functionsArray: [getMaxNumberByLength],
        composeArgs: 2,
        output: 99,
    },
    {
        functionsArray: [plusOne, getMaxNumberByLength],
        composeArgs: 2,
        output: 100,
    },
    {
        functionsArray: [halfOfNumber, plusOne, getMaxNumberByLength],
        composeArgs: 2,
        output: 50,
    },
];

describe('Тесты задачи "Реализация compose"', () => {
    TEST_CASES.forEach((testCase) => {
        test(`compose([${testCase.functionsArray.map((func) => func.name).join(' ,')}])(${
            testCase.composeArgs
        }); -> ${testCase.output}`, () => {
            expect(compose(...testCase.functionsArray)(testCase.composeArgs)).toEqual(
                testCase.output,
            );
        });
    });
});
