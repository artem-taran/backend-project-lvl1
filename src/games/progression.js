import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';
import { print, getRandomNumberRange } from '../utils.js';

const generateProgression = () => {
  const step = getRandomNumberRange(2, 4);
  const length = getRandomNumberRange(5, 10);
  const begin = getRandomNumberRange(2, 20);
  const progression = [begin];

  const ap = (n) => {
    if (n >= length) {
      return progression;
    }

    progression[n] = progression[n - 1] + step;

    return ap(n + 1);
  };

  return ap(1);
};

const generateQA = () => {
  const progression = generateProgression();
  const length = progression.length - 1;
  const placeHolder = '.. ';
  const randomIndex = getRandomNumberRange(0, length);
  const progressionWithHiddenElement = [...progression];
  progressionWithHiddenElement[randomIndex] = placeHolder;

  const question = progressionWithHiddenElement.join(', ');
  const answer = progression[randomIndex];

  return cons(question, answer);
};

const getQuestion = (QA) => car(QA);
const getAnswer = (QA) => cdr(QA);

const isEqual = (incomingAnswer, correctAnswer) => incomingAnswer === correctAnswer;

const getPlayerInput = () => {
  const answer = readlineSync.question('Your answer: ');

  return Number(answer.trim());
};

const askPlayer = () => {
  const gameInstruction = 'What number is missing in the progression?';
  const QA = generateQA();
  const question = getQuestion(QA);
  const correctSolution = getAnswer(QA);

  print(gameInstruction);
  print(`Question: ${question}`);

  const playerSolution = getPlayerInput();

  return cons(playerSolution, correctSolution);
};

const getPlayerSolution = (solution) => car(solution);
const getCorrectSolution = (solution) => cdr(solution);

const repeatQuestion = (count, playerName) => {
  if (count === 0) {
    return print(`Congratulations, ${playerName}`);
  }

  const solutions = askPlayer();
  const playerSolution = getPlayerSolution(solutions);
  const correctSolution = getCorrectSolution(solutions);

  const isCorrectPlayerSolution = isEqual(playerSolution, correctSolution);

  if (!isCorrectPlayerSolution) {
    return print(`${playerSolution} is wrong answer , Correct answer was ${correctSolution}
      Let's try again, ${playerName}!`);
  }

  print('Correct!');

  return repeatQuestion(count - 1, playerName);
};

export default (playerName) => {
  const questionCount = 3;
  repeatQuestion(questionCount, playerName);
};
