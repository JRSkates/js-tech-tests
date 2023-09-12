const reverseString = require("../src/reverseString.js");

describe("reverseString function", () => {
  it("should reverse Hello to olleH", () => {
    expect(reverseString("Hello")).toBe("olleH")
  });

  it("should reverse Hello, World! to !dlroW ,olleH", () => {
    expect(reverseString("Hello, World!")).toBe("!dlroW ,olleH")
  });
});