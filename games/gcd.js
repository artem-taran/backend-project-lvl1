import { makeQA } from '../lib/make-qa.js';
import { getRandomNumberRange } from '../lib/utils.js';
import { runGame } from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGCD(b, a % b);
};

const round = () => {
  const min = 2;
  const max = 40;
  const operand1 = getRandomNumberRange(min, max);
  const operand2 = getRandomNumberRange(min, max);
  return makeQA(`${operand1} ${operand2}`, String(getGCD(operand1, operand2)));
};

export default () => runGame(round, task);
