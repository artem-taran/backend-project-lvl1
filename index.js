import { print, getUserName, greetUser } from './src/utils.js';
import gcd from './src/games/gcd.js';

const greetingMessage = 'Welcome to the Brain Games';
print(greetingMessage);

const userName = getUserName();
greetUser(userName);

gcd(userName);
