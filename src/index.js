import readlineSync from 'readline-sync';

const mainLogic = (mainTask, newGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(mainTask);

  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = newGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === String(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default mainLogic;
