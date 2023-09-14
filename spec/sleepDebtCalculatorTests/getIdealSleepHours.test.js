const getIdealSleepHours = require('../../src/sleepDebtCalculator/getIdealSleepHours.js');

describe('getIdealSleepHours function', () => {
  it('should return the ideal sleep hours', () => {
    expect(getIdealSleepHours()).toEqual(56);
  });
});
