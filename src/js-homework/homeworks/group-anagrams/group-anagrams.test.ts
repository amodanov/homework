import { groupAnagrams } from '#/src/js-homework/homeworks/group-anagrams/index';

type TestCase = {
    testName: string;
    input: string[];
    output: string[][];
};

const TEST_CASES: TestCase[] = [
    {
        testName: "'сон', 'нос', 'сорт', 'трос', 'торт', 'рост'",
        input: ['сон', 'нос', 'сорт', 'трос', 'торт', 'рост'],
        output: [['сон', 'нос'], ['сорт', 'трос', 'рост'], ['торт']],
    },
    {
        testName: "'Сон', 'сон', 'Нос', 'нос', 'сОн', 'нОс', 'пиу', 'торт'",
        input: ['Сон', 'сон', 'Нос', 'нос', 'сОн', 'нОс', 'пиу', 'торт'],
        output: [['Сон', 'сон', 'Нос', 'нос', 'сОн', 'нОс'], ['пиу'], ['торт']],
    },
];

describe('Тесты задачи "Группировка анаграмм"', () => {
    TEST_CASES.forEach((testCase) => {
        test(testCase.testName, () => {
            expect(groupAnagrams(testCase.input)).toEqual(testCase.output);
        });
    });
});
