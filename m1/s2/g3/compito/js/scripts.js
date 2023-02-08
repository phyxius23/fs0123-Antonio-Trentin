/**
 * Funzione che mi calcola un numero random intero da utilizzare negli esercizi seguono
 */
function numberRandom(){
   return Math.round(Math.random() * 100);
}

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let int1 = numberRandom();
let int2 = numberRandom();

if(int1 > int2){
   console.log(`${int1} è maggiore di ${int2}`);
}else if(int2 > int1){
   console.log(`${int2} è maggiore di ${int1}`);
}else{
   console.log(`Entrambi hanno valore ${int2}`);
}
/* -------------------------------------------------- */


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let int3 = numberRandom();
// let int3 = 5;

if(int3 != 5){
   console.log('Not equal');
}else{
   console.log('Equal');
}

// console.log(int3 != 5 ? 'Not equal' : 'Equal');

/* -------------------------------------------------- */


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let int4 = numberRandom();

// let check = ((int4 % 5) == 0) ? `Il numero ${int4} è divisibile per 5` : `Il numero ${int4} non è divisibile per 5`;

if((int4 % 5) == 0){
   console.log('Il numero ' + int4 + 'è divisibile per 5');
}else{
   console.log(`Il numero ${int4} non è divisibile per 5`);
}

// console.log(check);
/* -------------------------------------------------- */


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let int5 = numberRandom();
// let int6 = numberRandom();
let int5 = 8;
let int6 = 8;
console.log(int5, int6);

// posso raggruppare le condizioni di differenza?
if(int5 == 8 || int6 == 8){
   console.log(`Il valore di uno dei due numeri è uguale a 8`);
}else if(int5 + int6 == 8){
   console.log('La somma dei due valori è 8');
}else if(int5 - int6 == 8){
   console.log('La differenza dei due valori è 8');
}else if(int6 - int5 == 8){
   console.log('La differenza dei due valori è 8');
}else{
   console.log('Nessuna delle opzioni è valida');
}

/* -------------------------------------------------- */


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = numberRandom();
let speseSpedizione = 10;
console.log(totalShoppingCart);

if(totalShoppingCart > 50){
   console.log(`La spedizione è gratuita. Il costo totale da versare è di € ${totalShoppingCart}`);
}else{
   totalShoppingCart += speseSpedizione;
   console.log(`La spedizione costa € ${speseSpedizione}. Il totale da versare è di € ${totalShoppingCart}`);
}

/* -------------------------------------------------- */


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let blackFriday = 20;

function sconto(){
   return (totalShoppingCart / 100) * (100 - blackFriday);
}

totalShoppingCart = sconto();

if(totalShoppingCart > 50){
   console.log(`Il costo totale da versare è di € ${totalShoppingCart}. La spedizione è gratuita.`);
}else{
   totalShoppingCart += speseSpedizione;
   console.log(`La spedizione costa € ${speseSpedizione}. Il totale da versare è di € ${totalShoppingCart}`);
}

/* -------------------------------------------------- */


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = numberRandom();
let b = numberRandom();
let c = numberRandom();

if(a > b){
   if(a > c){
      if(b > c){
         console.log(`Valori in ordine decrescente: ${a}, ${b}, ${c}`);
      }else{
         console.log(`Valori in ordine decrescente: ${a}, ${c}, ${b}`);
      }
   }else if(a > b){
      console.log(`Valori in ordine decrescente: ${c}, ${a}, ${b}`);
   }else{
      console.log(`Valori in ordine decrescente: ${c}, ${b}, ${a}`);
   }
}else if(b > c){
   if(a > c){
      console.log(`Valori in ordine decrescente: ${b}, ${a}, ${c}`);
   }else{
      console.log(`Valori in ordine decrescente: ${b}, ${c}, ${a}`);
   }
}else{
   console.log(`Valori in ordine decrescente: ${c}, ${b}, ${a}`);
}

/* -------------------------------------------------- */


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let int7 = 'testo';
let int7 = 5;

if(typeof int7 == 'number'){
   console.log(`Il valore ${int7} è un numero`);
}else{
   console.log(`Il valore ${int7} non è un numero`);
}

/* -------------------------------------------------- */


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let int8 = numberRandom();
console.log(int8);

if(int8 % 2 == 0){
   console.log(`Il numero ${int8} è pari`);
}else{
   console.log(`Il numero ${int8} è dispari`);
}

/* -------------------------------------------------- */


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;

if(val > 10){
   console.log("Uguale a 10 o maggiore");
}else if(val < 5){
   console.log("Meno di 5");
}else{
   console.log("Meno di 10");
}

/* -------------------------------------------------- */


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = 'Toronto';

/* -------------------------------------------------- */


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
console.log(me);

/* -------------------------------------------------- */


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.splice(me.skills.length - 1, 1);
console.log(me.skills);

/* -------------------------------------------------- */


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let arr = [];

for (let i = 0; i < 10; i++) {
   arr[i] = i + 1;
}

console.log(arr);

/* -------------------------------------------------- */


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
arr[arr.length - 1] = 100;

console.log(arr);
