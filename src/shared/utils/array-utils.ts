/**
 * Метод сортировки чисел от меньшего к большему.
 *
 * @param numbers Массив для сортировки.
 */
export const sortMinToMaxNumbers = <CustomNumber extends number>(
    numbers: CustomNumber[],
): CustomNumber[] => numbers.sort((a, b) => a - b);

/**
 * Метод сортировки чисел от большего к меньшему.
 *
 * @param numbers Массив для сортировки.
 */
export const sortMaxToMinNumbers = <CustomNumber extends number>(
    numbers: CustomNumber[],
): CustomNumber[] => numbers.sort((a, b) => b - a);
