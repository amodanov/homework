/**
 * Метод генерации случайного числа от min до max.
 *
 * @param min Массив для сортировки.
 * @param max Массив для сортировки.
 */
export const getRandomNumber = (min: number, max: number) => Math.random() * (max - min) + min;

/**
 * Метод проверки вероятности наступления какого-либо события.
 *
 * @param percentage Процент выше которого условие считается истинным.
 */
export const isMoreRandomPercentage = (percentage: number) => getRandomNumber(0, 100) > percentage;
