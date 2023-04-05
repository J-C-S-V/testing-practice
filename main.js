function stringLength(string) {
  if (string.length >= 1 && string.length <= 10) {
    return string.length;
  } else {
    throw new Error('String is < 1 or > 10');
  }
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  divide(a, b) {
    return a / b;
  }
  multiply(a, b) {
    return a * b;
  }
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

console.log(capitalize('Hello'));

module.exports = {
  stringLength,
  reverseString,
  Calculator,
  capitalize,
};
