import mainLogic from '../index.js';
import getRandomInt from '../getRandomInt.js';

const mainTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const newGame = () => {
  const question = getRandomInt(1, 100);
  let answer;
  if (question % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [question, answer];
};

export default () => {
  mainLogic(mainTask, newGame);
};
