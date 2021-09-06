import readlineSync from 'readline-sync';

export const getPlayerName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const getPlayerInputNumber = () => {
  const answer = readlineSync.question('Your answer: ');

  return Number(answer.trim());
};

export const getPlayerInputString = () => {
  const answer = readlineSync.question('Your answer: ');

  return answer.trim().toLowerCase();
};

export const greetPlayer = (name) => {
  console.log(`Hello, ${name}!`);
};

export const greet = () => {
  const welcome = 'Welcome to the Brain Games!';
  console.log(welcome);
  const playerName = getPlayerName();
  greetPlayer(playerName);
};
