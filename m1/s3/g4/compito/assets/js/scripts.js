/* ESERCIZIO 1
   Scrivi una funzione per cambiare il titolo del documento in qualcos'altro.
*/
let newTitle = 'Nuovo titolo della pagina';

const changeTitle = function (newTitle) {

let title = document.querySelector('.myClass');
   
   title.innerText = newTitle;
}
changeTitle(newTitle);

/* ESERCIZIO 2
   Scrivi una funzione per cambiare la classe del titolo della pagina in "myHeading".
*/

// const addClassToTitle = function () {
//   let title = document.querySelector('.myClass');

//   title.classList.remove('myClass');
//   title.classList.add('myHeading');
//   title.classList.replace('myClass', 'myHeading')
// }
// addClassToTitle();

/* ESERCIZIO 3
   Scrivi una funzione per cambiare il contenuto di tutti i p che sono discendenti di un div.
*/

// const changePcontent = function () {
//    let paragraphs = document.querySelectorAll('div > p');

//    for(paragraph of paragraphs){

//       paragraph.textContent = 'Nuovo testo statico per tutti i paragrafi contenuti negli elementi div';
//    }
// }
// changePcontent();

// versione alternativa
// const changePcontent = function () {
//    document.querySelectorAll('div > p').forEach(element => {

//       element.textContent = 'Nuovo testo statico per tutti i paragrafi contenuti negli elementi div';
//    })
// }
// changePcontent();


/* ESERCIZIO 4
   Scrivi una funzione per cambiare la proprietà href di ogni link a https://www.google.com
*/

// const changeUrls = function () {
//    let links = document.querySelectorAll('a');

//    links.forEach(link => {
      
//       link.href = 'https://www.google.com';
//    })
// }
// changeUrls();

/* ESERCIZIO 5
   Scrivi una funzione per aggiungere un nuovo elemento alla seconda lista non-ordinata.
*/
// let contentListItem = 'Quarto';

// const addToTheSecond = function (content) {
//    let ul = document.getElementById('secondList'); //seleziono l'elemento a cui voglio aggiungere la li
//    let li = document.createElement('li'); //creo elemento li da aggiungere
//    let contentLi = document.createTextNode(content);

//    li.appendChild(contentLi);
//    ul.appendChild(li);
// }
// addToTheSecond(contentListItem);

/* ESERCIZIO 6
   Scrivi una funzione per aggiungere un secondo paragrafo al primo div.
*/
// let contentText = 'Lorem ipsum dolor sit amet';

// const addParagraph = function (content) {
//    let firstDiv = document.querySelector('div'); // punto al primo elemento div
//    let paragraph = document.createElement('p');  //creo un elemento p
//    let textParagraph = document.createTextNode(content)  //creo un textNode e gli assegno un valore

//    paragraph.appendChild(textParagraph); 
//    firstDiv.insertBefore(paragraph, firstDiv.children[1]);
// }
// addParagraph(contentText);

/* ESERCIZIO 7
   Scrivi una funzione per far scomparire la prima lista non-ordinata.
*/

// const firstUlDisappear = function () {
//    let ul = document.getElementById('firstList');

//    ul.remove();
// }
// firstUlDisappear();

/* ESERCIZIO 8
   Scrivi una funzione per rendere verde lo sfondo di ogni lista non-ordinata.
*/

// const paintItGreen = function () {
//    let unorderedLists = document.querySelectorAll('ul');

//    unorderedLists.forEach(ul => {
//       ul.style.backgroundColor = 'green';
//    })
// }
// paintItGreen();

/* ESERCIZIO 9
   Rendi il tag h1 capace di cambiare colore del testo ogni volta che l'utente ci clicca sopra.
*/

// const makeItClickable = function () {
//    let title = document.querySelector('.myClass');

//    title.addEventListener('click', ()=>{
//       title.classList.toggle('myHeading');
//    })
// }
// makeItClickable();

/* ESERCIZIO 10
   Cambia il testo del footer con qualcos'altro quando l'utente ci clicca sopra.
*/

// const changeFooterText = function () {
//    let text = document.querySelector('.footer > p');

//    text.addEventListener('click', ()=> {
//       text.textContent = 'Lorem ipsum dolor sit amet';
//    })
// }
// changeFooterText();

/* ESERCIZIO 11
   Aggiungi un event listener al campo di testo nella pagina e fai in modo che dopo ogni lettera il suo valore venga mostrato in console.
*/

// const inputField = document.getElementById('input-field');

// // versione con il passaggio dei dati in console tramite event
// inputField.addEventListener('keydown', (e)=> {
//    console.log(e.key);
// })

// // versione con il passaggio dei dati in console tramite il value di input
// inputField.addEventListener('keyup', ()=> {
//    console.log(inputField.value);
// })


/* ESERCIZIO 12
   Crea un messaggio di benvenuto con un alert quando la pagina ha finito di caricarsi.
*/
// window.onload = function () {
//    alert('Benvenuto');
// }
