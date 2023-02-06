/**
 * Параметры передаваемые в метод симуляции поведения асинхронного запроса.
 *
 * @prop resultData Данные которые вернет симулятор запроса.
 * @prop [isMayBeFailure] Флаг определяющий возможность того что запрос будет провальным.
 */
export type FetchSimulatorProps<Request> = {
    resultData: Request;
    isMayBeFailure?: boolean;
};

/**
 * Симуляция поведения асинхронного запроса каких либо данных с API.
 *
 * @param props Параметры метода.
 */
export const fetchSimulator = <Request>(props: FetchSimulatorProps<Request>): Promise<Request> =>
    new Promise<Request>((resolve, reject) => {
        const isFailure = props.isMayBeFailure && Math.random() * 100 > 95;
        const requestExecutionTime = Math.random() * (isFailure ? 300 : 600);

        setTimeout(() => {
            if (isFailure) {
                reject(Error('упс'));
            } else {
                resolve(props.resultData);
            }
        }, requestExecutionTime);
    });
