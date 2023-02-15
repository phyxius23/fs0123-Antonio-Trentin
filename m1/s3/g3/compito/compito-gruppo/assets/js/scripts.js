let input = document.getElementById('input'); //importo elemento input
let button = document.getElementById('input-btn'); //importo elemento button#input-btn
let taskList = document.getElementById('task-list'); //importo elemento ul#task-list

button.addEventListener('click', createList); 

function createList(){
   let li = document.createElement('li'); // creo elemento li
   let del = document.createElement('button'); // creo elemento button che servirà a cancellare la li parent

   if(input.value === ''){ // se in input non ho inserito nulla esci dalla funzione
      return
   }else{                  // altrimenti 
      li.textContent = input.value; // assegno al textContent il valore ricevuto in input
      input.value = '';             // imposto il valore dell'elemento input a 'vuoto'
   
      del.textContent = 'Cancella'; // scrivo all'interno del button(delete)
   
      li.append(del);               // append button(delete) all'interno di li
      taskList.append(li);          // append li all'interno di ul
      
      del.addEventListener('click', ()=>{ // al click eseguo la linea di codice sotto
         li.remove();                     // rimuovo l'elemento li
      });
   }
   
   
}