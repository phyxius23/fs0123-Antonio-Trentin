/**
 * ------------------------------------------------------------------
 * DATE OBJECT
 * ------------------------------------------------------------------
 */

let dataAttuale = new Date(); //=> nomeGiorno, nomeMese, giorno, anno, orarioCompleto, timeZoneDelBrowser
console.log(dataAttuale);     //=> Thu Feb 16 2023 23:18:43 GMT+0100 (Ora standard dell’Europa centrale)    

// posso creare una data specificca
let dataSpecifica = new Date(2001, 9, 26, 10, 31, 47, 32); //=> anno, mese(da 0 a 11), giorno, ora, minuti, secondi, millisecondi
console.log(dataSpecifica);                                //=> Fri Oct 26 2001 10:31:47 GMT+0200 (Ora legale dell’Europa centrale)

// utilizzo di parte delle opzioni
dataSpecifica = new Date(2003, 10); //=> anno, mese, il resto viene impostato di default a 1(giorno), 00(ora, minuti,secondi)
console.log(dataSpecifica);         //=> Sat Nov 01 2003 00:00:00 GMT+0100 (Ora standard dell’Europa centrale)

// posso creare una data partendo da una stringa a patto che il mese sia indicato in inglese, se lo indica in altra lingua mi ritorna "invalid date"
let dataStringa = new Date("February 26 2003 11:23:00"); 
console.log(dataStringa);           // Wed Feb 26 2003 11:23:00 GMT+0100 (Ora standard dell’Europa centrale)

// il metodo parse() ritorna i millisecondi compresi fra la data che passeremo come argomento al metodo e il 1 gennaio 1970
let millisecondi = Date.parse("2004-02-29");
console.log(millisecondi);

/**
 * Il metodo GET() permette di prelevare delle informazioni dall'oggetto date
 * getFullYear() => 2020
 * getMonth() => mesi da 0 a 11
 * getDate() => giorni 1-31
 * getHours() => ore da 0 a 23
 * getMinutes() => minuti da 0 a 59
 * getSeconds() => secondi da 0 a 59
 * getMilliseconds() => millisecondi da 0 a 999
 * getTime() => millisecondi a partire dal 01-01-1970
 * getDay() => giorni della settimana da 0 a 6
 */

/**
 * Il metodo SET() permette di cambiare le date della nostra istanza fatta dall'oggetto date
 * setFullYear() => 2020
 * setMonth() => mesi da 0 a 11
 * setDate() => giorni 1-31
 * setHours() => ore da 0 a 23
 * setMinutes() => minuti da 0 a 59
 * setSeconds() => secondi da 0 a 59
 * setMilliseconds() => millisecondi da 0 a 999
 * setTime() => millisecondi a partire dal 01-01-1970
 * setDay() => giorni della settimana da 0 a 6
 */


/**
 * ------------------------------------------------------------------
 * PARAMETRI RANDOM E BOOLEAN
 * ------------------------------------------------------------------
 */

// random() è un metodo dell'oggetto Math, ritorna un nnumero casuale da 0 a 1 escluso.
Math.random(); // genera sempre un numero decimale inferiore a 1

Math.floor(Math.random()); //per generare un numero intero utilizziamo il metodo floor
Math.floor(Math.random() * 10); //per generare un numero intero compreso tra 0 e 9
Math.floor(Math.random() * 11); //per generare un numero intero compreso tra 0 e 10
Math.floor(Math.random() * 10) +1; //la dispensa dice per generare un numero intero compreso tra 0 e 10, io credo sia corretto tra 1 e 10


/**
 * REGOLE FONDAMENTALI
 * ogni elemento con un valore è vero
 * ogni elemento con non ha un valore è falso
 * una variabile assegnata a 0 o -0 è falsa
 * una variabile con valore di stringa vuoto, ritorna falsa var stringa = ""
 * 
 */

let stringa;                  //=> undefined => false
// let stringa = null;        //=> null => false
// let stringa = "";          //=> stranga vuota => false
// let stringa = "Ciao"*4;    //=> NaN => false
// let stringa = 0;           //=> valore 0 (numero) => false
console.log(Boolean(stringa));

var numero = false;                 //=> typeof => boolean
var numero1 = new Boolean(false);   //=> typeof => object


/**
 * ------------------------------------------------------------------
 * FUNZIONI
 * ------------------------------------------------------------------
 */

