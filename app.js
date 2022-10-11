<<<<<<< HEAD
function() {
    //nånting nice
    //hahahahha
}
=======
// Generera ett random nummer mellan 1 -100
const randomNumber = 3;
console.log(randomNumber);

//Hämta elementen från HTML
const insertNumber = document.querySelector('#insertNumber');
const enterBtn = document.querySelector('#enter');
const againBtn = document.querySelector('#again');
const message1 = document.querySelector('#message1');

let counter = 0;
let answer = insertNumber.value;


const submitAnswer = () => {
    if (answer == randomNumber) 
        counter++;
    console.log('tjena')
}
submitAnswer();


>>>>>>> 074d2a2a4f593bc6ea9d051e82338364e91ee07f
