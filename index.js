import { print, getPlayerName, greetPlayer } from './lib/cli.js';

export default (game) => {
  const questionCount = 3;
  const greetingMessage = '\nWelcome to the Brain Games';

  print(greetingMessage);
  const playerName = getPlayerName();
  greetPlayer(playerName);

  return game(playerName, questionCount);
};
