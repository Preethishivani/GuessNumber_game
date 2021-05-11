'use strict';

var secretNum = Math.trunc(Math.random()*20)+1;
console.log(secretNum);
const number = document.querySelector('.number');
var btnCheck = document.querySelector('.btn-check');
const btnAgain = document.querySelector('.btn-again');
const message = document.querySelector('.message');

var score = 20;
const displayScore= document.querySelector('.score');
displayScore.textContent = score;

var highScore=0;
const displayHighScore = document.querySelector('.highScore');
displayHighScore.textContent = highScore;

btnCheck.addEventListener('click',function () {
  const guess= Number(document.querySelector('.guess').value);
  if(score>0){
    if(guess>0 && guess <=20){
    //console.log(`Thank you your num is ${guess}`);
      if(guess===secretNum){
        message.textContent = 'You are Correct 🎉';
        number.textContent = secretNum;
        if(score>highScore){
          highScore = score;
          displayHighScore.textContent = highScore;
        }
      }else if(guess < secretNum) {
        message.textContent = 'You are too low 🢃 ';
        score = score-1;
        displayScore.textContent = score;
      }else if(guess > secretNum){
        message.textContent = 'You are too high 🢁';
        score = score-1;
        displayScore.textContent = score;
      }
    }else{
      message.textContent = 'Provide right input';
    }
  }else{
    message.textContent = 'You lost the game';
    secretNum = Math.trunc(Math.random()*20)+1;
    number.textContent = secretNum;
    score=20;
    displayScore.textContent = score;
    document.querySelector('.guess').value= '';
  }
});

btnAgain.addEventListener('click',function(){
  secretNum = Math.trunc(Math.random()*20)+1;
  document.querySelector('.number').value = '?';
  number.textContent =  document.querySelector('.number').value;
  score=20;
  displayScore.textContent = score;
  message.textContent = 'Start Guessing...🤔';
  document.querySelector('.guess').value= '';
})