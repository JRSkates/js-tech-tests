const isPrime = require("../src/isPrime.js");

describe("isPrime Function", () => {
  it("should return False numbers below 2", () => {
    expect(isPrime(1)).toBe(false);
  });

  it("should return false for numbers that are not prime", () => {
    expect(isPrime(4)).toBe(false);
  });

  it("should return true for prime numbers", () => {
    expect(isPrime(3)).toBe(true);
  });
});