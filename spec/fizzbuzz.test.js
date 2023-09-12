const fizzbuzz = require("../src/fizzbuzz.js")

describe("Fizzbuzz", () => {
  it("Returns FizzBuzz when given a multiple of 3 and 5", () => {
    const result = fizzbuzz(15)
    expect(result).toBe("FizzBuzz")
  })

  it ("Returns Buzz when given a multiple of 5", () => {
    const result = fizzbuzz(5)
    expect(result).toBe("Buzz")
  })

  it ("Returns Fizz when given a multiple of 3", () => {
    const result = fizzbuzz(3)
    expect(result).toBe("Fizz")
  })

  it ("Returns the number if not a multiple of 3 or 5", () => {
    const result = fizzbuzz(2)
    expect(result).toBe(2)
  })
})