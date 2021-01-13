import readlineSync from 'readline-sync';
import { print, getPlayerName, greetPlayer } from './src/cli.js';
import calculator from './src/games/calculator.js';
import even from './src/games/even.js';
import gcd from './src/games/gcd.js';
import progression from './src/games/progression.js';
import prime from './src/games/prime.js';

const questionCount = 3;
const greetingMessage = '\nWelcome to the Brain Games';

print(greetingMessage);
const playerName = getPlayerName();

greetPlayer(playerName);

const games = ['even', 'calculator', 'gcd', 'progression', 'prime'];
const listGames = [even, calculator, gcd, progression, prime];
const selectedIndexGame = readlineSync.keyInSelect(games, '\nPlease shoose a game');
const selectedGame = listGames[selectedIndexGame];

selectedGame(playerName, questionCount);
