import mainLogic from '../index.js';

const mainTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const newGame = () => {
  const question = Math.round(Math.random() * 100);
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
