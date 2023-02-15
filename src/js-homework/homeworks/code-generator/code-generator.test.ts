import { CodeGenerator } from '#/src/js-homework/homeworks/code-generator/index';
import { getMaxNumberByLength } from '#/src/shared/utils';

type TestCase = {
    testName: string;
    length: number;
};

const TEST_CASES: TestCase[] = [
    {
        testName: 'Генерация паролей длинной в 1 символ',
        length: 1,
    },
    {
        testName: 'Генерация паролей длинной в 2 символа',
        length: 2,
    },
    {
        testName: 'Генерация паролей длинной в 5 символов',
        length: 5,
    },
];

describe('Тесты задачи "Группировка анаграмм"', () => {
    TEST_CASES.forEach((testCase) => {
        test(`${testCase.testName}. Генерируем 9 паролей, проверяем их длину и вхождение в интервал`, () => {
            const getCode4Length = new CodeGenerator(testCase.length);
            const maxSize = getMaxNumberByLength(testCase.length);

            // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-restricted-syntax
            for (const item of Array.from({ length: 9 })) {
                const code = getCode4Length.getCode();

                expect(code).toHaveLength(testCase.length);
                expect(+code).toBeLessThanOrEqual(maxSize);
            }
        });
    });
});
