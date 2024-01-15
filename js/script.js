/*
Descrizione:
Visualizzare in pagina 5 numeri casuali.Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Tutte le validazioni sono da considerarsi bonus.

BONUS:
Come detto, le validazioni
Volendo, potreste provare a farlo con degli input che compaiono in pagina dopo che scompaiono i numeri, invece che coi prompt*/

//prendo elementi dalla pagina
const countdown = document.getElementById('countdown');
const fiveNumbers = document.getElementById('five-numbers');

//formula per estrarre numeri da 1 a 100 compreso
const randomNumbers = Math.floor(Math.random() * 100) +1;

//creo array x numeri estratti
const extracted = [];

//creo ciclo che mi estra 5 numeri
for (let i = 0; i < 5; i++){
    extracted.push(Math.floor(Math.random() * 100) +1)
    //li stampo in pagina
    fiveNumbers.innerText= extracted;
}

//creo il timer di 30 secondi
let seconds = 30;
countdown.innerText = seconds;



const timeUser = setInterval(() =>{
    countdown.innerText = --seconds;
    //fermo il countdown
    if(seconds === 0){
        countdown.innerText = ''
        clearInterval(timeUser)
        //tolgo i numeri
        fiveNumbers.innerText = 'Fine del tuo tempo' //! non spariscono i numeri
        //chiedo all'utente di inserire i numeri con i prompt
        for (let i = 1; i <= 5 ; i++){
            let questions = parseInt(prompt (`Dimmi il ${i} numero`));
            const answer = questions;
            console.log(answer);
        }
    }
},1000)

  

//TODO 
/* il software dice quanti e quali dei numeri da indovinare sono stati individuati. */