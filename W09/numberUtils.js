// numberUtils.js

const isOdd = (number) => {
  return number % 2 !== 0;
};

const isEven = (number) => {
  return number % 2 === 0;
};

module.exports = { isOdd, isEven };
