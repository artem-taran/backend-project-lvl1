import { makeQA } from '../lib/make-qa.js';
import { getRandomNumberRange } from '../lib/utils.js';
import { runGame } from '../index.js';

const task = 'What is the result of the expression?';

const round = () => {
  const operators = ['+', '-', '*'];
  const length = operators.length - 1;
  const min = 2;
  const max = 20;
  const randomIndex = getRandomNumberRange(0, length);
  const operand1 = getRandomNumberRange(min, max);
  const operand2 = getRandomNumberRange(min, max);

  switch (operators[randomIndex]) {
    case '+':
      return makeQA(`${operand1} + ${operand2}`, String(operand1 + operand2));
    case '-':
      return makeQA(`${operand1} - ${operand2}`, String(operand1 - operand2));
    case '*':
      return makeQA(`${operand1} * ${operand2}`, String(operand1 * operand2));

    default:
      throw new Error('Unknown operator');
  }
};

export default () => runGame(round, task);
