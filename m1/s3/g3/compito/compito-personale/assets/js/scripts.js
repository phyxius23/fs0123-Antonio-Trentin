let input = document.getElementById('input');
let btnInput = document.getElementById('btn-input');
let listContent = document.getElementById('lists-content');

btnInput.addEventListener('click', createListItem); 

function createListItem(){

   // creazione elementi html
   let li = document.createElement('li');
   let icon = document.createElement('i');
   let span = document.createElement('span');
   let btnDelete = document.createElement('button');

   // creazione nodi testo
   let textSpan = document.createTextNode(input.value);
   let textBtnDelete = document.createTextNode('Delete');

   // appendChild del textNode dell'elemento span
   span.appendChild(textSpan);

   // appendChild del textNode dell'elemento button(delete)
   btnDelete.appendChild(textBtnDelete);

   // se non ho inserito nulla nell'elemento input esco dalla funzione createListItem()
   if(input.value == ''){
      return
   }

   // assegno delle classi (in questo caso di font-awesome) all'elemento icon
   icon.classList.add('fal', 'fa-square');

   li.prepend(icon);             // inserisco icon all'interno dell'elemento li come primo figlio
   li.appendChild(span);         // inserisco span all'interno dell'elemento li come ultimo figlio
   li.appendChild(btnDelete);    // inserisco btnDelete all'interno dell'elemento li come ultimo figlio

   input.value = '';             // imposto il valore dell'elemento input a 'vuoto'

   listContent.appendChild(li);          // append li all'interno di ul
   
   btnDelete.addEventListener('click', ()=>{ // al click eseguo la linea di codice sotto
      li.remove();                           // rimuovo l'elemento li
   });
}


