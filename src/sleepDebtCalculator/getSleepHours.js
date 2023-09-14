const getSleepHours = (day) => {
  switch(day) {
    case 'monday':
      return 8
    case 'tuesday':
      return 6
    case 'wednesday':
      return 5
    case 'thursday':
      return 7
    case 'friday':
      return 8
    case 'saturday':
      return 9
    case 'sunday':
      return 10
  };
};

module.exports = getSleepHours;