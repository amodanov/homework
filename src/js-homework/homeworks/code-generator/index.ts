import { getMaxNumberByLength } from '#/src/shared/utils';

/**
 * Функция-конструктор генератора паролей.
 *
 * @param length Количество символов в коде.
 */
export class CodeGenerator {
    private readonly length: number;

    private index = -1;

    private codeArray: number[] = [];

    constructor(length: number) {
        this.length = length;
    }

    private makeNewCodeArray = () => {
        const maxSize = getMaxNumberByLength(this.length);

        this.index = -1;
        this.codeArray = Array.from({ length: maxSize + 1 }, (_item, number) => number).sort(
            () => Math.random() - 0.5,
        );
    };

    public getCode = () => {
        if (this.index >= this.codeArray.length - 1) {
            this.makeNewCodeArray();
        }

        this.index += 1;

        return String(this.codeArray[this.index]).padStart(this.length, '0');
    };
}
