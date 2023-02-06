import { sortMaxToMinNumbers, sortMinToMaxNumbers } from './array-utils';

describe('Tests array-utils', () => {
    test('Test sortMinToMaxNumbers. input [3, 4, 5, 2, 1] must return [1, 2, 3, 4, 5]', () => {
        expect(sortMinToMaxNumbers([3, 4, 5, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    test('Test sortMinToMaxNumbers. input [3, 4, 5, 5, 2, 1] must return [1, 2, 3, 4, 5, 5]', () => {
        expect(sortMinToMaxNumbers([3, 4, 5, 5, 2, 1])).toEqual([1, 2, 3, 4, 5, 5]);
    });

    test('Test sortMaxToMinNumbers. input [3, 4, 5, 2, 1] must return [5, 4, 3, 2, 1]', () => {
        expect(sortMaxToMinNumbers([3, 4, 5, 2, 1])).toEqual([5, 4, 3, 2, 1]);
    });

    test('Test sortMaxToMinNumbers. input [3, 4, 5, 5, 2, 1] must return [5, 5, 4, 3, 2, 1]', () => {
        expect(sortMaxToMinNumbers([3, 4, 5, 5, 2, 1])).toEqual([5, 5, 4, 3, 2, 1]);
    });
});
