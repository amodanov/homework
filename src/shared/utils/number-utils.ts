/**
 * Метод создания максимального числа заданной длинны.
 *
 * @param length Количество символов в коде.
 */
export const getMaxNumberByLength = (length: number) => +Array.from({ length }, () => '9').join('');
