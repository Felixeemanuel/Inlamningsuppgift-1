//random nummer
let random = 5;//Math.floor(Math.random() * 100 + 1);
let enter = document.getElementById('enter')
let inputs = document.querySelectorAll('input')
let meddela = document.getElementById('spanNumber')
let correctNumber = document.querySelector('#spanHightLowCorrect');


enter.addEventListener('click', question)


let count = 0;              
enter.onclick = function () {
    count++
}

//funktion
function question() { 
    let input = document.getElementById('insertNumber').value;
    console.log(random)
    if (input == random) {
        //* '#05ff16' Grön text färg
        console.log('Rätt svar! Antal gissningar: ' + count); 
        meddela.innerHTML = "" + random
    }
    else if (input < 0 || input > 100) {
        console.log('Antal gissningar: ' + count);
    }
    //Om svaret är för lågt
    else if (input < random) {
        //* '#0011ff' Blå text färg
        console.log('Du gissade för lågt! Antal gissningar: ' + count);
    }
    //Om svaret är för högt
    else if (input > random) {
        //* '##ff0000' Röd text färg
        console.log('Du gissade för högt! Antal gissningar: ' + count);

    }
    else {
        console.log('Antal gissningar: ' + count);  
    }
};