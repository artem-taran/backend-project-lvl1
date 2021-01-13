import readlineSync from 'readline-sync';

export const print = (msg) => {
  console.log(msg);
};

export const getPlayerName = () => {
  const name = readlineSync.question('\nMay I have your name? ');
  return name;
};

export const getPlayerInputNumber = () => {
  const answer = readlineSync.question('\nYour answer: ');

  return Number(answer.trim());
};

export const getPlayerInputString = () => {
  const answer = readlineSync.question('\nYour answer: ');

  return answer.trim().toLowerCase();
};

export const greetPlayer = (name) => {
  console.log(`\nHello, ${name}`);
};
