import mainLogic from '../index.js'
import getRandomInt from '../getRandomInt.js'

const mainTask = 'What number is missing in the progression?';

const newGame = () => {
  const step = getRandomInt(1, 9);
  let answer = 0;
  let question = '';
  const hideElement = getRandomInt(0, 9);
  const arrayNumbers = [getRandomInt(0, 15)];
  
  for (let i = 0; i < 10; i += 1) {
    if (i === hideElement) {
      answer = arrayNumbers[i];
      arrayNumbers[i + 1] = arrayNumbers[i] + step;
      arrayNumbers[i] = '..';
      question = `${question}.. `;
    } else {
      arrayNumbers[i + 1] = arrayNumbers[i] + step;
      question = `${question}${arrayNumbers[i]} `;
    }
  }

  return [question, answer];
};

export default () => {
  mainLogic(mainTask, newGame);
};
