import { INCORRECT_VALUE, NOT_ENOUGH_MONEY } from '#/src/js-homework/homeworks/atm/const';
import { CurrencyDenomination, DenominationLimit } from '#/src/js-homework/homeworks/atm/models';
import { getTheMinimumAvailableDivisor } from '#/src/js-homework/homeworks/atm/utils';
import { sortMaxToMinNumbers } from '#/src/shared/utils';

/**
 * Описание результата работы метода выдачи денежных средств.
 *
 * @prop denominationLimit Новый остаток денежных средств в банкомате.
 * @prop denominationForIssuance Выдаваемые денежные средства клиенту.
 */
type AtmResult = {
    denominationLimit: DenominationLimit;
    denominationForIssuance: DenominationLimit;
};

/**
 * Метод реализующий расчет выдачи валюты из банкомата.
 *
 * @param requestedAmount Запрашиваемая сумма.
 * @param currencyDenominations Доступные в банкомате номиналы валюты.
 * @param denominationLimit Доступное в банкомате количество номинала валюты.
 */
export const atm = (
    requestedAmount: number,
    currencyDenominations: CurrencyDenomination[],
    denominationLimit: DenominationLimit,
): AtmResult => {
    const minimumAllowableDenomination = getTheMinimumAvailableDivisor(
        requestedAmount,
        currencyDenominations,
    );

    if (minimumAllowableDenomination) {
        const newDenominationLimit = { ...denominationLimit };
        const denominationForIssuance: DenominationLimit = {};
        let residualRequestedAmount = requestedAmount;

        const sortedMaxToMinCurrencyDenominationsFromLimit =
            sortMaxToMinNumbers<CurrencyDenomination>(currencyDenominations);

        // eslint-disable-next-line no-restricted-syntax
        for (const currencyDenominationFromLimit of sortedMaxToMinCurrencyDenominationsFromLimit) {
            const countBanknotesInLimit = newDenominationLimit[currencyDenominationFromLimit];

            if (countBanknotesInLimit) {
                const rightCountBanknotes = Math.floor(
                    residualRequestedAmount / currencyDenominationFromLimit,
                );

                if (rightCountBanknotes) {
                    const realCountBanknotes =
                        rightCountBanknotes > countBanknotesInLimit
                            ? countBanknotesInLimit
                            : rightCountBanknotes;

                    // as потому что точно не undefined
                    (newDenominationLimit[currencyDenominationFromLimit] as number) -=
                        realCountBanknotes;

                    residualRequestedAmount -= realCountBanknotes * currencyDenominationFromLimit;

                    denominationForIssuance[currencyDenominationFromLimit] = realCountBanknotes;

                    if (residualRequestedAmount === 0) {
                        return {
                            denominationLimit: newDenominationLimit,
                            denominationForIssuance,
                        };
                    }
                }
            }
        }

        throw new Error(NOT_ENOUGH_MONEY);
    }

    throw new Error(INCORRECT_VALUE);
};
