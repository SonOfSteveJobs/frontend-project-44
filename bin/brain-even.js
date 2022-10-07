#!/usr/bin/env node
import readlineSync from 'readline-sync';
/* eslint linebreak-style: ["error", "unix"] */

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const askQuestion = () => {
  for (let i = 0; i < 3; i += 1) {
    const getRandomNum = Math.floor((Math.random() * 100) - 1);
    const correctAnswer = getRandomNum % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${getRandomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return (console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`));
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

askQuestion();
export default askQuestion;
