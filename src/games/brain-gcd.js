import startGame from '../index.js';
import generateRandomNum from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNum, secondNum) => {
  if (!secondNum) {
    return firstNum;
  }
  return getGcd(secondNum, firstNum % secondNum);
};

const getAnswerAndQuestion = () => {
  const firstNum = generateRandomNum(1, 50);
  const secondNum = generateRandomNum(1, 30);

  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = `${getGcd(firstNum, secondNum)}`;

  return [question, correctAnswer];
};

const startBrainGcd = () => {
  startGame(description, getAnswerAndQuestion);
};

export default startBrainGcd;
