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

/**
 * Funzione che restituisce il valore di π
 */
function pi(){
   let display = document.querySelector('#display'); // recupero l'elemento input

   display.value = Math.PI;
}

/**
 * Funzione che calcola la radice quadrata
 */
function squareRoot(){
   let display = document.querySelector('#display');
   let result = 0;

   checkEndDisplay(display);

   result = eval(display.value.replaceAll(',','.'));

   display.value = Math.sqrt(result);
}

/**
 * Funzione che calcola la radice cubica
 */
function cubicRoot(){
   let display = document.querySelector('#display');
   let result = 0;

   checkEndDisplay(display);
   result = eval(display.value.replaceAll(',','.'));
   display.value = Math.cbrt(result);
}

/**
 * Funzione che calcola l'elevazione al quadrato
 */
function powerTwo(){
   let display = document.querySelector('#display');
   let result = 0;

   checkEndDisplay(display);
   result = eval(display.value.replaceAll(',','.'));
   display.value = Math.pow(result, 2)
}

/**
 * Funzione che calcola l'elevazione alla terza
 */
function powerThree(){
   let display = document.querySelector('#display');
   let result = 0;

   checkEndDisplay(display);
   result = eval(display.value.replaceAll(',','.'));
   display.value = Math.pow(result, 3)
}

/**
 * Funzione che calcola l'esponenziale di x
 */
function exponentialTen(){
   let display = document.querySelector('#display');
   let result = 0;

   checkEndDisplay(display);
   result = eval(display.value.replaceAll(',','.'));
   display.value = Math.pow(10, result);
}

/**
 * Funzione che calcola il fattoriale, con i numeri decimali non funziona.
 */
function factorial(){
   let display = document.querySelector('#display');
   let index = 1;
   let tempValue = 1;
   
   checkEndDisplay(display);
   index = eval(display.value.replaceAll(',','.'));

   for (let i = 1; i <= index; i++) {
      
      tempValue *= i;
   }

   display.value = tempValue;
}

/**
 * Funzione esponenziale con base numero di Eulero ed esponente x
 */
function exponentialE(){
   let display = document.querySelector('#display');
   let result = 0;

   checkEndDisplay(display);

   result = eval(display.value.replaceAll(',','.'));

   display.value = Math.exp(result);
}

/**
 * Funzione esponenziale con base numero di Eulero ed esponente x
 */
function numberEulero(){
   let display = document.querySelector('#display');

   display.value = Math.E;
}

/**
 * Funzione che calcola l'inverso del valore visualizzato
 */
function fractionOneOfX(){
   let display = document.querySelector('#display');
   let result = 0;

   checkEndDisplay(display);

   result = eval(display.value.replaceAll(',','.'));

   display.value = 1 / result;
}

/**
 * Logaritmo naturale
 */
function naturalLogarithm(){
   let display = document.querySelector('#display');
   let result = 0;

   checkEndDisplay(display);

   result = eval(display.value.replaceAll(',','.'));

   display.value = Math.log(result);
}

/**
 * Logaritmo in base 10
 */
function logarithmTenBase(){
   let display = document.querySelector('#display');
   let result = 0;

   checkEndDisplay(display);

   result = eval(display.value.replaceAll(',','.'));

   display.value = Math.log10(result);
}

/**
 * Coseno di x
 */
function cosine(){
   let display = document.querySelector('#display');
   let result = 0;

   checkEndDisplay(display);

   result = eval(display.value.replaceAll(',','.'));

   result = Math.cos((result * Math.PI / 180).toFixed(4)).toFixed(4);

   display.value = result;
}

/**
 * Coseno iperbolico di x
 */
function hyperbolicCosine(){
   let display = document.querySelector('#display');
   let result = 0;

   checkEndDisplay(display);

   result = eval(display.value.replaceAll(',','.'));

   result = Math.cosh(result).toFixed(4);

   display.value = result;
}


/**
 * Tangente di x
 */
function tangent(){
   let display = document.querySelector('#display');
   let result = 0;

   checkEndDisplay(display);

   result = eval(display.value.replaceAll(',','.'));

   if(result != 90){
      
      result = Math.tan((result * Math.PI / 180).toFixed(4)).toFixed(4);
      
      display.value = result;
   }else{
      display.value = 'Non definita';
   }
}

/**
 * Tangente iperbolica di x
 */
function hyperbolicTangent(){
   let display = document.querySelector('#display');
   let result = 0;

   checkEndDisplay(display);

   result = eval(display.value.replaceAll(',','.'));

   result = Math.tanh(result).toFixed(4);

   display.value = result;
}

/**
 * Seno di x
 */
function sine(){
   let display = document.querySelector('#display');
   let result = 0;

   checkEndDisplay(display);

   result = eval(display.value.replaceAll(',','.'));

   result = Math.sin((result * Math.PI / 180).toFixed(4)).toFixed(4);

   display.value = result;
}

/**
 * Seno iperbolico di x
 */
function hyperbolicSine(){
   let display = document.querySelector('#display');
   let result = 0;

   checkEndDisplay(display);

   result = eval(display.value.replaceAll(',','.'));

   result = Math.sinh(result).toFixed(4);

   display.value = result;
}