import startGame from '../index.js';
import generateRandomNum from '../utils.js';

const description = 'What is the result of the expression?';

const calculate = (firstNum, secondNum, operation) => {
  switch (operation) {
    case '+': return `${firstNum + secondNum}`;
    case '-': return `${firstNum - secondNum}`;
    case '*': return `${firstNum * secondNum}`;
    default: return 'Error';
  }
};

const getAnswerAndQuestion = () => {
  const operations = ['+', '-', '*'];
  const operation = operations[generateRandomNum(0, operations.length - 1)];

  const firstNum = generateRandomNum(1, 50);
  const secondNum = generateRandomNum(1, 25);

  const question = `${firstNum} ${operation} ${secondNum}`;
  const correctAnswer = calculate(firstNum, secondNum, operation);

  return [question, correctAnswer];
};

const startBrainCalc = () => {
  startGame(description, getAnswerAndQuestion);
};

export default startBrainCalc;
