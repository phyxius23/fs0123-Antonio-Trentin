const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "277",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male"
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a"
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a"
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male"
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female"
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male"
  },
  {
    name: "Beru Whitesun lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female"
  },
  {
    name: "R5-D4",
    height: "97",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a"
  },
  {
    name: "Biggs Darklighter",
    height: "183",
    mass: "84",
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male"
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male"
  }
];

/* ESERCIZIO 1 ------------------------ ESEGUITO
Crea una variabile chiamata "characters" e inserisci un array vuoto
*/
let characters = [];


/* ESERCIZIO 2 ------------------------ ESEGUITO
Usando un for loop, cicla l'array "starWarsCharacters" ed accedi alla proprietà "name". 
Usa il valore contenuto inserendolo nell'array creato precedentemente. 
Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/
let index = 0;

for(let starWarsCharacter of starWarsCharacters){
   // console.log(starWarsCharacter);

   characters[index++] = starWarsCharacter.name;

   // index++;
}
console.log(characters);


/* ESERCIZIO 3 ------------------ RIVEDERLO NON FUNZIONA!!!!!!!!!!!!!!
  Seguendo i passaggi precedenti crea un array chiamato "femaleCharacters" e inserisci un oggetto con questa struttura: 
  {name: Leia Organa, hair_color: "brown", eye_color: "brown"}
*/
// let femaleCharacters = [];
// index = 0;

// for(let starWarsCharacter of starWarsCharacters){

//    if(starWarsCharacter.gender === 'female'){

//       femaleCharacters[index++] = starWarsCharacter
//    }
// }

// for(let femaleCharacter of femaleCharacters){

//    delete femaleCharacter.birth_year;
//    delete femaleCharacter.gender
//    delete femaleCharacter.height
//    delete femaleCharacter.mass
//    delete femaleCharacter.skin_color
// }
// console.log(femaleCharacters);


/* ESERCIZIO 4 ------------------------ ESEGUITO
  Crea un oggetto "eyeColor" che abbia come proprietà: blue, yellow, brown, red, blue-gray.
  ognuna di queste proprietà contiene un array vuoto
*/
let eyeColor = {
   blue: [],
   yellow: [],
   brown: [],
   red: [],
   blueGray: []
}

/* ESERCIZIO 5 ------------------------ ESEGUITO
  Inserisci l'oggetto dei personaggi in "starWarsCharacters" nell'array corrispondente al colore dei loro occhi nell'oggetto "eyeColor" precedentemente creato
  Utilizza uno switch statement per determinare in quale proprietà inserire il personaggio
*/

for (let starWarsCharacter of starWarsCharacters){

   switch(starWarsCharacter.eye_color){
      case 'blue':
         eyeColor.blue.push(starWarsCharacter);
         break;

      case 'yellow':
         eyeColor.yellow.push(starWarsCharacter);
         break;

      case 'brown':
         eyeColor.brown.push(starWarsCharacter);
         break;

      case 'red':
         eyeColor.red.push(starWarsCharacter);
         break;

      case 'blue-gray':
         eyeColor.blueGray.push(starWarsCharacter);
         break;

      default:
         console.log('Non è andata a buon fine');
         break;                            
      }
}
console.log(eyeColor);


/* ESERCIZIO 6 ------------------------ ESEGUITO (FORSE DA RIVEDERE CHE COZZA CON L'ESERCIZIO 7)
  Usa un while loop per calcolare la massa totale dell'equipaggio
*/
let massTotal = 0;
index = 0;

while(index < starWarsCharacters.length){

   massTotal += Number(starWarsCharacters[index].mass);

   index++;
} 
console.log(massTotal);

/* ESERCIZIO 7 ------------------------ NON FUNZIONA!!!!!!!!!!!!!!!

Crea uno switch statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'impotetica astronave contenente i personaggi dell'array "starWarsCharacters"
(cerca su un motore di ricerca switch case e conditionals)

Se la massa è inferiore a 500 stampa in console: "Ship is under loaded",
Se la massa è uguale a 500 stampa in console: "Ship is half loaded",
Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700",
Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900",
Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: Jump ship now!"

Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/
switch (true) {
   case massTotal < 500:
      console.log('Ship is under loaded');
      break;

   case massTotal = 500:
      console.log('Ship is half loaded');
      break;

   case massTotal < 700:
      console.log('Warning: Load is over 700');
      break;

   case massTotal < 900:
      console.log('Critical Load: Over 900');
      break;

   case massTotal < 1000:
      console.log('DANGER! OVERLOAD ALERT: Jump ship now!');
      break;
   
   default:
      console.log('Non è andata a buon fine');
      break;
}



/* ESERCIZIO 8 ------------------------ ESEGUITO
Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi creare un nuovo array, o tentare la riassegnazione del valore corrispondente)
*/
for(let starWarsCharacter of starWarsCharacters){

   if(starWarsCharacter.gender === 'n/a'){
   
      starWarsCharacter.gender = 'robot';
   }
}
console.log(starWarsCharacters);

/* EXTRA ESERCIZIO 9

Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome"
Usa uno più for loop per raggiungere il risultato

(tip: cerca un metodo degli array per rimuovere un elemento)

Una volta fatto crea un conosle.log per controllare la proprietà length di "characters" prima e dopo l'operazione
*/

/* EXTRA ESERCIZIO 10
Crea una funzionalità che prenda un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo
*/
let indexRandom = Math.round(Math.random() * (starWarsCharacters.length - 1))

for(let property in starWarsCharacters[indexRandom]){

   console.log(starWarsCharacters[indexRandom]);
   
   console.log(`Name: ${property.name}, Birth Year: ${property.birth_year}, Height: ${property.height}, Mass: ${property.mass}, Gender: ${property.gender}, Eye Color: ${property.eye_color}, Hair Color: ${property.hair_color}, Skin Color: ${property.skin_color}`);
}