import readlineSync from 'readline-sync';
import { getQuestion, getAnswer } from './lib/make-qa.js';

export const runGame = (makeRound, task) => {
  const tries = 3;

  console.log('Welcome to the Brain Games');

  const playerName = readlineSync.question('Please enter your name: ');
  console.log(`Hello, ${playerName}!!!`);
  console.log(task);

  const iter = (count) => {
    if (count === 0) {
      return console.log(`Congratulations, ${playerName}!!!`);
    }

    const questionAndAnswer = makeRound();

    const playerAnswer = readlineSync.question(`${getQuestion(questionAndAnswer)}: `);
    const correctAnswer = getAnswer(questionAndAnswer);

    if (playerAnswer !== correctAnswer) {
      return console.log(`${playerAnswer} is wrong answer :(. Correct answer was ${correctAnswer}. Let's try again, ${playerName}!`);
    }

    console.log('Correct!');
    return iter(count - 1);
  };

  return iter(tries);
};
