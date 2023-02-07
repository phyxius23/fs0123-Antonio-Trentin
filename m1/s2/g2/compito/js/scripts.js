/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/**
 * String: indica una sequenza di caratteri
 *    let testo = 'stringa';
 * 
 * Number: non distingue tra intero e decimale, il decimale si esprime con una virgola
 *    let num = 12;
 * 
 * Boolean: restituisce solo due possibili valori, true o false
 *    let condizione = false;
 * 
 * Null: posso assegnare null a una variabile per indicare che non contiene alcun valore o oggetto. 
 * È utile quando devo cancellare il valore di una variabile o per inizializzare una variabile alla 
 * quale poi assegno un valore
 *    let a = null;
 * 
 * Undefined: indica che non è stato assegnato nessun valore ad una variabile oppure non è stata definita
 *    let a;
 * 
 * Entrambi i valori null e undefined sono falsi e si comportano come false quando è richiesto un valore boolean
 */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const NAME = 'Antonio';

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let somma = 12 + 20;

//oppure
let add1 = 12;
let add2 = 20;
let sum = add1 + add2;

console.log(12 + 20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// NAME = 'Trentin'; //=> Uncaught TypeError: Assignment to constant variable.

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let differenza = 4 - x;
console.log(differenza);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = 'john';
let name2 = 'John';

let check = (name1 === name2) ? `${name1} è uguale a ${name2}` : `${name1} è diverso a ${name2}`

console.log(check);

// EXTRA
// Esempio nr. 1
let lowerName1 = name1.toLowerCase();
let lowerName2 = name2.toLowerCase();

if(lowerName1 === lowerName2){
   console.log(`${lowerName1} è uguale a ${lowerName2}`);
}else{
   console.log(`${lowerName1} è diverso a ${lowerName2}`);
}

/* Esempio nr. 2
if(lowerName1 === lowerName2){
   check = `${lowerName1} è uguale a ${lowerName2}`;
}else{
   check = `${lowerName1} è diverso a ${lowerName2}`;
}
console.log(check);
*/

// Esempio nr. 3 - operatore ternario
/* 
check = lowerName1 === lowerName2 ? `${lowerName1} è uguale a ${lowerName2}`: `${lowerName1} è diverso a ${lowerName2}`;
console.log(check);
*/