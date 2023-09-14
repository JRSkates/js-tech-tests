const getActualSleepHours = require('../../src/sleepDebtCalculator/getActualSleepHours.js');

describe('getActualSleepHours function', () => {
  it("should return the sum of the hours I slept", () => {
    expect(getActualSleepHours()).toBe(53);
  })
});
