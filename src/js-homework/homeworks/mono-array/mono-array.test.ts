import { isMonoArray } from '#/src/js-homework/homeworks/mono-array/index';

type TestCase = {
    input: number[];
    output: boolean;
};

const TEST_CASES: TestCase[] = [
    {
        input: [1, 2, 3],
        output: true,
    },
    {
        input: [3, 2, 1],
        output: true,
    },
    {
        input: [1, 1, 1],
        output: true,
    },
    {
        input: [1, 1, 2, 2, 3, 3],
        output: true,
    },
    {
        input: [3, 3, 2, 2, 1, 1],
        output: true,
    },
    {
        input: [3, 2, 1, 3, 2, 1],
        output: false,
    },
    {
        input: [1, 2, 1],
        output: false,
    },
];

describe('Тесты задачи "Моно-массив"', () => {
    TEST_CASES.forEach((testCase) => {
        test(`[${testCase.input.toString()}] is ${testCase.output ? '' : 'not'} mono-array`, () => {
            expect(isMonoArray(testCase.input)).toEqual(testCase.output);
        });
    });
});
