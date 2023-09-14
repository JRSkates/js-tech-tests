const raceDay = require('../src/raceDay.js');

describe('raceDay function', () => {
  it('should return a string', () => {
    expect(typeof raceDay()).toBe('string');
  });

  it('should return a specific string if they are registered and an adult', () => {
    const result = raceDay(true, 19);
    expect(result).toContain("Registered adults will race at 9:30am:");
  });

  it('should return a specific string if they are not registered and an adult', () => {
    const result = raceDay(false, 19);
    expect(result).toContain("Late adults run at 11:00 am:");
  });

  it('should return a specific string if they are not an adult', () => {
    const resultOne = raceDay(true, 17);
    const resultTwo = raceDay(false, 17);
    expect(resultOne).toContain("Youth registrants run at 12:30 pm (regardless of registration):");
    expect(resultTwo).toContain("Youth registrants run at 12:30 pm (regardless of registration):");
  });

  it('should return a specific string if they are exactly 18', () => {
    const result = raceDay(true, 18);
    expect(result).toBe("Please see registration desk");
  });
});