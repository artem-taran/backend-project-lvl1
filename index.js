import { print, getUserName, greetUser } from './src/lib.js';
import calculator from './src/games/calculator.js';

const greetingMessage = 'Welcome to the Brain Games';
print(greetingMessage);

const userName = getUserName();
greetUser(userName);

calculator(userName);
