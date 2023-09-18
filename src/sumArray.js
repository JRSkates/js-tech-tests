const sumArray = (numbers) => {
  // Use the reduce() method to sum all elements in the array
  return numbers.reduce((total, current) => total + current, 0);
}
  
module.exports = sumArray;
  