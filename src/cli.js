import readlineSync from "readline-sync";

const getUserName = () => {
  const name = readlineSync.question("May I have your name? ");
  return name;
};

const greetUser = () => {
  console.log(`Hello, ${getUserName()}`);
};

export default greetUser;
