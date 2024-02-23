import { getPublicURL } from '..';

describe('getPublicURL', () => {
    it('default', () => {
        expect(getPublicURL('')).toMatchInlineSnapshot('"/test/"');
    });

    it('test', () => {
        expect(getPublicURL('test.svg')).toMatchInlineSnapshot('"/test/test.svg"');
    });
});
