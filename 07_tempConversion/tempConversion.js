const convertToCelsius = function(number) {
  let temperature=(number-32)*5/9;
  let temp=Math.round(temperature*10)/10;
  return temp;
};

const convertToFahrenheit = function(number) {
  let temperature=(number*9/5)+32;
  let temp=Math.round(temperature*10)/10;
  return temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
