import readlineSync from 'readline-sync';
import { print, getUserName, greetUser } from './src/utils.js';
import progression from './src/games/progression.js';

const greetingMessage = 'Welcome to the Brain Games';
print(greetingMessage);

const userName = getUserName();
greetUser(userName);

const games = ['calc', 'gcd', 'even', 'progression', 'main'];
const index = readlineSync.prompt({ list: games });
console.log('index: ', index);
