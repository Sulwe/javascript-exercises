const add = function(x, y) {
  return (parseInt(x) + parseInt(y));
	
};

const subtract = function(x, y) {
  return (parseInt(x) - parseInt(y));
	
};

const sum = function(arr) {
  let total = 0;
  arr.forEach(element => {
    total += parseInt(element); 
  });
  return total;
	
};

const multiply = function(arr) {
  let product = 1;
  arr.forEach(element => {
    product *= element;
  })
  return product;

};

const power = function(x, y) {
  return(x ** y);
	
};

const factorial = function(x) {
  if(x === 0){
    return 1;
  } else {
    return (x * factorial(x - 1));
  }
	
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
