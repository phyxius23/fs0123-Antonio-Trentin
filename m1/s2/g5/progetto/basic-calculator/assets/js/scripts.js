/**
 * Funzione di Controllo
 */
function checkEndDisplay(display){
   if(
      display.value.endsWith('+') || display.value.endsWith('-') || 
      display.value.endsWith('x') || display.value.endsWith(':') ||
      display.value.endsWith('.')
   ){
      display.value = display.value.slice(0, display.value.length-1);
   }
}

/**
 * Funzione di Reset (AC)
 */
function reset(){
   let display = document.querySelector('#display'); //salvo in una var l'elemento #display

   display.value = "";
}

/**
 * Funzione Total (=)
 */
function total(){

   let display = document.querySelector('#display');

   if(!(display.value == '')){

      checkEndDisplay(display);

      let result = eval(display.value.replaceAll('x','*').replaceAll(':','/').replaceAll(',','.'));

      if(result == 'Infinity'){

         console.log(result);
         result = 'Errore';
      }
      display.value = result
   }
}

/**
 * Funzione per Operatori e Virgola (+ - * / .)
 */
function operatori(elemento){

   let simbolo = elemento.textContent; //recupero l'operatore
   let display = document.querySelector('#display'); //salvo in una var l'elemento #display

   if(!(display.value == '')){

      checkEndDisplay(display);

      display.value += simbolo;
   }
}

/**
 * Funzione per Numeri
 */
function addNumber(elemento){

   let simbolo = elemento.textContent; //recupero l'operatore
   let display = document.querySelector('#display'); //salvo in una var l'elemento #display

   // display.value += simbolo;

   if(simbolo === '0'){
      
      if(!(display.value == '')){
         
         display.value += simbolo;
      }
   }else{
      
      display.value += simbolo;
   }
}

/**
 * Funzione per calcolo percentuale
 */
function perCent(){
   let display = document.querySelector('#display'); //salvo in una var l'elemento #display

   let temp = display.value.replaceAll(',','.');
   let tempPerCent = '';
   let tempNumber = '';
   let index = 0;

   if(!(display.value == '')){

      // ho testato varie calcolatrici con i rami divisione e moltiplicazione ma tutte mi danno risultati diverse (BUG)
      if(temp.includes('+')){
         index = temp.indexOf('+');
         tempPerCent = eval(temp.slice(index+1));
         tempNumber = eval(temp.slice(0, index));
         temp = (tempNumber / 100) * (100 + tempPerCent);
      }else if(temp.includes('-')){
         index = temp.indexOf('-');
         tempPerCent = eval(temp.slice(index+1));
         tempNumber = eval(temp.slice(0, index));
         temp = (tempNumber / 100) * (100 - tempPerCent);
      }else if(temp.includes(':')){
         index = temp.indexOf(':');
         tempPerCent = eval(temp.slice(index+1));
         tempNumber = eval(temp.slice(0, index));
         temp = (tempNumber / 100) * (100 / tempPerCent);
      }else{
         index = temp.indexOf('x');
         tempPerCent = eval(temp.slice(index+1));
         tempNumber = eval(temp.slice(0, index));
         temp = (tempNumber / 100) * (100 * tempPerCent);
      }

      display.value = temp.toFixed(2);
   }
}
