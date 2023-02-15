import type { AnyFunction, PickLastOnArray } from '#/src/shared/models';

/**
 * Метод реализации функциональной композиции.
 *
 * @param functionsArray Массив функций.
 */
export const compose =
    <TAnyFunctionArray extends AnyFunction[]>(...functionsArray: TAnyFunctionArray) =>
    (
        ...composeArgs: Parameters<PickLastOnArray<TAnyFunctionArray>>
    ): ReturnType<TAnyFunctionArray[0]> => {
        const reversedFunctionsArray = functionsArray.reverse();

        return reversedFunctionsArray.reduce(
            (args: unknown[], func: AnyFunction) => [func(...args)],
            composeArgs,
        )[0] as ReturnType<TAnyFunctionArray[0]>;
    };
