import readlineSync from 'readline-sync';
import { getQuestion, getAnswer } from './make-qa.js';

export const flow = (playerName, tries, makeRound, rules) => {
  console.log(rules);

  const iter = (count) {
    if (count === 0) {
      return console.log(`Congratulations, ${playerName}!!!`);
    }

    const questionAndAnswer = makeRound();
    const playerAnswer = readlineSync.question(getQuestion(questionAndAnswer));
    const correctAnswer = getAnswer(questionAndAnswer);

  if (playerAnswer !== correctAnswer) {
    return console.log(
      `${playerAnswer} is wrong answer :(. Correct answer was ${correctAnswer}. Let's try again, ${playerName}!`
    );
  }

    console.log('Correct!');
    return iter(tries - 1);
  }

  return iter(tries);
};
