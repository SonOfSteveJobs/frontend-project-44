#!/usr/bin/env node
import readlineSync from 'readline-sync';
/* eslint linebreak-style: ["error", "unix"] */

const startGame = (rules, chosenGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rules);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = chosenGame();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return (console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`));
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default startGame;
