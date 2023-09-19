const removeDuplicates = require('../src/removeDuplicates'); // Replace with the actual path to your code file

describe('removeDuplicates function', () => {
  it('should remove duplicates from an array of numbers', () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should remove duplicates from an array of strings', () => {
    expect(removeDuplicates(['apple', 'banana', 'apple', 'cherry'])).toEqual(['apple', 'banana', 'cherry']);
  });

  it('should handle an empty array', () => {
    expect(removeDuplicates([])).toEqual([]);
  });

  it('should handle an array with no duplicates', () => {
    expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
