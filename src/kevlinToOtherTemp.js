const kelvinConverter = (kelvin) => {
  const celsius = kelvin - 273;
  const fahrenheit = Math.floor(celsius * (9/5) + 32);
  return `The temperature is ${fahrenheit} degrees Fahrenheit\nThe temperature is ${celsius} degrees in Celsius`;
};

module.exports = kelvinConverter;