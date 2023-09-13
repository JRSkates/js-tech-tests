const dogYearsConverter = require('../src/dogYearsConverter.js');

describe("dogYearsConverter function", () => {
  it("should convert an age into dog years", () => {
    expect(dogYearsConverter(27)).toBe(`Your age in Dog Years is 121.`);
    expect(dogYearsConverter(40)).toBe(`Your age in Dog Years is 173.`);
  })
})