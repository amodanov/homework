/**
 * Генерация массива запросов.
 *
 * @param count Количество значений в массиве.
 */
export const staticParserGenerateRequestArray = (count: number): string[] =>
    Array.from({ length: count }, (_item, index) => String(index));
