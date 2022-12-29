import mainLogic from '../index.js';
import getRandomInt from '../getRandomInt.js';
import isEven from '../isEven.js';

const mainTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const initGame = () => {
  const question = getRandomInt(1, 100);
  const answer = isEven(question);
  return [question, answer];
};

export default () => {
  mainLogic(mainTask, initGame);
};
