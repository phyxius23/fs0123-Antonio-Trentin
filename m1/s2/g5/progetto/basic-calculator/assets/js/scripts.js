/**
 * Funzione di Controllo
 */
function checkEndDisplay(display){
   if(
      display.value.endsWith('+') || display.value.endsWith('-') || 
      display.value.endsWith('*') || display.value.endsWith('/') ||
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


