import { roundsCount, initLogic } from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

const isEven = (question) => question % 2 === 0;

const mainTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const launchGame = () => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const question = getRandomInt(1, 100);
    const answer = `${isEven(question) ? 'yes' : 'no'}`;
    rounds.push([question, answer]);
  }
  initLogic(mainTask, rounds);
};

export default launchGame;
