import { flatten } from '#/src/js-homework/homeworks/flatten/index';
import type { ArrayItem, RecursiveArray } from '#/src/js-homework/homeworks/flatten/models';

type TestCase = {
    testName: string;
    input: RecursiveArray;
    output: ArrayItem[];
};

const sixFunction = function six() {};
const TEST_CASES: TestCase[] = [
    {
        testName: '[1, 2, [3, [4], 5]]',
        input: [1, 2, [3, [4], 5]],
        output: [1, 2, 3, 4, 5],
    },
    {
        testName: "[1, '2', [3, [4], 5]]",
        input: [1, '2', [3, [4], 5]],
        output: [1, '2', 3, 4, 5],
    },
    {
        testName: "[1, '2', [{ 3: 'obj' }, [4], 5]]",
        input: [1, '2', [{ 3: 'obj' }, [4], 5]],
        output: [1, '2', { 3: 'obj' }, 4, 5],
    },
    {
        testName: "[1, '2', [{ 3: 'obj' }, [4], 5, sixFunction]]",
        input: [1, '2', [{ 3: 'obj' }, [4], 5], [[[[[sixFunction]]]]]],
        output: [1, '2', { 3: 'obj' }, 4, 5, sixFunction],
    },
    {
        testName: "[1, '2', [3, [null], undefined]]",
        input: [1, '2', [3, [null], undefined]],
        output: [1, '2', 3, null, undefined],
    },
];

describe('Тесты задачи "Группировка анаграмм"', () => {
    TEST_CASES.forEach((testCase) => {
        test(testCase.testName, () => {
            expect(flatten(testCase.input)).toEqual(testCase.output);
        });
    });
});
