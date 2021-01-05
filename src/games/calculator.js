import { cons, car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';
import { getRandomNumberRange, print } from '../lib.js';

const createMathExpression = () => {
  const operators = ['+', '-', '*'];
  const length = operators.length - 1;
  const randomIndex = getRandomNumberRange(0, length);
  const a = getRandomNumberRange(0, 20);
  const b = getRandomNumberRange(0, 20);

  switch (operators[randomIndex]) {
    case '+':
      return cons(`${a} + ${b}`, a + b);
    case '-':
      return cons(`${a} - ${b}`, a - b);
    case '*':
      return cons(`${a} * ${b}`, a * b);

    default:
      throw new Error('Unknown operator');
  }
};

const getMathExpressionBody = (exp) => car(exp);
const getMathExpressionResult = (exp) => cdr(exp);

const check = (result1, result2) => result1 === result2;

const askUser = () => {
  const mathExpression = createMathExpression();
  const question = getMathExpressionBody(mathExpression);
  const correctAnswer = getMathExpressionResult(mathExpression);

  print('What is the result of the expression');
  print(`Question: ${question}`);

  const userAnswer = Number(readlineSync.question('Your answer: ').trim());
  return cons(userAnswer, correctAnswer);
};

const repeatQuestion = (count, user) => {
  if (count === 0) {
    return print(`Congratulations, ${user}!`);
  }

  const answer = askUser();
  const userAnswer = car(answer);
  const correctAnswer = cdr(answer);
  if (!check(userAnswer, correctAnswer)) {
    return print(`${userAnswer} is wrong answer , Correct answer was ${correctAnswer}
      Let's try again, ${user}!`);
  }

  return repeatQuestion(count - 1, user);
};

export default (playerName) => {
  const questionCount = 3;
  repeatQuestion(questionCount, playerName);
};
