import mainLogic from '../index.js';

const mainTask = 'Find the greatest common divisor of given numbers.';

const countGcd = (bigNumber, smallNumber) => {
  for (let i = smallNumber; i > 0; i -= 1) {
    if (bigNumber % i === 0 && smallNumber % i === 0) {
      return i;
    }
  }
  return NaN;
};

const newGame = () => {
  const a = Math.round(Math.random() * 100);
  const b = Math.round(Math.random() * 100);
  const question = `${a} ${b}`;
  let answer = 0;

  if (a > b) {
    answer = countGcd(a, b);
  } else {
    answer = countGcd(b, a);
  }
  return [question, answer];
};

export default () => {
  mainLogic(mainTask, newGame);
};
