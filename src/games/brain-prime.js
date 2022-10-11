import startGame from '../index.js';
import generateRandomNum from '../random-num-generator.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (randomNum) => {
  for (let i = 2; i <= randomNum / 2; i += 1) {
    if (randomNum % i === 0 && randomNum > 1) {
      return false;
    }
  }
  return true;
};

const chosenGame = () => {
  const question = generateRandomNum(1, 20);
  const correctAnswer = isPrime(question) === true ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startBrainPrime = () => {
  startGame(rules, chosenGame);
};

export default startBrainPrime;
