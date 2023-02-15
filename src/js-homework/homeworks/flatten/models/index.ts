// eslint-disable-next-line @typescript-eslint/ban-types
export type ArrayItem = null | undefined | number | string | boolean | Function | Object;

export type RecursiveArray = ArrayItem | RecursiveArray[];
