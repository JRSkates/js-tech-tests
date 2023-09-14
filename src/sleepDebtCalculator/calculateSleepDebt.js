const getActualSleepHours = require('./getActualSleepHours.js');
const getIdealSleepHours = require('./getIdealSleepHours.js');

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
    return "You got the perfect amount of sleep this week!";
  } else if (actualSleepHours > idealSleepHours) {
    const difference = actualSleepHours - idealSleepHours
    return `You got ${difference} hours more sleep than you needed this week!`;
  } else {
    const difference = idealSleepHours - actualSleepHours
    return `You should get ${difference} hours more sleep a week`;
  };
};

module.exports = calculateSleepDebt;