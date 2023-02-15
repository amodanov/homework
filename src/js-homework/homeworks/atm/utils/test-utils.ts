import type {
    CurrencyDenomination,
    DenominationLimit,
} from '#/src/js-homework/homeworks/atm/models';

/**
 * Метод ручного вычета количества купюр из лимитов, по количеству выданных купюр клиенту.
 *
 * @param denominationLimit Доступное в банкомате количество номинала валюты.
 * @param denominationForIssuance Выдаваемые денежные средства клиенту.
 */
export const manualRecalculationDenominationLimit = (
    denominationLimit: DenominationLimit,
    denominationForIssuance: DenominationLimit,
): DenominationLimit =>
    Object.entries(denominationForIssuance).reduce(
        (
            accumulator: DenominationLimit,
            [currencyDenominationFromIssuance, countBanknotesInIssuance],
        ) => {
            const countBanknotesInLimit =
                accumulator[+currencyDenominationFromIssuance as CurrencyDenomination];

            if (countBanknotesInLimit) {
                if (countBanknotesInIssuance) {
                    return {
                        ...accumulator,
                        [currencyDenominationFromIssuance]:
                            countBanknotesInLimit - countBanknotesInIssuance,
                    };
                }
            } else {
                throw new Error('Некорректное значение');
            }

            return accumulator;
        },
        denominationLimit,
    );
