const add = function(a, b) {
  return a + b
	
};

const subtract = function(a, b) {
  return a - b
	
};

const sum = function(array) {
  let total = 0;

  for (const number of array) {
    total += number
  }
  return total

	
};

const multiply = function(array) {
  let total = 1;

  for (const number of array) {
    total *= number
  }
  return total


};

const power = function(a, b) {
  let result = Math.pow(a, b);
  return result
	
};

const factorial = function(number) {
  let total = 1;
  for (let i = 1; i <= number; i++) {
    total *= i
  }
  return total
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};


