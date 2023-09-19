const findMaxValue = require('../src/findMaxValue'); // Replace with the actual path to your code file

describe('findMaxValue function', () => {
  it('should return undefined for an empty array', () => {
    expect(findMaxValue([])).toBe(undefined);
  });

  it('should find the maximum value in an array of positive numbers', () => {
    expect(findMaxValue([1, 3, 5, 2])).toBe(5);
  });

  it('should find the maximum value in an array of negative numbers', () => {
    expect(findMaxValue([-1, -3, -5, -2])).toBe(-1);
  });

  it('should find the maximum value in an array of mixed positive and negative numbers', () => {
    expect(findMaxValue([1, -3, 5, -2])).toBe(5);
  });

  it('should handle an array with one element', () => {
    expect(findMaxValue([42])).toBe(42);
  });
});
