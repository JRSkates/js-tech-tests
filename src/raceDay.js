const raceDay = (registeredEarly, age) => {
  let raceNumber = Math.floor(Math.random() * 1000);
  
  if (registeredEarly && age > 18) {
    raceNumber += 1000;
    return `Registered adults will race at 9:30am: ${raceNumber}`;
  } else if (!registeredEarly && age > 18) {
    return `Late adults run at 11:00 am: ${raceNumber}`;
  } else if (age < 18){
    return `Youth registrants run at 12:30 pm (regardless of registration): ${raceNumber}`;
  } else {
    return "Please see registration desk";
  };
};

module.exports = raceDay;