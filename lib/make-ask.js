import { cons, car, cdr } from '@hexlet/pairs';
import { print, getPlayerInputString, getPlayerInputNumber } from './cli.js';
import { getQuestion, getAnswer } from './make-qa.js';

export const askPlayer = (QandA) => {
  const QA = QandA();
  const question = getQuestion(QA);
  const correctAnswer = getAnswer(QA);

  print(`Question: ${question}`);

  const playerAnswer = typeof correctAnswer === 'string'
    ? getPlayerInputString() : getPlayerInputNumber();

  return cons(playerAnswer, correctAnswer);
};

export const getPlayerAnswer = (answer) => car(answer);
export const getCorrectAnswer = (answer) => cdr(answer);

export const repeatAskPlayer = (playerName, count, QandA) => {
  if (count === 0) {
    return print(`Congratulations, ${playerName}!!!`);
  }
  const answer = askPlayer(QandA);
  const playerAnswer = getPlayerAnswer(answer);
  const correctAnswer = getCorrectAnswer(answer);

  if (playerAnswer !== correctAnswer) {
    return print(`${playerAnswer} is wrong answer :(. Correct answer was ${correctAnswer}. Let's try again, ${playerName}!`);
  }

  print('Correct!');
  return repeatAskPlayer(playerName, count - 1, QandA);
};
