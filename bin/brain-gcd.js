#!/usr/bin/env node
import readlineSync from 'readline-sync';
// /* eslint linebreak-style: ["error", "unix"] */
/* eslint no-shadow: ["error", { "allow": ["a","b"] }] */

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Find the greatest common divisor of given numbers.');

const askQuestionGsd = () => {
  for (let i = 0; i < 3; i += 1) {
    const a = Math.floor(Math.random() * 50 + 1);
    const b = Math.floor(Math.random() * 30 + 1);

    const gcd = (a, b) => {
      if (!b) {
        return a;
      }
      return gcd(b, a % b);
    };
    const correctAnswer = `${gcd(a, b)}`;

    console.log(`Question: ${a} ${b}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return (console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`));
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

askQuestionGsd();
export default askQuestionGsd;
