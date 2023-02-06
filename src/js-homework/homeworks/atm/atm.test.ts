import { INCORRECT_VALUE, NOT_ENOUGH_MONEY } from '#/src/js-homework/homeworks/atm/const';
import { atm } from '#/src/js-homework/homeworks/atm/index';
import { CurrencyDenomination, DenominationLimit } from '#/src/js-homework/homeworks/atm/models';
import { manualRecalculationDenominationLimit } from '#/src/js-homework/homeworks/atm/utils';

type ATMTestCase = {
    testName: string;
    requestedAmount: number;
} & (
    | {
          isSuccess: true;
          denominationForIssuance: DenominationLimit;
      }
    | {
          isSuccess: false;
          error: string;
      }
);

const ATM_TEST_CASES: ATMTestCase[] = [
    {
        isSuccess: false,
        testName:
            'Запрос на выдачу суммы которой нет в банкомате, должен генерировать ошибку NOT_ENOUGH_MONEY',
        requestedAmount: 1000000,
        error: NOT_ENOUGH_MONEY,
    },
    {
        isSuccess: false,
        testName: 'Запрос на выдачу некорректной суммы, должен генерировать ошибку INCORRECT_VALUE',
        requestedAmount: 1234,
        error: INCORRECT_VALUE,
    },
    {
        isSuccess: true,
        testName: 'Успешная выдача 1250 рублей',
        requestedAmount: 1250,
        denominationForIssuance: { 1000: 1, 100: 2, 50: 1 },
    },
    {
        isSuccess: true,
        testName: 'Успешная выдача 2400 рублей',
        requestedAmount: 2400,
        denominationForIssuance: { 1000: 2, 100: 3, 50: 2 },
    },
    {
        isSuccess: true,
        testName: 'Успешная выдача 50 рублей',
        requestedAmount: 50,
        denominationForIssuance: { 50: 1 },
    },
    {
        isSuccess: false,
        testName:
            'При попытке выдать 50 рублей должна выдаваться ошибка, т.к. в банкомате кончились купюры этого номинала',
        requestedAmount: 50,
        error: NOT_ENOUGH_MONEY,
    },
    {
        isSuccess: true,
        testName: 'Успешная выдача 5500 рублей',
        requestedAmount: 5500,
        denominationForIssuance: { 1000: 3, 500: 5 },
    },
];

describe('Тесты задачи "Банкомат"', () => {
    const currencyDenominations: CurrencyDenomination[] = [5000, 1000, 500, 100, 50];
    let denominationLimit: DenominationLimit = {
        5000: 0,
        1000: 6,
        500: 5,
        100: 5,
        50: 4,
    };

    ATM_TEST_CASES.forEach((testCase) => {
        if (testCase.isSuccess) {
            test(testCase.testName, () => {
                const result = atm(
                    testCase.requestedAmount,
                    currencyDenominations,
                    denominationLimit,
                );

                expect(result.denominationLimit).toEqual(
                    manualRecalculationDenominationLimit(
                        denominationLimit,
                        testCase.denominationForIssuance,
                    ),
                );

                denominationLimit = result.denominationLimit;

                expect(result.denominationForIssuance).toEqual(testCase.denominationForIssuance);
            });
        } else {
            test(testCase.testName, () => {
                expect(() =>
                    atm(testCase.requestedAmount, currencyDenominations, denominationLimit),
                ).toThrow(TypeError(testCase.error));
            });
        }
    });
});
