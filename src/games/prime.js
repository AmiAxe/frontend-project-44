import initLogic from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';
import checkSimple from '../utils/checkSimple.js';

const mainTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const launchGame = () => {
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(1, 100);
    const question = `${number}`;
    const answer = checkSimple(number);
    rounds.push([question, answer]);
  }
  initLogic(mainTask, rounds);
};

export default launchGame;
