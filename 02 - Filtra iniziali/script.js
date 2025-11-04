/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function startLetter(name, numIndex, letters) {
    let newNames = [];    
    for (let i = 0; i < name.length; i++) {
        let curName = name[i];
        
        let firstIndex = curName[numIndex]
        if (firstIndex === letters) {
            newNames.push(curName);
        }        
        
    }
    return newNames;
}

// Invoca la funzione qui e stampa il risultato in console
let result = startLetter(names, 0, "A");
console.log(result);



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]