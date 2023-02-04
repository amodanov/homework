import { sortMinToMaxNumbers } from '#/src/shared/utils';

/**
 * Метод поиска минимального делителя.
 *
 * @param number Число к которому требуется найти минимальный делитель.
 * @param dividers Доступные делители.
 */
export const getTheMinimumAvailableDivisor = <Divider extends number>(
    number: number,
    dividers: Divider[],
): Divider | null => {
    const sortedMinToMaxDividers = sortMinToMaxNumbers(dividers);

    // eslint-disable-next-line no-restricted-syntax
    for (const divider of sortedMinToMaxDividers) {
        if (number % divider === 0) {
            return divider;
        }
    }

    return null;
};
