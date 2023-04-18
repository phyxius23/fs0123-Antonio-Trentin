/**
 * API
 * ----------------------------------------------------------------------------
 */
const api = 'https://striveschool-api.herokuapp.com/api/product/';
const key = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0M2JmYWY4MWI0MjAwMTM5YjI4NjIiLCJpYXQiOjE2NzkwNDc2NzUsImV4cCI6MTY4MDI1NzI3NX0.JmR_1o_XdXappfHvo-dwS-Viv59cw5do0ZL-M7sGTBs';
const authorization = {
   headers: {
      "Authorization": key
   }
}


/**
 * BACK OFFICE
 * ----------------------------------------------------------------------------
 */
const URLParams = new URLSearchParams(window.location.search)
const selectedId = URLParams.get("id")

const endpoint = selectedId ? api + selectedId : api;
const method = selectedId ? "PUT" : "POST"

// 
let myForm = document.getElementById('form');

// inserisco anno copyright nel footer
let currentYear = new Date();
document.querySelector('footer p').innerText = `© ${currentYear.getFullYear()} Crudazon, Inc.`;


/**
 * Fn di validazione del form per la creazione/modifica del prodotto
 * ----------------------------------------------------------------------------
 */
const inputValidate = () => {
   myForm.classList.add('validated');
}

// classe che utilizzo per istanziare l'oggetto contenente i dati ricevuti dai vari input
// non la utilizzo perchè quando andrò ad istanziarla il codice sarà poco chiaro
// class Product {
//    constructor(_name, _brand, _description, _imageUrl, _price) {
//       this.name = _name
//       this.brand = _brand
//       this.description = _description
//       this.imageUrl = _imageUrl
//       this.price = _price
//    }
// }

/**
 * Fn per modificare/salvare il prodotto
 * ----------------------------------------------------------------------------
 */
const productSave = async (event) => {
   event.preventDefault();

   // creazione dell'oggetto che invieremo come payload (provo ad utilizzare una classe: NO)
   const newProduct = {
      name: document.getElementById("name").value,
      brand: document.getElementById("brand").value,
      description: document.getElementById("description").value,
      imageUrl: document.getElementById("imageUrl").value,
      price: document.getElementById("price").value
   }

   // instanza della classe Product, codice poco chiaro
   // const newProduct = new Product(document.getElementById("name").value, document.getElementById("brand").value, document.getElementById("description").value, document.getElementById("imageUrl").value, document.getElementById("price").value);

   try {
      const resp = await fetch(endpoint, {
         method,
         body: JSON.stringify(newProduct),
         headers: {
            "Authorization": key,
            "Content-Type": "application/json"
         }
      })

      if (resp.ok) {
         const newProductObj = await resp.json();

         if (selectedId) {
            alert(`Il prodotto con id ${newProductObj._id} è stato modificato correttamente`);
         } else {
            alert(`Il prodotto con id ${newProductObj._id} è stato creato con successo`);
         }
         window.location.assign("./index.html");
      } else {
         throw new Error(`Qualcosa è andato storto`);
      }

   } catch (error) {
      alert(error);
   }
}


/**
 * Fn per fare reset dei campi del prodotto
 * ----------------------------------------------------------------------------
 */
const inputReset = () => {
   // chiedo conferma prima di resettare i campi del form
   const hasAccepted = confirm('Cancellare i dati inseriti?');

   // se accetta procediamo all'effettivo reset
   if (hasAccepted) {
      myForm.reset();
      myForm.classList.remove('validated');
   }
}


/**
 * Fn per eliminare il prodotto
 * ----------------------------------------------------------------------------
 */
const productDelete = async () => {

   // chiedo conferma prima di eliminare il prodotto
   const hasAccepted = confirm('Eliminare il prodotto?');

   // se accetta procediamo all'effettiva rimozione
   if (hasAccepted) {
      try {

         const resp = await fetch(endpoint, {
            method: 'DELETE',
            headers: {
               "Authorization": key,
            }
         })
   
         const deletedObj = await resp.json();

         alert("Hai eliminato il prodotto " + deletedObj.name);
         window.location.assign("./index.html");

      } catch (error) {
         console.log(error);
      }
   }
}


/**
 * window.onload()
 * ----------------------------------------------------------------------------
 */
window.onload = async () => {

   if (selectedId) {

      // document.getElementById("subtitle").innerText = " — Modifica appuntamento" // cambia testo sottotitolo se siamo arrivati sulla pagina per modificare una risorsa esistente

      try {

         // passo l'indirizzo munito di id
         const resp = await fetch(endpoint, authorization);
         const productsData = await resp.json()
         const { name, brand, description, imageUrl, price } = productsData

         // inserimento del testo negli input corrispondenti
         document.getElementById("name").value = name;
         document.getElementById("brand").value = brand;
         document.getElementById("description").value = description;
         document.getElementById("imageUrl").value = imageUrl;
         document.getElementById("price").value = price;

         // nascondi bottone reset
         myForm.querySelector('#resetInput').classList.add('d-none');

         // visualizza bottone elimina
         myForm.querySelector('#deleteProduct').classList.remove('d-none');
         myForm.querySelector('#deleteProduct').classList.add('d-block');

         // cambia testo del bottone salva
         myForm.querySelector('#saveProduct').innerText = 'Modifica';
         
      } catch (error) {
         console.log(error)
      }
   }
}