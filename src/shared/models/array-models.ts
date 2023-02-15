/**
 * Вспомогательный тип для получения последнего типа из списка типов.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PickLastOnArray<T extends any[]> = T extends [...rest: infer _U, argn: infer L]
    ? L
    : any;
