// counter.js
const createCounter = () => {
  let count = 0;

  return {
    increment: () => {
      count += 1;
      return count;
    },
    decrement: () => {
      count -= 1;
      return count;
    },
    getCount: () => count,
  };
};

module.exports = createCounter;
