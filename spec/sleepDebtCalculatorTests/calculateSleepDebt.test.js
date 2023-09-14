const calculateSleepDebt = require('../../src/sleepDebtCalculator/calculateSleepDebt.js');

describe('calculateSleepDebt function', () => {
  it('should return my sleep debt', () => {
    expect(calculateSleepDebt()).toBe("You should get 3 hours more sleep a week");
  });
});
