import { makeQA } from '../lib/make-qa.js';
import getRandomNumberRange from '../lib/utils.js';
import { print } from '../lib/cli.js';
import { repeatAskPlayer } from '../lib/make-ask.js';

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

const progression = (playerName, count) => {
  print(gameInstruction);

  repeatAskPlayer(playerName, count, makePairOfTaskWithSolution);
};

export default progression;
