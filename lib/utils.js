export const getRandomNumberRange = (min, max) => {
  const randomNumber = Math.random() * (max - min) + min;
  return Math.round(randomNumber);
};
