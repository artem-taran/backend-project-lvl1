import { getPlayerName, greetPlayer } from "./lib/cli.js";

export default (game) => {
  const questionCount = 3;
  const greetingMessage = "Welcome to the Brain Games";

  console.log(greetingMessage);
  const playerName = getPlayerName();
  greetPlayer(playerName);

  return game(playerName, questionCount);
};
