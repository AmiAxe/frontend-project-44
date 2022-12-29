import mainLogic from '../index.js';
import getRandomInt from '../getRandomInt.js';
import checkSimple from '../checkSimple.js';

const mainTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const initGame = () => {
  const number = getRandomInt(1, 100);
  const question = `${number}`;
  const answer = checkSimple(number);
  return [question, answer];
};

export default () => {
  mainLogic(mainTask, initGame);
};
