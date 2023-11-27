import { leftZeroPadding } from "./left-zero-padding";

describe('leftZeroPadding functions', () => {
    it('When i give 2 and 3, i get 0002', () => {
        expect(leftZeroPadding('2', 3)).toEqual('0002');
    });

    it('When i give only 5 as param, i get 0005', () => {
        expect(leftZeroPadding('5')).toEqual('0005');
    });

    it('When i give 7 and 0, i get 7', () => {
        expect(leftZeroPadding('7', 0)).toEqual('7');
    });

});
