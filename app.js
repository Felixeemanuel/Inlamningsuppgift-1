'use strict'; // Är global och hindrar dig från att använda odeklarerade variabler
let secretNumber = 5;//Math.trunc(Math.random() * 100) + 1; // Skapar ett tal mellan 1 till 100

let tries = 0;
let triesLeft = 10;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.submit').addEventListener('click', () => {
    const guess= Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);
    if(!guess) { 
        displayMessage('No Number');

    } else if(guess === secretNumber) { // Om du gissar rätt Secret Number

        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#64b347';
        document.querySelector('.number').style.width = '15rem';

        // document.querySelector('.submit').removeEventListener('click');
        
    } else if(guess !== secretNumber) { // Om det gissade numret inte är rätt

        if(triesLeft > 1) {
            displayMessage(guess > secretNumber ? 'Too High! ' : 'Too Low! ');
            tries++; // Loop räknar upp
            triesLeft--; // Loop räknar ner
            document.querySelector('.tries').textContent = tries;
            document.querySelector('.triesLeft').textContent = triesLeft;
        }else {
            displayMessage('You Lost The Game !'); // Om du använder upp alla försök så blir det förlust
            document.querySelector('.tries').textContent = 10;
            document.querySelector('.triesLeft').textContent = 0;

            document.querySelector('body').style.backgroundColor = '#b31b1b';

            //document.querySelector('.submit').removeEventListener('click');
        }
    }
});
// Again knappen för att starta om spelet
document.querySelector('.restart').addEventListener('click', () => {
    tries = 0;
    triesLeft = 10;
    secretNumber = 5;//Math.trunc(Math.random() * 100) + 1;
    displayMessage('Start Guessing...');
    document.querySelector('.triesLeft').textContent = triesLeft;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});