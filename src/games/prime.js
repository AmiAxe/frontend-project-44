import { roundsCount, initLogic } from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

const mainTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkSimple = (number) => {
  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0 || number === 1) {
      return false;
    }
  }
  return true;
};

const launchGame = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const number = getRandomInt(1, 100);
    const question = `${number}`;
    const answer = checkSimple(number) ? 'yes' : 'no';
    rounds.push([question, answer]);
  }
  initLogic(mainTask, rounds);
};

export default launchGame;
