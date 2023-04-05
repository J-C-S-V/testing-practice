const { default: expect } = require('expect');
const { stringLength, reverseString } = require('./main.js');

// Test stringLength
test('String is ok', () => {
  expect(stringLength('Hello')).toBe(5);
});
test('String is out of range', () => {
  expect(() => stringLength('123456789hello')).toThrow(Error);
});

// Test reverseString

test('String is reversed successfully', () => {
  expect(reverseString('Hello')).toBe('olleH');
});
