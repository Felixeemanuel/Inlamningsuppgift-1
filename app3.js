let random = Math.floor(Math.random() * 100 + 1); // Skapar ett random tal mellan 1 - 100
let enter = document.getElementById('enter');
let inputs = document.querySelectorAll('input').value;
let meddela = document.getElementById('spanNumber');
let answer = document.getElementById('spanHighLowCorrect');
const restartBtn = document.getElementById("again")
const insertNumber = document.getElementById("insertNumber")


function randomNumber(){
    random = Math.floor(Math.random() * 100 + 1);
}

let count = 0;              
enter.onclick = function () {
    count++
    let input = document.getElementById('insertNumber').value;
    console.log(random)
    if (input == random) {
        console.log('Rätt svar! Antal gissningar: ' + count); 
        answer.style.color = '#05ff16'
        answer.innerHTML = ('Rätt svar är ' ) + random + ('!') + ('<br></br>') + (' Det tog dig ' + count + ' gissningar att svara rätt!');
        meddela.innerHTML = count;
    }
        //Om svaret är lärgre än 1 eller högre än 100
    else if (input < 1 || input > 100) {
        count--
        console.log('Du angav ett felaktigt nummer, försök att skriva ett nummer mellan 1-100: (Gissningen räknades inte) ' + count);
        answer.style.color = '#c9c9c9'
        answer.innerHTML = ('Felaktigt nummer!') + ('<br></br>') + ('Välj ett nummer mellan 1-100');
        meddela.innerHTML = count;
    }
        //Om svaret är för lågt
    else if (input < random) {
        console.log('Du gissade för lågt! Antal gissningar: ' + count); 
        answer.style.color = '#0011ff'
        answer.innerHTML = ('Du gissade för lågt! Gissa igen.'); 
        meddela.innerHTML = count;   
    }
        //Om svaret är för högt
    else if (input > random) {
        console.log('Du gissade för högt! Antal gissningar: ' + count);
        answer.style.color = '#ff0000'
        answer.innerHTML = ('Du gissade för högt! Gissa igen.');
        meddela.innerHTML = count;
    }
    else {
        console.log('Antal gissningar: ' + count); 
        meddela.innerHTML = count;
    }

}

    //Clearar alla meddelande och startar om spelet med ett nytt randomtal
restartBtn.addEventListener("click", function(){
    meddela.innerHTML = "?"
    count = 0;
    answer.innerHTML = "Skriv ett nummer och tryck enter!"
    answer.style.color = '#fff'
    document.getElementById("insertNumber").value = ""
    randomNumber();
    console.log(random);
});