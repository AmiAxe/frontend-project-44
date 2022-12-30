import getRandomInt from '../utils/getRandomInt.js';
import { roundsCount, initLogic } from '../index.js';

const mainTask = 'What is the result of the expression?';

const calcExpression = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
};

const launchGame = () => {
  const arrayOperators = ['+', '-', '*'];
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const a = getRandomInt(0, 10);
    const b = getRandomInt(0, 10);
    const index = getRandomInt(0, 2);
    const operator = arrayOperators[index];
    const question = `${a} ${operator} ${b}`;
    const answer = calcExpression(a, b, operator);
    rounds.push([question, answer]);
  }
  initLogic(mainTask, rounds);
};

export default launchGame;
