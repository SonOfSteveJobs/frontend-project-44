import startGame from '../index.js';
import generateRandomNum from '../random-num-generator.js';

const rules = 'What number is missing in the progression?';

const createProgression = (hiddenNumIndex) => {
  const progressionArray = [];
  const firstNumber = generateRandomNum(1, 9);
  let result = firstNumber;
  const progressionStep = generateRandomNum(1, 8);
  for (let i = 0; i < 10; i += 1) {
    result += progressionStep;
    progressionArray.push(result);
  }
  const hiddenNum = `${progressionArray[hiddenNumIndex]}`;
  progressionArray[hiddenNumIndex] = '..';
  const progressionWithHiddenNum = progressionArray.join(' ');
  return [progressionWithHiddenNum, hiddenNum];
};

const chosenGame = () => {
  const hiddenNumIndex = generateRandomNum(0, 9);

  const [question, correctAnswer] = createProgression(hiddenNumIndex);

  return [question, correctAnswer];
};

const startBrainProgression = () => {
  startGame(rules, chosenGame);
};

export default startBrainProgression;
