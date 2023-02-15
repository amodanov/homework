/**
 * Метод проверки является ли переданный массив моно-массивом.
 *
 * @param array Массив чисел который требуется проверить.
 */
export const isMonoArray = (array: number[]): boolean => {
    /**
     * Тип проверки в массиве.
     *
     * @description
     *
     * -1 - Тип проверки по убыванию.
     *  0 - Тип при котором происходит определение типа проверки.
     *  1 - Тип проверки по возрастанию.
     */
    let typeCheck: -1 | 0 | 1 = 0;

    const [firstItem, ...otherItems] = array;
    let prevItem = firstItem;

    // eslint-disable-next-line no-restricted-syntax
    for (const item of otherItems) {
        switch (typeCheck) {
            case 0: {
                if (item > prevItem) {
                    typeCheck = 1;
                }
                if (item < prevItem) {
                    typeCheck = -1;
                }
                break;
            }
            case -1: {
                if (item > prevItem) {
                    return false;
                }
                break;
            }
            case 1: {
                if (item < prevItem) {
                    return false;
                }
                break;
            }
        }

        prevItem = item;
    }

    return true;
};
