const eightBall = require('../src/eightBall.js');

describe("eightBall function", () => {
  it("should return a string", () => {
      expect(typeof eightBall()).toBe("string");
  });
})