const { default: expect } = require('expect');
const {
  stringLength,
  reverseString,
  Calculator,
  capitalize,
} = require('./main.js');

test('String is ok', () => {
  expect(stringLength('Hello')).toBe(5);
});

test('String is out of range', () => {
  expect(() => stringLength('123456789hello')).toThrow(Error);
});

test('String is reversed successfully', () => {
  expect(reverseString('Hello')).toBe('olleH');
});

describe('Test calculator', () => {
  test('Sum working', () => {
    const calculator = new Calculator();
    const calculatorAdd = calculator.add(2, 2);

    expect(calculatorAdd).toBe(4);
  });

  test('Substraction working', () => {
    const calculator = new Calculator();
    const calculatorSub = calculator.subtract(6, 2);

    expect(calculatorSub).toBe(4);
  });

  test('Multiplication working', () => {
    const calculator = new Calculator();
    const calculatorMultiply = calculator.multiply(2, 2);

    expect(calculatorMultiply).toBe(4);
  });

  test('Division working', () => {
    const calculator = new Calculator();
    const calculatorDivision = calculator.divide(8, 2);

    expect(calculatorDivision).toBe(4);
  });
});

test('Capitalized string', () => {
  expect(capitalize('hello')).toBe('Hello');
});
