import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';
import { print, getRandomNumberRange } from '../utils.js';

const getGCD = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGCD(b, a % b);
};

const generateQA = () => {
  const operand1 = getRandomNumberRange(2, 50);
  const operand2 = getRandomNumberRange(2, 50);
  return cons(`${operand1} ${operand2}`, getGCD(operand1, operand2));
};

const getQuestion = (QA) => car(QA);
const getAnswer = (QA) => cdr(QA);

const check = (answer, correctAnswer) => answer === correctAnswer;

const askPlayer = () => {
  const gameInstruction = 'Find the greatest common divisor of given numbers.';

  const QA = generateQA();
  const question = getQuestion(QA);
  const answer = getAnswer(QA);

  print(gameInstruction);
  print(`Question: ${question}`);

  const playerAnswer = Number(readlineSync.question('Your answer: ').trim());

  return cons(playerAnswer, answer);
};

const getPlayerAnswer = (playerAnswer) => car(playerAnswer);
const getCorrectAnswer = (playerAnswer) => cdr(playerAnswer);

const repeatQuestion = (count, playerName) => {
  if (count === 0) {
    return print(`Congratulations, ${playerName}`);
  }

  const playerAndCorrectAnswer = askPlayer();
  const playerAnswer = getPlayerAnswer(playerAndCorrectAnswer);
  const correctAnswer = getCorrectAnswer(playerAndCorrectAnswer);

  const isCorrectPlayerAnswer = check(playerAnswer, correctAnswer);
  if (!isCorrectPlayerAnswer) {
    return print(`${playerAnswer} is wrong answer , Correct answer was ${correctAnswer}
      Let's try again, ${playerName}!`);
  }

  return repeatQuestion(count - 1, playerName);
};

export default (playerName) => {
  const questionCount = 3;
  repeatQuestion(questionCount, playerName);
};
