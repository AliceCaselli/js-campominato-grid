//L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.







//variabile del contenitore della griglia
const gridEl = document.getElementById("__grid-container");

const buttonEl = document.getElementById("button");


let maxNumber = 100;

buttonEl.addEventListener('click', function(){

    

    for( let i = 1; i <= maxNumber; i++){

        let newSquareEl = document.createElement('div');

        gridEl.append(newSquareEl);

        newSquareEl.innerText = i;

        newSquareEl.addEventListener('click', function(){
            
            newSquareEl.classList.add("blue");

            console.log(i);

        })
    }
})




