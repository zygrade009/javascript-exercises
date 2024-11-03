const add = function(num1, num2) {
	  return num1+num2;
};

const subtract = function(num1, num2) {
	  return num1-num2;
};

const sum = function(numbers) {
	  return numbers.reduce((total,number)=>{return total+number},0);

};

const multiply = function(numbers) {
     return numbers.reduce((product,number)=>{return product*number},1);
};

const power = function(num1,num2) {
	  let total=1;
    while(num2--){
       total*=num1;
    }
    return total;
};

const factorial = function(num) {
	  let total=1;
    let basenum=1;
    while(basenum<=num){
       total*=(basenum++);
    }
    return total;
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
