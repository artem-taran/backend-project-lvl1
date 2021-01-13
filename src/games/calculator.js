import { makeQA } from '../make-qa.js';
import getRandomNumberRange from '../utils.js';
import { repeatAskPlayer } from '../make-ask.js';
import { print } from '../cli.js';

const gameInstruction = 'What is the result of the expression';

const createMathExpression = () => {
  const operators = ['+', '-', '*'];
  const length = operators.length - 1;
  const min = 2;
  const max = 20;
  const randomIndex = getRandomNumberRange(0, length);
  const operand1 = getRandomNumberRange(min, max);
  const operand2 = getRandomNumberRange(min, max);

  switch (operators[randomIndex]) {
    case '+':
      return makeQA(`${operand1} + ${operand2}`, operand1 + operand2);
    case '-':
      return makeQA(`${operand1} - ${operand2}`, operand1 - operand2);
    case '*':
      return makeQA(`${operand1} * ${operand2}`, operand1 * operand2);

    default:
      throw new Error('Unknown operator');
  }
};

export default (playerName, count) => {
  print(gameInstruction);

  repeatAskPlayer(playerName, count, createMathExpression);
};
