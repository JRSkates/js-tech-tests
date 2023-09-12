const calculateAverage = (nums) => {
  if (nums.length === 0) {
    throw new Error("Input list is empty, cannot calculate the average")
  }
  const total = nums.reduce((sum, num) => sum + num, 0)
  return total / nums.length;
};

module.exports = calculateAverage;