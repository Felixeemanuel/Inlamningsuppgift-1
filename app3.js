//random nummer
let random = Math.floor(Math.random() * 100 + 1);
let enter = document.getElementById('enter')
let inputs = document.querySelectorAll('input')
let meddela = document.getElementById('spanNumber')


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
        meddela.innerHTML = "" + random
    }
    else if (input < 0 || input < 100) {
        console.log('Antal gissningar: ' + count);                                                      //laddar funktionen igen eftersom svaret var fel.
    }
        //Om svaret är för lågt
    else if (input < random) {
        console.log('Du gissade för lågt! Antal gissningar: ' + count);                                                      //laddar funktionen igen eftersom svaret var fel.   
    }
        //Om svaret är för högt
    else if (input > random) {
        console.log('Du gissade för högt! Antal gissningar: ' + count); 
                                                             //laddar funktionen igen eftersom svaret var fel.   
    }
    else {
        console.log('Antal gissningar: ' + count);  
    }
    
};


console.log('randomtal: ' + random);