import { makeQA } from '../lib/make-qa.js';
import getRandomNumberRange from '../lib/utils.js';
import { repeatAskPlayer } from '../lib/make-ask.js';
import main from '../index.js';

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

const calculator = (playerName, count) => {
  console.log(gameInstruction);

  repeatAskPlayer(playerName, count, createMathExpression);
};

export default () => main(calculator);
