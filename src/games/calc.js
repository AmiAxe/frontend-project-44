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
  }
};

const newGame = () => {
  const a = Math.round(Math.random() * 10);
  const b = Math.round(Math.random() * 10);
  const arrayOperators = ['+', '-', '*'];
  const indexArrayOperators = Math.round(Math.random() * 2);
  const operator = arrayOperators[indexArrayOperators];
  const question;
  let answer;


  for (let i = 0; i < 3; i += 1) {
    

    console.log(`Question: ${a} ${operator} ${b}`);
    const answ = readlineSync.question('Your answer: ');
    const result = calcExpression(a, b, operator);
    console.log(typeof(result));
    if (answ === result) {
      console.log('Correct!');
    } else {
      console.log(`'${answ}' is wrong answer ;(. Correct answer was '${result}'\nLet's try again, ${name}!`);
    }
  }
};

export default () => {
  mainLogic(mainTask, newGame);
};
