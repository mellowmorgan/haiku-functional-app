import { checkHaiku } from '../src/haiku.js';

describe('checkHaiku function', () => {
  test('should return false if input is not a haiku', () => {
    expect(checkHaiku("")).toEqual(false);
  });
  test('should return false if input is not a haiku', () => {
    expect(checkHaiku("hjgbhjgjhgjhgjh")).toEqual(false);
  });
  test('should return array with true if input is a haiku', () => {
    const haiku1 = 'Delightful display' + '\r\n' +
    'Snowdrops bow their pure white heads'+'\r\n'+"To the sun's glory.";
    expect(checkHaiku(haiku1)).toEqual([true, 5, 7, 5]);
  });
  test('should return array with false array if input is not a haiku', () => {
    const haiku2 = 'Delightful display' + '\r\n' +
    'Snowdrops bow their dirty off-white heads'+'\r\n'+"To the sun's glory.";
    expect(checkHaiku(haiku2)).toEqual([false, 5, 9, 5]);
  });
});