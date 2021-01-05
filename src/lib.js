import readlineSync from 'readline-sync';

export const getRandomNumberRange = (min, max) => {
  const randomNumber = Math.random() * (max - min) + min;
  console.log('randomNumber: ', Math.round(randomNumber));
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

export const getOppositeAnswer = (answer) => {
  switch (answer) {
    case 'yes':
      return 'no';
    case 'no':
      return 'yes';

    default:
      throw new Error('Unkonwn answer');
  }
};
