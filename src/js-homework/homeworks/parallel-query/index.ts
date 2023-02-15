import type { ParallelQueryProps } from '#/src/js-homework/homeworks/parallel-query/models';

/**
 * Нормализация индекса границы.
 *
 * @param props Параметры метода.
 */
export const parallelQuery = async <Request>({
    urls,
    fetchCallback,
    countDownloadRetries = 0,
    countParallelQuery = 10,
}: ParallelQueryProps<Request>) => {
    /**
     * Результирующий массив ответов от сервиса API.
     */
    const resultDataArray: Request[] = [];
    const countDownloadRetriesMap: Record<number, number> = {};

    resultDataArray.length = urls.length;

    /**
     * Метод генерации цепочки запросов.
     */
    const generateFetchRequest = (index: number): Promise<void> | undefined =>
        fetchCallback(urls[index])
            .then((results: Request) => {
                resultDataArray[index] = results;

                const nextIndex = index + countParallelQuery;

                if (nextIndex < urls.length) {
                    return generateFetchRequest(nextIndex);
                }

                return undefined;
            })
            .catch((error) => {
                const countDownloadRetriesForIndex = countDownloadRetriesMap[index] || 0;

                if (countDownloadRetries && countDownloadRetriesForIndex < countDownloadRetries) {
                    countDownloadRetriesMap[index] = countDownloadRetriesForIndex + 1;

                    return generateFetchRequest(index);
                }

                throw error;
            });

    /**
     * Запуск первых фетчеров, остальные будут запускаться автоматически.
     */
    await Promise.all(
        Array.from(
            { length: urls.length < countParallelQuery ? urls.length : countParallelQuery },
            (_, index) => generateFetchRequest(index),
        ),
    );

    return resultDataArray;
};
