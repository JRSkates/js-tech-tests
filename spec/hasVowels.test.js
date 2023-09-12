const hasVowels = require("../src/hasVowels.js")

describe("hasVowels function", () => {
  it("should return true when the word has vowels", () => {
    expect(hasVowels("Hello")).toBe(true)
  })
  
  it("should return false when the word has no vowels", () => {
    expect(hasVowels("Hll")).toBe(false)
  })
})