/*
  * This is an alternative way to run the game,
  * but in order to successfully pass the tests of Hexlet
  * (the platform where I performed this task) it is necessary
  * that each game is in a separate binary file
*/

import readlineSync from 'readline-sync';
import calculator from './games/calculator.js';
import even from './games/even.js';
import gcd from './games/gcd.js';
import progression from './games/progression.js';
import prime from './games/prime.js';

const startGame = () => {
  const gameList = {
    'Solve Expressions': calculator,
    'Is even a number?': even,
    'Find GCD': gcd,
    'Solve progression': progression,
    'Is prime a number': prime,
  };
  const gamesTitles = Object.keys(gameList);
  const gamesNames = Object.values(gameList);
  const cancel = -1;

  const selectedIndexGame = readlineSync.keyInSelect(gamesTitles, 'Please shoose a game');
  if (selectedIndexGame === cancel) {
    return console.log('Maybe next time...');
  }
  const selectedGame = gamesNames[selectedIndexGame];

  return selectedGame();
};

startGame();
