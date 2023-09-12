const calculateAverage = require("../src/calculateAverage.js");

describe("calculateAverage function", () => {
  it("if the list is empty it should throw an error", () => {
    try {
      calculateAverage([]);
        
      // If the function doesn't throw an error, fail the test
      fail('Expected calculateAverage to throw an error for empty input list');
    } catch (error) {
      // Check if the error message matches the expected message
      expect(error.message).toBe('Input list is empty, cannot calculate the average');
    };
  });

  it("should return 3.0 as the average of [1, 2, 3, 4, 5]", () => {
    expect(calculateAverage([1, 2, 3, 4, 5])).toBe(3.0);
  });
});