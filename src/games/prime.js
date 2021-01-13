import { makeQA } from '../make-qa.js';
import getRandomNumberRange from '../utils.js';
import { repeatAskPlayer } from '../make-ask.js';
import { print } from '../cli.js';

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  const iter = (dividend, divider) => {
    if (dividend % divider === 0) {
      return false;
    }
    if (divider > dividend / 2) {
      return true;
    }
    return iter(dividend, divider + 1);
  };

  return iter(number, 2);
};

const check = (number) => {
  const result = isPrime(number) ? 'yes' : 'no';
  return result;
};

const makePairOfTaskWithSolution = () => {
  const min = 2;
  const max = 40;
  const number = getRandomNumberRange(min, max);
  const solution = check(number);

  return makeQA(number, solution);
};

export default (playerName, count) => {
  print(gameInstruction);

  repeatAskPlayer(playerName, count, makePairOfTaskWithSolution);
};
