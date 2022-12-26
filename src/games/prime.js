import mainLogic from '../index.js'
import getRandomInt from '../getRandomInt.js'

const mainTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const newGame = () => {
  let number = getRandomInt(1, 100);
  const question = `${number}`;
  let answer;

  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      answer = 'no';
      return [question, answer];
    }
  }
  answer = 'yes';
  return [question, answer];
};

export default () => {
  mainLogic(mainTask, newGame);
};
