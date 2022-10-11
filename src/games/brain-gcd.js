import startGame from '../index.js';
import generateRandomNum from '../random-num-generator.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (firstNum, secondNum) => {
  if (!secondNum) {
    return firstNum;
  }
  return gcd(secondNum, firstNum % secondNum);
};

const chosenGame = () => {
  const firstNum = generateRandomNum(1, 50);
  const secondNum = generateRandomNum(1, 30);

  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = `${gcd(firstNum, secondNum)}`;

  return [question, correctAnswer];
};

const startBrainGcd = () => {
  startGame(rules, chosenGame);
};

export default startBrainGcd;
