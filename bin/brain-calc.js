#!/usr/bin/env node
import readlineSync from 'readline-sync';
/* eslint linebreak-style: ["error", "unix"] */

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('What is the result of the expression?');

const askQuestionCalc = () => {
  for (let i = 0; i < 3; i += 1) {
    const operations = ['+', '-', '*'];
    const operationIndex = Math.floor(Math.random() * 3);
    const operation = operations[operationIndex];
    const firstNumber = Math.floor(Math.random() * 50);
    const secondNumber = Math.floor(Math.random() * 25);

    let correctAnswer;
    switch (operationIndex) {
      case 0: correctAnswer = `${firstNumber + secondNumber}`; break;
      case 1: correctAnswer = `${firstNumber - secondNumber}`; break;
      case 2: correctAnswer = `${firstNumber * secondNumber}`; break;
      default: correctAnswer = 0; break;
    }

    console.log(`Question: ${firstNumber} ${operation} ${secondNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return (console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`));
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

askQuestionCalc();
export default askQuestionCalc;
