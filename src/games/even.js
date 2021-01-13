import { makeQA } from '../make-qa.js';
import getRandomNumberRange from '../utils.js';
import { repeatAskPlayer } from '../make-ask.js';
import { print } from '../cli.js';

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

export default (playerName, count) => {
  print(gameInstruction);

  repeatAskPlayer(playerName, count, generateNumber);
};
