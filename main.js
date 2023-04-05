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

module.exports = {
  stringLength,
  reverseString,
};
