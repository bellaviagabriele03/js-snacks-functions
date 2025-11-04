/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vocali(parole) {
    let lettere = [];
    for (let i = 0; i < parole.length; i++) {
        let curIndex = parole[i];
        if (curIndex === "a" || curIndex === "e" || curIndex === "i" || curIndex === "o" || curIndex === "u") {
            lettere.push(curIndex)
        }
    }
    return lettere.length, lettere;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(vocali(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)