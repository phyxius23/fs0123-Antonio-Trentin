/**
 * In JS è possibile assegnare ad una variabile un vallore tra i vari tipi: string, number, boolean, 
 * undefined, null, ecc..
 * I valori sopracitati fanno parte della famiglia delle primitive, qualsiasi valore non primitivo 
 * diventa parte della famiglia degli oggetti
 * Cos'è un oggetto? un gruppo di proprietà e di metodi delimitato da parentesi graffe {} al suo 
 * interno 
 * Al suo interno può potenzialmente contenere un numero potenzialmente illimitato di coppie 
 * chiave-valore
 * Ogni volta che scrivo new date() il new crea un oggetto non una stringa
 */

// 
const obj = {};

const dog = {
   breed: 'Labrador',
   age: 2,
   bark: function () {
      // metodo dog
      console.log('bau');
   },
   angry: function () {
      console.log('WHOOOOOFFFF!!');
   }
};

