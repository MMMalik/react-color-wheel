// @flow

import { HEX, initHex, mix } from './withColors';

describe('hex colors', () => {
    test('HEX - all hex values from 0 to 255', () => {
        expect(HEX.length).toEqual(256);
        expect(HEX[0]).toEqual('00');
        expect(HEX[255]).toEqual('ff');
    });

    test('initHex - return valid hex value', () => {
        expect(initHex()).toEqual('00');
        expect(initHex('ff')).toEqual('ff');
    });

    test('mix - mix rgb values', () => {
        expect(mix({
            r: { value: 'ff' },
            g: { value: 'ff' }
        })).toEqual('#ffff00');
        expect(mix({
            r: { value: 'ff' },
            g: { value: 'ff' },
            b: { value: 'aa' }
        })).toEqual('#ffffaa');
    });
});
