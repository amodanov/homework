/**
 * Параметры метода запуска параллельных запросов.
 *
 * @prop urls Количество значений в массиве.
 * @prop fetchCallback Колбек асинхронной загрузки данных.
 * @prop [countParallelQuery] Количество запускаемых параллельных запросов.
 * @prop [countDownloadRetries] Количество повторных попыток загрузки.
 */
export type ParallelQueryProps<Request> = {
    urls: string[];
    fetchCallback: (url: string) => Promise<Request>;
    countParallelQuery?: number;
    countDownloadRetries?: number;
};
