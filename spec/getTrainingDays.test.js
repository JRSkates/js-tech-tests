// Import the functions to be tested
const { getRandEvent, getTrainingDays } = require('../src/trainingDays.js');

// Define test cases
describe('getRandEvent function', () => {
  it('should return one of three event names', () => {
    const event = getRandEvent();
    expect(['Marathon', 'Triathlon', 'Pentathlon']).toContain(event);
  });
});

describe('getTrainingDays function', () => {
  it('should return the correct training days for Marathon', () => {
    const days = getTrainingDays('Marathon');
    expect(days).toBe(50);
  });

  it('should return the correct training days for Triathlon', () => {
    const days = getTrainingDays('Triathlon');
    expect(days).toBe(100);
  });

  it('should return the correct training days for Pentathlon', () => {
    const days = getTrainingDays('Pentathlon');
    expect(days).toBe(200);
  });
});
