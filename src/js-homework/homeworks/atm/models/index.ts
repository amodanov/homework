/**
 * Описание модели доступных номиналов валюты.
 */
export type CurrencyDenomination = 5000 | 1000 | 500 | 100 | 50 | 10 | 5 | 1;

/**
 * Описание модели доступного количества номиналов валюты.
 */
export type DenominationLimit = Partial<Record<CurrencyDenomination, number>>;
