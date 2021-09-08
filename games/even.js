import { makeQA } from '../lib/make-qa.js';
import { getRandomNumberRange } from '../lib/utils.js';
import { runGame } from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const check = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

const round = () => {
  const min = 0;
  const max = 20;
  const number = getRandomNumberRange(min, max);
  const answer = check(number);

  return makeQA(number, answer);
};

export default () => runGame(round, task);
