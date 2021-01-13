import { makeQA } from '../lib/make-qa.js';
import { print } from '../lib/cli.js';
import { repeatAskPlayer } from '../lib/make-ask.js';
import getRandomNumberRange from '../lib/utils.js';

const gameInstruction = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGCD(b, a % b);
};

const makePairOfTaskWithSolution = () => {
  const min = 2;
  const max = 40;
  const operand1 = getRandomNumberRange(min, max);
  const operand2 = getRandomNumberRange(min, max);
  return makeQA(`${operand1} ${operand2}`, getGCD(operand1, operand2));
};

const gcd = (playerName, count) => {
  print(gameInstruction);

  repeatAskPlayer(playerName, count, makePairOfTaskWithSolution);
};

export default gcd;
