import { makeQA } from '../make-qa.js';
import { print } from '../cli.js';
import { repeatAskPlayer } from '../make-ask.js';
import getRandomNumberRange from '../utils.js';

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

export default (playerName, count) => {
  print(gameInstruction);

  repeatAskPlayer(playerName, count, makePairOfTaskWithSolution);
};
