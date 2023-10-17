'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;

}


document.querySelector('.check').addEventListener('click', function() {
    const myValue = Number(document.querySelector('.guess').value)

    if (!myValue) {
        displayMessage('Please input your number🔢')

    } else if (myValue === secretNumber) {
        displayMessage('Number Match. You are win🎇')
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor='#60b347'
        document.querySelector('.number').style.width='30rem'

        if (score>highscore) {
            highscore = score
            document.querySelector('.highscore').textContent=highscore;
        }

    } else if (myValue !==secretNumber) {
        if(score>1) {
            myValue > secretNumber ? displayMessage('to high⚡') : displayMessage('to low👇');
            score--;
            document.querySelector('.score').textContent = score; 
        } else {
            displayMessage('You lost the Game')
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor='red';
        }
        
    }

})

document.querySelector('.again').addEventListener('click', function() {
    score=20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent='?';
    displayMessage('Start gyessing')
    document.querySelector('.score').textContent =score;
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem'

})

