/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function iniziali(nomi, numberLetter) {
    let lettera = [];
    for(let i = 0; i < nomi.length; i++) {
        let nomeCor = nomi[i];
        let firstIndex = nomeCor[numberLetter]
        lettera.push(firstIndex);
        
    }
    return lettera;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(iniziali(names, 0));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]