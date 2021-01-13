import { makeQA } from '../lib/make-qa.js';
import getRandomNumberRange from '../lib/utils.js';
import { repeatAskPlayer } from '../lib/make-ask.js';
import { print } from '../lib/cli.js';

const isEven = (number) => number % 2 === 0;

const check = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

const generateNumber = () => {
  const min = 0;
  const max = 20;
  const number = getRandomNumberRange(min, max);
  const answer = check(number);

  return makeQA(number, answer);
};

const gameInstruction = 'Answer "yes" if the number is even, otherwise answer "no"';

const even = (playerName, count) => {
  print(gameInstruction);

  repeatAskPlayer(playerName, count, generateNumber);
};

export default even;
