/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let base = Math.floor(Math.random() * 100);
let altezza = Math.floor(Math.random() * 100);

console.log(base, altezza, area(base, altezza));

function area(parBase, parAltezza){

   return parBase * parAltezza;
}

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val1 = 100;
let val2 = 200;

console.log(crazySum(val1, val2));

function crazySum(par1, par2){

   if(par1 == par2){

      return (par1 + par2) * 3;
   }else{

      return par1 + par2;
   }
}

/* ESERCIZIO 3 DA ULTIMARE
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val6 = 50;

console.log(crazyDiff(val6));

function crazyDiff(parametro){

   let risultato = parametro - 19;

   if(parametro > 19){

      risultato = risultato * 3;
   }

   return risultato;
}

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val3 = 400;

console.log(boundary(val3));

function boundary(n){

   if((n > 20 && n <= 100) || n == 400){

      return true;
   }
}

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val8 = 'EPICODE Full Stack Developer';

console.log(epify(val8));

function epify(parametro){

   if(parametro.startsWith('EPICODE')){
      
      return parametro;
   }

   return 'EPICODE ' + parametro;
}

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val4 = -29;

console.log(check3and7(val4));

function check3and7(parametro){

   if(parametro > 0){
   
      if((parametro % 3) == 0){
   
         return 'Il numero è un multiplo di 3';
   
      }else if((parametro % 7) == 0){
   
         return 'Il numero è un multiplo di 7';
   
      }else{
   
         return 'Il numero non è multiplo ne di 3 e ne di 7'
      }
   }else{
   
      return 'Inserisci un numero positivo';
   }
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let string1 = 'epicode';

console.log(reverseString(string1));

function reverseString(string){
   // versione estesa
   // let arr = string.split(""); // N.B.: usa i doppi apici all'interno delle tonde perchè senza non crea un array dove ogni lettera corrisponde ad un indice

   // let arrReverse = arr.reverse(); // creo un array dove l'ordine del contenuto è stato capovolto

   // arr = arrReverse.join("");

   // return arr;

   // versione con più metodi concatenati
   return string.split("").reverse().join("");
}

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val7 = 'Ho un labrador che dorme solo al centro del letto';

console.log(upperFirst(val7));

function upperFirst(string){

   return string.toLowerCase().split(' ').map((string) => string.charAt(0).toUpperCase() + string.slice(1)).join(' ');
   // return string.split(" ");
}

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let string2 = 'Neve sulle Alpi';

console.log(cutString(string2));

function cutString(string){

   let newString = string.slice(1,-1);

   return newString;
}

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val5 = 15;

console.log(giveMeRandom(val5));

function giveMeRandom(n){

   let arr = [];
   
   for(let i = 0; i < n; i++){
      arr[i] = Math.floor(Math.random() * 10);
   }

   return arr;
}
