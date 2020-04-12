import { remCalc, hexToRGB } from './utils';

describe('Styles utils', () => {
  describe('remCalc', () => {
    test('It should calculate rems with default font size', () => {
      const expected = 1;
      const actual = remCalc(16);

      expect(actual).toEqual(expected);
    });

    test('It should calculate rems with target font size', () => {
      const expected = 1;
      const actual = remCalc(20, 20);

      expect(actual).toEqual(expected);
    });
  });

  describe('hexToRgb', () => {
    test('It should error if provided with not full hex color', () => {
      expect(() => hexToRGB('#333'))
        .toThrowError();
    });
    test('It should error if provided with invalid hex color', () => {
      expect(() => hexToRGB('#qwerty'))
        .toThrowError();
    });
    test('It should return rgb color', () => {
      const hex = '#00479f';
      const expected = 'rgb(0, 71, 159)';
      const actual = hexToRGB(hex);
      expect(actual).toBe(expected);
    });
    test('It should return rgb color with alpha', () => {
      const hex = '#00479f';
      const expected = 'rgba(0, 71, 159, 0.5)';
      const actual = hexToRGB(hex, 0.5);
      expect(actual).toBe(expected);
    });
  });
});
