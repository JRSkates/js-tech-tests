const getSleepHours = require("../../src/sleepDebtCalculator/getSleepHours.js");

describe("getSleepHours function", () => {
  it("should return the correct sleep hours", () => {
    expect(getSleepHours('monday')).toEqual(8);
    expect(getSleepHours('tuesday')).toEqual(6);
    expect(getSleepHours('wednesday')).toEqual(5);
    expect(getSleepHours('thursday')).toEqual(7);
    expect(getSleepHours('friday')).toEqual(8);
    expect(getSleepHours('saturday')).toEqual(9);
    expect(getSleepHours('sunday')).toEqual(10);
  })
});
