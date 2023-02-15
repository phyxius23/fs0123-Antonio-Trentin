let input = document.getElementById('input');
let btnInput = document.getElementById('btn-input');
let listContent = document.getElementById('lists-content');

btnInput.addEventListener('click', createListItem); 

function createListItem(){
   let li = document.createElement('li');
   let icon = document.createElement('i');
   let btnDelete = document.createElement('button');

   console.dir(li);

   if(input.value == ''){
      return
   }
   icon.classList.add('fal', 'fa-square');
   li.append(icon);               // append button(delete) all'interno di li

   // li.appendChild(input.value);
   //textContent = input.value; // assegno al textContent il valore ricevuto in input
   input.value = '';             // imposto il valore dell'elemento input a 'vuoto'

   btnDelete.textContent = 'Cancella'; // scrivo all'interno del button(delete)

   console.dir(icon);

   listContent.appendChild(li);          // append li all'interno di ul
   
   btnDelete.addEventListener('click', ()=>{ // al click eseguo la linea di codice sotto
      li.remove();                     // rimuovo l'elemento li
   });
   
   // icon.classList.add('fal fa-square');
   // input.value = '';

   // let liContent = document.createTextNode(input.value)
   // // li.appendChild(liContent);
   // li.appendChild(icon);

}


