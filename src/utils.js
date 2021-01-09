import readlineSync from 'readline-sync';

export const getRandomNumberRange = (min, max) => {
  const randomNumber = Math.random() * (max - min) + min;
  return Math.round(randomNumber);
};

export const print = (msg) => {
  console.log(msg);
};

export const getUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const greetUser = (name) => {
  console.log(`Hello, ${name}`);
};
