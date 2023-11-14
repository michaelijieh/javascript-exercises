const convertToCelsius = function(temp) {
  temp = (temp - 32)/(9/5)
  if (Number.isInteger(temp)) {
    return temp
  } else {
    return Number(temp.toFixed(1))
  }


};

const convertToFahrenheit = function(temp) {
  temp = (temp * 9/5) +32
  if (Number.isInteger(temp)) {
    return temp
  } else {
    return Number(temp.toFixed(1))
  }
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
