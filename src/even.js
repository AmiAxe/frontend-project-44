import readlineSync from 'readline-sync';

const even = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i <= 3; i += 1) {
    const number = Math.round(Math.random() * 100);

    console.log(`Question: ${number}`);
    const answ = readlineSync.question('Your answer: ');

    if ((answ === 'yes' && number % 2 === 0) || (answ === 'no' && number % 2 !== 0)) {
      console.log('Correct!');
    } else if (answ === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      i = 0;
    } else {
      console.log(`It is wrong answer ;(.\nLet's try again, ${name}!`);
      i = 0;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default even;
