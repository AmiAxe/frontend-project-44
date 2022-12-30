import initLogic from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

const mainTask = 'Find the greatest common divisor of given numbers.';

const countGcd = (bigNumber, smallNumber) => {
  for (let i = smallNumber; i > 0; i -= 1) {
    if (bigNumber % i === 0 && smallNumber % i === 0) {
      return i;
    }
  }
  return NaN;
};

const launchGame = () => {
  const rounds = [];

  for (let i = 0; i < 3; i += 1) {
    const a = getRandomInt(1, 100);
    const b = getRandomInt(1, 100);
    const question = `${a} ${b}`;
    const answer = (a > b) ? countGcd(a, b) : countGcd(b, a);
    rounds.push([question, answer]);
  }
  initLogic(mainTask, rounds);
};

export default launchGame;
