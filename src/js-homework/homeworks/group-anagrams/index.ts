/**
 * Группировка анаграмм.
 *
 * @param arr Список слов которые требуется сгруппировать по признаку анаграммы.
 */
export const groupAnagrams = (arr: string[]): string[][] =>
    Object.values(
        arr.reduce((acc, word) => {
            (acc[word.toLowerCase().split('').sort().join('')] ??= []).push(word);

            return acc;
        }, {} as Record<string, string[]>),
    );
