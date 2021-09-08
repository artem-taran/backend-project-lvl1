import readlineSync from 'readline-sync';

export const greetPlayer = () => {
  const name = readlineSync.question('Please enter your name: ');
  console.log(`Hello, ${name}!`);
};
