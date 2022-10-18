import startGame from '../index.js';
import generateRandomNum from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (randomNum) => {
  if (randomNum <= 1) {
    return false;
  }

  for (let i = 2; i <= randomNum / 2; i += 1) {
    if (randomNum % i === 0) {
      return false;
    }
  }
  return true;
};

const getAnswerAndQuestion = () => {
  const question = generateRandomNum(1, 20);
  const correctAnswer = isPrime(question) === true ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startBrainPrime = () => {
  startGame(description, getAnswerAndQuestion);
};

export default startBrainPrime;
