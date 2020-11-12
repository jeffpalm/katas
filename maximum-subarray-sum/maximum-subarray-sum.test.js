const maxSequence = require('./maximum-subarray-sum');
const { test, expect, describe } = require('@jest/globals');

describe('maxSequence tests', () => {
  test('Returns 0 with empty array', () => {
    expect(maxSequence([])).toBe(0);
  });
  test('maxSequence test 1', () => {
    expect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });
});