/**
 * La funzione è una porzione di codice, strutturalmente delimitata. 
 * Il nome della funzione è preceduto dalla keyword function e seguito dalle parentesi tonde, al loro interno
 * vengono specificati i parametri.
 * Definire una funzione significa nominarla e indicare le istruzioni da seguire, invocarla invece significa richiamarla
 * attraverso il suo nome in modo che possa essere eseguita.
 * Se la funzione possiede dei parametri a questi viene assegnato un valore (argomento)
 * Lo hoisting indica la possibilità a JS di eseguire una funzione prima che sia dichiarata, l'hoisting è pplicabile anche alle variabili.
 * L'hoisting inoltre è utile per scrivere codice pulito, dichiarando in alto del nostro codice le variabili e poi le funzioni
 * L'istruzione return restituisce il valore calcolato nella funzione e interrompe l'esecuzione della stessa funzione
 * Non serve specificare 
 */

let arr = [20, 40];
console.log(arr[1]);


/**
 * ------------------------------------------------------------------
 * ARRAY
 * ------------------------------------------------------------------
 */

/**
 * Metodi e usi
 * ----------------------
 * sort() / ordina alfabeticamente la lista degli elementi di un array
 * pop() => estrae l'ultimo elemento da una lista per eliminarlo
 * push() => aggiungiamo alla fine dell'array un nuovo elemento
 * shift() => come pop() ma elimina il primo elemento
 * unshift() => come push() ma aggiunge in prima posizione
 * delete() => cancella un elemento, questo elemento lascerà lo spazio relativo all'elemento eliminato empty (uvoto), non ricostruisce l'indice dell'array
 * splice() => aggiunge/rimuove elementi parametro1(indice dove inserire i nuovi elementi), parametro2(numero di elementi da rimuovere dalla posizione inidcato nell'indice),paramtero3 e poi quanti ne vogliamo lista dei parametri da inserire nell'array
 * concat() => concatenare due array
 * slice() => elimina gli elementi indicati nei parametri passati; parametro1 indica l'indice di partenza, parametro2 indice di fine l'elemento all'indice finale non viene eliminato
 * 
 */


/**
 * ------------------------------------------------------------------
 * STRINGHE
 * ------------------------------------------------------------------
 */

/**
 * Metodi e usi
 * ----------------------
 * Entrambi i metodi indexOf() e lastIndexOf() accettano un primo parametro relativo alla stringa da cercare 
 * e un secondo che indica da quale posizione iniziare la ricerca.
 * - indexOf() trova la prima posizione della parte di stringa indicata
 * - lastIndexOf() trova l'ultima posizione della parte di stringa occupata
 * - search() fa la stessa cosa di entrambi però non gli serve passare un secondo parametro
 * 
 * - length restituisce il numero di caratteri che compone le stringa
 * 
 * - slice() estrae parte della stringa, accetta due parametri che indicano l'inizio e la fine dell'estrazione
 * - substring() come sopra ma non accetta la posizione negativa
 * - substr() come slice() ma il secondo parametro indica la lunghezza della stringa esatta
 * 
 * - replace() sostituisce i caratteri indicati con dei nuovi caratteri, dovessero esserci più caratteri uguali lui applica solo al primo
 * - concat() concatena due o più stringhe 
 * - trim() elimina gli spazi vuoti di una stringa
 * - charAt() 
 * - split() divide i caratteri singolarmente e li inserisce in un array dove ogni carattere della stringa corrisponde ad un elemento dell'array
 * - 
 * 
 */

/* ESERCIZIO 28 ----------------------------------------------------------------------------------------------------------------------------------
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

  *
 ***
*****

*/

function halfTree2(varNumber){
   let counter = 0;
   
   for(let i = 1; i <= varNumber; i++){
      let asterisco = '';
      counter++;
      for(let g = 1; g <= i; g++){
         asterisco += '*';
      }
      console.log(asterisco)
   }
}
halfTree2(4);

function halfTree(varNumber){
   
   for(let i = 1; i <= varNumber; i++){

      let asterisco = '';

      for(let g = 1; g <= i; g++){

         asterisco += '*';
      }

      console.log(asterisco)
   }
}
halfTree(4);

function tree(varNumber){
   
   for(let i = 1; i <= varNumber; i = i +2){

      let asterisco = '';
      let spazio = '';

      for(let indexSpace = 0; indexSpace <= ((varNumber-i)/2); indexSpace = indexSpace + 2){

         spazio += 'O';
      }

      for(let indexAsterisk = 1; indexAsterisk <= varNumber; indexAsterisk = indexAsterisk +2){

         asterisco += '*';
      }




      console.log(spazio + asterisco)
   }
}
tree(7);

// function tree2(varNumber){

//    for(let i = 1; i <= varNumber; i=i+2){

//       console.log("*");
//    }
// }
// tree2(3);