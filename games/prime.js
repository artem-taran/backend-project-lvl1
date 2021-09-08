import { makeQA } from '../lib/make-qa.js';
import { getRandomNumberRange } from '../lib/utils.js';
import { runGame } from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no"';

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

const round = () => {
  const min = 2;
  const max = 40;
  const number = getRandomNumberRange(min, max);
  const solution = check(number);

  return makeQA(number, solution);
};

export default () => runGame(round, task);
