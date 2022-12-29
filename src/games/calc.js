import mainLogic from '../index.js';

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

const initGame = () => {
  const a = Math.round(Math.random() * 10);
  const b = Math.round(Math.random() * 10);
  const arrayOperators = ['+', '-', '*'];
  const index = Math.round(Math.random() * 2);
  const operator = arrayOperators[index];
  const question = `${a} ${operator} ${b}`;
  const answer = calcExpression(a, b, operator);
  return [question, answer];
};

export default () => {
  mainLogic(mainTask, initGame);
};
