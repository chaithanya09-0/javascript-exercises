const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(args) {
	return args.reduce((sum,item)=>sum+item,0);
};

const multiply = function(args) {
  return args.reduce((total,item)=>total*item, 1);
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  if(a === 1 || a===0) return 1;
	return a*factorial(a-1);
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
