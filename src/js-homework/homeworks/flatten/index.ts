import type { ArrayItem, RecursiveArray } from '#/src/js-homework/homeworks/flatten/models';

/**
 * Метод делает массив плоским.
 *
 * @param arr Массив который может содержать другие массивы.
 */
export const flatten = (arr: RecursiveArray): ArrayItem[] => {
    const resultArray: ArrayItem[] = [];
    const array = [arr];

    while (array.length > 0) {
        const item = array.pop();

        if (Array.isArray(item)) {
            for (let i = item.length - 1; i >= 0; --i) {
                array.push(item[i]);
            }
        } else {
            resultArray.push(item);
        }
    }

    return resultArray;
};
