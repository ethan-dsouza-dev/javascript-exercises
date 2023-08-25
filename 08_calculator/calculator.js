const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let total = 0;
	arr.forEach((num) => {
    total += num;
  });
  return total;
};

const multiply = function(arr) {
  let product = 1;
	arr.forEach((num) => {
    product *= num;
  });
  return product;
};

const power = function(base, index) {
	return base ** index;
};

const factorial = function(num) {
	if (num === 0) return 1;

  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }

  return product;
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
