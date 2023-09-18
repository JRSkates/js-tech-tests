const sumArray = require('../src/sumArray.js'); // Replace with the actual path to your code file

describe('sumArray function', () => {
  it('should return 0 for an empty array', () => {
    expect(sumArray([])).toBe(0);
  });

  it('should return the sum of positive numbers', () => {
    expect(sumArray([1, 2, 3])).toBe(6);
  });

  it('should return the sum of negative numbers', () => {
    expect(sumArray([-1, -2, -3])).toBe(-6);
  });

  it('should return the sum of mixed positive and negative numbers', () => {
    expect(sumArray([1, -2, 3])).toBe(2);
  });

  it('should handle large numbers', () => {
    expect(sumArray([1000000, 2000000, 3000000])).toBe(6000000);
  });
});
