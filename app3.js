//random nummer
let random = Math.floor(Math.random() * 100 + 1);
let enter = document.getElementById('enter')
let inputs = document.querySelectorAll('input').value;
let meddela = document.getElementById('spanNumber')
let correctAnswer = document.getElementById('spanHighLowCorrect')


enter.addEventListener('click', question)


let count = 0;              
enter.onclick = function () {
    count++
}

//funktion
function question()  { 
    let input = document.getElementById('insertNumber').value;
    console.log(random)
    if (input == random) {
        console.log('Rätt svar! Antal gissningar: ' + count); 
        correctAnswer.style.color = '#05ff16'
        correctAnswer.innerHTML = ('Rätt svar är ') + random 
        meddela.innerHTML = count
    }
    else if (input < 1 || input > 100) {
        count--
        console.log('Du angav ett felaktigt nummer, försök att skriva ett nummer mellan 1-100: (Gissningen räknades inte) ' + count);
        meddela.innerHTML = count                                                   //laddar funktionen igen eftersom svaret var fel.
    }
        //Om svaret är för lågt
    else if (input < random) {
        console.log('Du gissade för lågt! Antal gissningar: ' + count);  
        meddela.style.color = '#0011ff'
        meddela.innerHTML = count                                                 //laddar funktionen igen eftersom svaret var fel.   
    }
        //Om svaret är för högt
    else if (input > random) {
        console.log('Du gissade för högt! Antal gissningar: ' + count);
        meddela.innerHTML = count
    
    
        //laddar funktionen igen eftersom svaret var fel.   
    }
    else {
        console.log('Antal gissningar: ' + count); 
        meddela.innerHTML = count
    }
    
};


console.log('randomtal: ' + random);