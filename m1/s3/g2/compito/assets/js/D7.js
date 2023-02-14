/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
// let element1 = 'Stringa';
// let element2 = 'concatenata';

// console.log(concatString(element1, element2));

// function concatString(parametro1, parametro2){

//    return ((parametro1.slice(0,2)).concat(parametro2.slice(-3))).toUpperCase();
// }


/* ESERCIZIO 2
  Scrivi una funzione per creare un array di soli valori DISPARI da 1 a 100.
 */
// let arrElements = oddNumber();

// console.log(arrElements);

// function oddNumber(){
//    let arr = [];
//    let index = 0;

//    for(let counter = 0; counter <= 100; counter++){
   
//       if(counter % 2){
   
//          arr[index] = counter;

//          index++;
//       }
//    }

//    return arr;
// }


/* ESERCIZIO 3
  Scrivi una funzione per creare un array di soli valori multipli di 5, da 1 a 100.
 */
// let arrElements = calcNumberMultiple();

// console.log(arrElements)

// function calcNumberMultiple(){
//    let arr = [];
//    let index = 0;

//    for(let counter = 0; counter <= 100; counter++){
   
//       if(!(counter % 5)){
   
//          arr[index] = counter;

//          index++;
//       }
//    }
//    return arr;
// }

/* ESERCIZIO 4
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */
let arrElements = numberRandom();

console.log(arrElements);

function numberRandom(){
   let arr = [];

   for(let i = 0; i < 10; i++){

      arr.push(Math.round((Math.random() * 100)));
   }
   
   return arr;
}

/* ESERCIZIO 5
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */
let arrElements1 = numberRandom();
console.log(arrElements1);

let arrEven = calcEven(arrElements1);
console.log(arrEven);


function calcEven(elements){

   for(let i = 0; i < elements.length;){

      if((elements[i] % 2) || elements[i]==0){

         elements.splice(i, 1);
      }else{

         i++;
      }
   }
   
   return elements;
}

/* ESERCIZIO 6
  Scrivi una funzione per sommare a catena i numeri contenuti in un array.
 */
let arrayElements10 = numberRandom();
console.log(arrayElements10);

let sumElements = sumArray(arrayElements10);
console.log(sumElements);

function sumArray(n) {
   return n.reduce((a, b) => a + b, 0) // 0 è la condizione di partenza perchè a inizialmente è indefinita
}


/* ESERCIZIO 7
  Scrivi una funzione per incrementare di 1 tutti i valori numerici in un array.
*/
let arrElements2 = numberRandom();

console.log(arrElements2);
console.log(numberAddOne(arrElements2));

function numberAddOne(elements){

   return elements.map(n => n + 1);
}


/* ESERCIZIO 8
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
let arrayString = ['EPICODE', 'is', 'great'];

for(let i = 0; i < arrayString.length; i++){

   arrayString[i] = arrayString[i].length;
}

console.log(arrayString);

/* ESERCIZIO 9 (EXTRA)
  Scrivi una funzione per eliminare solo i valori PARI da un array.
*/
let arrElements3 = numberRandom();

console.log(arrElements3);
console.log(deleteEven(arrElements3));

function deleteEven(arrNumberRandom){

   for(let i = 0; i < arrNumberRandom.length;){

      if(!(arrNumberRandom[i] % 2) || arrNumberRandom[i]==0){

         arrNumberRandom.splice(i, 1);
      }else{

         i++;
      }
   }
   
   return arrNumberRandom;
}


/* ESERCIZIO 10 (EXTRA)
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */
let arrElements4 = arrayElements();

console.log(arrElements4);

function arrayElements(){
   let arr = [];
   let check = numberRand();

   console.log(check);

   for(let i = 0; i < 10; i++){
      while(arr.includes(check)){
         check = numberRand();
      }
      arr[i] = check;
   }
   return arr;
}

function numberRand(){
   return Math.round((Math.random() * 10));
}


/* ESERCIZIO 11 (EXTRA)
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/
let arrElements5 = numberRandom();
console.log(arrElements5);

arrElements5 = arrElements5.reverse();
console.log(arrElements5);


/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12 --------------------------------------------------------------------------------
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/


/* ESERCIZIO 13
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
console.log(numberFilms(movies));

function numberFilms(elements){
   return elements.length
}

/* ESERCIZIO 14
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
let arrElements6 = titleMovies();

console.log(arrElements6);

function titleMovies(){
   
   let arr = [];
   let index = 0;
   
   for(movie of movies){
   
      arr[index] = movie.Title;
   
      index++;
   }   

   return arr;
}


/* ESERCIZIO 15
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
let arrElements7 = millenniumMovies();

console.log(arrElements7);

function millenniumMovies(){

   let arr = [];
   let index = 0;

   for(movie of movies){

      if(movie.Year >= 2000){

         arr[index] = movie.Title;

         index++;
      }
   }

   return arr;
}


/* ESERCIZIO 16 --------------------------------------------------------------------------------
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/


/* ESERCIZIO 17
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
let arrElements8 = sumYear(movies);

console.log(arrElements8);

function sumYear(){

   let sum = 0;

   for(movie of movies){

      sum += parseInt(movie.Year);
   }

   return sum;
}

/* ESERCIZIO 18 (EXTRA) ------------------------------------------------------------------------
  Scrivi una funzione per recuperare tutti i film dall'array fornito che contengono una parola fornita. Rings
*/
// let arrayElements9 = searchString(movies);

// console.log(arrayElements9);

// function searchString(){

//    for(movie of movies){

//       movie
//    }
// }

// function check(string){
//    return string = Rings;
// }
