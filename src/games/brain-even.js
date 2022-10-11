import startGame from '../index.js';
import generateRandomNum from '../random-num-generator.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randomNum) => {
  if (randomNum % 2 === 0) {
    return true;
  }
  return false;
};

const chosenGame = () => {
  const question = generateRandomNum(1, 50);
  const correctAnswer = isEven(question) === true ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startBrainEven = () => {
  startGame(rules, chosenGame);
};

export default startBrainEven;
