//random nummer
let random = Math.floor(Math.random() * 100 + 1);
let enter = document.getElementById('enter')
let inputs = document.querySelectorAll('input').value;
let meddela = document.getElementById('spanNumber')
let correctAnswer = document.getElementById('spanHighLowCorrect')
const restartBtn = document.getElementById("again")
const insertNumber = document.getElementById("insertNumber")

//Funktion för att generera ett random nummer
function randomNumber(){
    random = Math.floor(Math.random() * 100 + 1);
}

enter.addEventListener('click', question)


let count = 0;              
enter.onclick = function () {
    count++
    let input = document.getElementById('insertNumber').value;
    console.log(random)
    if (input == random) {
        console.log('Rätt svar! Antal gissningar: ' + count); 
        correctAnswer.style.color = '#05ff16'
        correctAnswer.innerHTML = ('Rätt svar är ' ) + random + ('!') + ('<br></br>') + (' Det tog dig ' + count + ' gissningar att svara rätt!')
        meddela.innerHTML = count
    }
    else if (input < 1 || input > 100) {
        count--
        console.log('Du angav ett felaktigt nummer, försök att skriva ett nummer mellan 1-100: (Gissningen räknades inte) ' + count);
        correctAnswer.style.color = '#ffffff'
        correctAnswer.innerHTML = ('Felaktigt nummer! Välj ett nummer mellan 1-100')
        meddela.innerHTML = count                                                   //laddar funktionen igen eftersom svaret var fel.
    }
        //Om svaret är för lågt
    else if (input < random) {
        console.log('Du gissade för lågt! Antal gissningar: ' + count); 
        correctAnswer.style.color = '#0011ff'
        correctAnswer.innerHTML = ('Du gissade för lågt! Gissa igen.') 
        meddela.innerHTML = count                                                 //laddar funktionen igen eftersom svaret var fel.   
    }
        //Om svaret är för högt
    else if (input > random) {
        console.log('Du gissade för högt! Antal gissningar: ' + count);
        correctAnswer.style.color = '#ff0000'
        correctAnswer.innerHTML = ('Du gissade för högt! Gissa igen.')
        meddela.innerHTML = count
    
    
        //laddar funktionen igen eftersom svaret var fel.   
    }
    else {
        console.log('Antal gissningar: ' + count); 
        meddela.innerHTML = count
    }
}
    //Clearar alla meddelande och startar om spelet med ett nytt randomtal
restartBtn.addEventListener("click", function(){
    meddela.innerHTML = ""
    count = 0
    correctAnswer.innerHTML = "Skriv ett nummer och tryck enter!"
    correctAnswer.style.color = '#fff'
    document.getElementById("insertNumber").value = ""
    randomNumber()
    console.log(random);
})



console.log('randomtal: ' + random);