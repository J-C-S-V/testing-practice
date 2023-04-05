const stringLength = require('./main.js');

test('String is ok', () => {
  expect(stringLength('Hello')).toBe(5);
});
test('String is out of range', () => {
  expect(() => stringLength('123456789hello')).toThrow(Error);
});
