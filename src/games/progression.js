import initLogic from '../index.js';
import getQuestion from '../utils/getQuestion.js';

const mainTask = 'What number is missing in the progression?';

const launchGame = () => {
  const rounds = [];

  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = getQuestion();
    rounds.push([question, answer]);
  }
  initLogic(mainTask, rounds);
};

export default launchGame;
