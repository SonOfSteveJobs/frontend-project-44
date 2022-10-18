import startGame from '../index.js';
import generateRandomNum from '../utils.js';

const description = 'What number is missing in the progression?';

const createProgression = (firstNumber, progressionStep) => {
  const progressionArray = [];
  let result = firstNumber;

  const progressionLength = 10;

  for (let i = 0; i < progressionLength; i += 1) {
    result += progressionStep;
    progressionArray.push(result);
  }

  return progressionArray;
};

const getAnswerAndQuestion = () => {
  const firstNumber = generateRandomNum(1, 9);
  const progressionStep = generateRandomNum(1, 8);
  const hiddenNumIndex = generateRandomNum(0, 9);

  const progression = createProgression(firstNumber, progressionStep);
  const correctAnswer = `${progression[hiddenNumIndex]}`;

  progression[hiddenNumIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

const startBrainProgression = () => {
  startGame(description, getAnswerAndQuestion);
};

export default startBrainProgression;
