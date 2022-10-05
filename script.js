//random nummer
let random = Math.floor(Math.random() * 100 + 1);


let count = 0;                                     //Räknare på antal försök.
let userAnswer = 'Inget svar än';

//funktion
const question = () => { 
    let userAnswer = prompt('Gissa en siffra mellan 1-100'); {
        //Om det är rätt
        if (userAnswer == random) {
            count++
            console.log('Antal gissningar: ' + count); 
            alert('Rätt svar!! Det tog dig ' + count + ' försök att svara rätt. Du hamnade på plats x i topplistan');
            //Här skulle man kunna skriva in sitt namn i en Array, topplista
            count = 0;
        }
        else if (userAnswer < 0 || userAnswer > 100) {
            console.log('Antal gissningar: ' + count); 
            alert('Du har angivit ett felaktigt tal, försök igen. Eftersom jag är skön så räknas inte denna gissning.');
            question();                                                      //laddar funktionen igen eftersom svaret var fel.
        }
        //Om svaret är för lågt
        else if (userAnswer < random) {
            count++
            console.log('Antal gissningar: ' + count); 
            alert('Ditt svar är ' + userAnswer + ' Svaret är för lågt.');
            question();                                                      //laddar funktionen igen eftersom svaret var fel.   
        }
        //Om svaret är för högt
        else if (userAnswer > random) {
            count++
            console.log('Antal gissningar: ' + count); 
            alert('Ditt svar är ' + userAnswer + ' Svaret är för högt.');
            question();                                                      //laddar funktionen igen eftersom svaret var fel.   
        }
        else {
            console.log('Antal gissningar: ' + count); 
            alert ('Nåt blev fel, försök igen! Räknas ej.'); //tillexmpel om man råkar skriva in en string
            question();  
        }
    }
};


console.log('randomtal: ' + random);