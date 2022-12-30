import { roundsCount, initLogic } from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

const mainTask = 'What number is missing in the progression?';

const getQuestion = (first, step, hiddenNumberIndex) => {
  let question = '';
  let nextNumber = first;

  for (let i = 0; i < 10; i += 1) {
    if (i === hiddenNumberIndex) {
      question = `${question}.. `;
      nextNumber += step;
    } else {
      question = `${question}${nextNumber} `;
      nextNumber += step;
    }
  }
  return question;
};

const launchGame = () => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const first = getRandomInt(1, 15);
    const step = getRandomInt(1, 9);
    const hiddenNumberIndex = getRandomInt(0, 9);
    const question = getQuestion(first, step, hiddenNumberIndex);
    const answer = first + step * hiddenNumberIndex;
    rounds.push([question, answer]);
  }
  initLogic(mainTask, rounds);
};

export default launchGame;
