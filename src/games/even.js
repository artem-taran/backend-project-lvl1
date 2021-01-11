import readlineSync from 'readline-sync';
import { getUserName } from './cli.js';

const getRandomNumber = () => Math.ceil(Math.random() * 10);

const print = (msg) => {
  console.log(msg);
};

const isEven = (number) => number % 2 === 0;

const check = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

const getOppositeAnswer = (answer) => {
  switch (answer) {
    case 'yes':
      return 'no';
    case 'no':
      return 'yes';

    default:
      throw new Error('Unkonwn answer');
  }
};

const repeatQuestion = (count, name) => {
  if (count === 0) {
    return print(`Congratulations, ${name}!`);
  }

  const randomNumber = getRandomNumber();

  const userAnswer = readlineSync.question(`Question: ${randomNumber}: `).trim().toLowerCase();

  if (check(randomNumber) !== userAnswer) {
    return print(`${userAnswer} is wrong answer , Correct answer was ${getOppositeAnswer(userAnswer)}
      Let's try again, ${name}!`);
  }

  print('Correct');

  return repeatQuestion(count - 1, name);
};

const askUser = () => {
  const questionCounter = 3;
  print('Welcome to the Brain Games!');

  const userName = getUserName();
  print(`Hello, ${userName}`);
  print('Answer "yes" if the number is even, otherwise answer "no"');

  repeatQuestion(questionCounter, userName);
};

export default askUser;
