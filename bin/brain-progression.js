#!/usr/bin/env node
import readlineSync from 'readline-sync';
/* eslint linebreak-style: ["error", "unix"] */

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('What number is missing in the progression?');

const askQuestionProgression = () => {
  for (let i = 0; i < 3; i += 1) {
    const progressionArray = [];
    const firstNumber = Math.floor(Math.random() * 9 + 1);
    let result = firstNumber;
    const progressionStep = Math.floor(Math.random() * 8 + 1);
    for (let j = 0; j < 10; j += 1) {
      result += progressionStep;
      progressionArray.push(result);
    }
    const hiddenNum = progressionArray[Math.floor(Math.random() * 9 + 1)];
    progressionArray[progressionArray.indexOf(hiddenNum)] = '..';
    const correctAnswer = `${hiddenNum}`;

    console.log(`Question: ${progressionArray.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return (console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`));
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

askQuestionProgression();
export default askQuestionProgression;
