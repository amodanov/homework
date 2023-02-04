import { DenominationLimit } from '#/src/js-homework/homeworks/atm/models';
import { manualRecalculationDenominationLimit } from '#/src/js-homework/homeworks/atm/utils/test-utils';

describe('Тесты утилиты для автоматизации тестирования', () => {
    const denominationLimit: DenominationLimit = {
        5000: 5,
        1000: 5,
        500: 5,
        100: 5,
        50: 5,
    };

    test('Забираем по 1 купюре каждого номинала', () => {
        const result = manualRecalculationDenominationLimit(denominationLimit, {
            5000: 1,
            1000: 1,
            500: 1,
            100: 1,
            50: 1,
        });

        expect(result).toEqual({
            5000: 4,
            1000: 4,
            500: 4,
            100: 4,
            50: 4,
        });
    });

    test('Забираем несколько купюр номинала 5000,500 и 50', () => {
        const result = manualRecalculationDenominationLimit(denominationLimit, {
            5000: 1,
            500: 2,
            50: 3,
        });

        expect(result).toEqual({
            5000: 4,
            1000: 5,
            500: 3,
            100: 5,
            50: 2,
        });
    });
});
