import { makeQA } from '../make-qa.js';
import getRandomNumberRange from '../utils.js';
import { print } from '../cli.js';
import { repeatAskPlayer } from '../make-ask.js';

const gameInstruction = 'What number is missing in the progression?';

const generateProgression = () => {
  const step = getRandomNumberRange(2, 4);
  const length = getRandomNumberRange(5, 10);
  const begin = getRandomNumberRange(2, 20);
  const progression = [begin];

  const ap = (n) => {
    if (n >= length) {
      return progression;
    }

    progression[n] = progression[n - 1] + step;

    return ap(n + 1);
  };

  return ap(1);
};

const makePairOfTaskWithSolution = () => {
  const progression = generateProgression();
  const length = progression.length - 1;
  const placeHolder = '.. ';
  const randomIndex = getRandomNumberRange(0, length);
  const progressionWithHiddenElement = [...progression];
  progressionWithHiddenElement[randomIndex] = placeHolder;

  const question = progressionWithHiddenElement.join(', ');
  const answer = progression[randomIndex];

  return makeQA(question, answer);
};

export default (playerName, count) => {
  print(gameInstruction);

  repeatAskPlayer(playerName, count, makePairOfTaskWithSolution);
};
