import { print, getUserName, greetUser } from './src/utils.js';
import progression from './src/games/progression.js';

const greetingMessage = 'Welcome to the Brain Games';
print(greetingMessage);

const userName = getUserName();
greetUser(userName);

progression(userName);
