// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(checkArray());

function checkArray(){

   let enne = 8;
   let arr = giveMeRandom(enne);
   let sum = 0;

   for(let i = 0; i < arr.length; i++){
      
      if(arr[i] > 5){

         console.log(arr[i]);
         
         sum += arr[i];
      }
   }

   return sum;
}

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const shoppingCart = [
   {
      price: 1.69,
      name: "Yogurt Blend",
      id: 1,
      quantity: 6 // 10.14
   },
   {
      price: 0.40,
      name: "Levissima 1,5l",
      id: 2,
      quantity: 36 // 14.40
   },
   {
      price: 1.59,
      name: "Novi Cioccolato Fondente 75%",
      id: 3,
      quantity: 4 // 6.36
   },
   {
      price: 6.50,
      name: "Carne di Scottona 300g",
      id: 4,
      quantity: 2 // 13.00
   },
   {
      price: 1.39,
      name: "Latte",
      id: 5,
      quantity: 5 // 6.95
   },
   {
      price: 1.09,
      name: "Mutti Passata Pomodoro",
      id: 6,
      quantity: 6 // 6.54
   },
   {
      price: 7.50,
      name: "Rio Mare Tonno",
      id: 7,
      quantity: 4 // 30.00
   }
]

console.log(shoppingCartTotal(shoppingCart));

function shoppingCartTotal(products){

   let carrelloTotale = 0;

   for(product of products){

      carrelloTotale = (product.price * product.quantity) + carrelloTotale;
   }

   return carrelloTotale.toFixed(2);
}

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let newProduct = 
{
   price: 4.50,
   name: "Grisbi al cioccolato",
   id: 8,
   quantity: 2 // 9.00
};

console.dir(addToShoppingCart(shoppingCart, newProduct));

function addToShoppingCart(products, newProduct){

   products.push(newProduct);

   for(product of products){
      document.write(`Prodotto: ${product.name}. Costo: € ${product.price}.<br>`);
   }

   return products

}

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(maxShoppingCart(shoppingCart));

function maxShoppingCart(products){

   let priceMax = products[0].price;

   for(product of products){

      if(priceMax < product.price){

         priceMax = product.price;
      }
   }

   return priceMax;
}

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(latestShoppingCart(shoppingCart));

function latestShoppingCart(products){

   return products.pop();
}

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
