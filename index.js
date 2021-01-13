import readlineSync from 'readline-sync';
import { print, getPlayerName, greetPlayer } from './lib/cli.js';
import calculator from './games/calculator.js';
import even from './games/even.js';
import gcd from './games/gcd.js';
import progression from './games/progression.js';
import prime from './games/prime.js';

export default () => {
  const questionCount = 3;
  const greetingMessage = '\nWelcome to the Brain Games';

  print(greetingMessage);
  const playerName = getPlayerName();
  greetPlayer(playerName);

  const gameList = {
    'Solve Expressions': calculator,
    'Is even a number?': even,
    'Find GCD': gcd,
    'Solve progression': progression,
    'Is prime a number': prime,
  };
  const gamesTitles = Object.keys(gameList);
  const gamesNames = Object.values(gameList);

  const selectedIndexGame = readlineSync.keyInSelect(gamesTitles, '\nPlease shoose a game');
  if (selectedIndexGame === -1) {
    return console.log('Maybe next time...');
  }
  const selectedGame = gamesNames[selectedIndexGame];

  return selectedGame(playerName, questionCount);
};
