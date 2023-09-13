const kelvinConverter = require("../src/kevlinToOtherTemp.js")

describe("kelvinConverter function", () => {
  it("should convert kelvin to fahrenheit to celsius", () => {
    expect(kelvinConverter(0)).toBe( `The temperature is -460 degrees Fahrenheit\nThe temperature is -273 degrees in Celsius`)
    expect(kelvinConverter(293)).toBe( `The temperature is 68 degrees Fahrenheit\nThe temperature is 20 degrees in Celsius`)
  })
})