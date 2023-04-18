/**
 * API
 * ----------------------------------------------------------------------------
 */
const api = 'https://striveschool-api.herokuapp.com/api/product/';
const key = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0M2JmYWY4MWI0MjAwMTM5YjI4NjIiLCJpYXQiOjE2NzkwNDc2NzUsImV4cCI6MTY4MDI1NzI3NX0.JmR_1o_XdXappfHvo-dwS-Viv59cw5do0ZL-M7sGTBs';
const authorization = {
   headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0M2JmYWY4MWI0MjAwMTM5YjI4NjIiLCJpYXQiOjE2NzkwNDc2NzUsImV4cCI6MTY4MDI1NzI3NX0.JmR_1o_XdXappfHvo-dwS-Viv59cw5do0ZL-M7sGTBs"
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

   // console.log(newProduct) //oggetto modificato/creato

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
         const newProductObj = await resp.json()

         if (selectedId) {
            alert(`Il prodotto con id ${newProductObj._id} è stato modificato correttamente`)
         } else {
            alert(`Il prodotto con id ${newProductObj._id} è stato creato con successo`)
         }
      } else {
         throw new Error(`Qualcosa è andato storto`)
      }

   } catch (error) {
      alert(error)
   }
}




/**
 * window.onload()
 * ----------------------------------------------------------------------------
 */
window.onload = async () => {

   if (selectedId) {

      // document.getElementById("subtitle").innerText = " — Modifica appuntamento" // cambia testo sottotitolo se siamo arrivati sulla pagina per modificare una risorsa esistente
      // document.getElementById("delete-btn").classList.remove("d-none") // abilita il bottone delete solo sulla pagina di modifica

      try {

         // passo l'indirizzo munito di id
         const resp = await fetch(endpoint, authorization);
         const productsData = await resp.json()
         const { name, brand, description, imageUrl, price } = productsData


         // inserimento del testo negli input corrispondenti
         document.getElementById("name").value = name
         document.getElementById("brand").value = brand
         document.getElementById("description").value = description
         document.getElementById("imageUrl").value = imageUrl
         document.getElementById("price").value = price

         // modifica aspetto del bottone submit
         // const sbmtBtn = document.querySelector("button[type='submit']")
         // sbmtBtn.classList.remove("btn-primary")
         // sbmtBtn.classList.add("btn-success")
         // sbmtBtn.innerText = "Modifica"

      } catch (error) {
         console.log(error)
      }
   }
}


const productDelete = async () => {

   // chiediamo conferma all'utente
   const hasAccepted = confirm('Eliminare il prodotto?')

   // se accetta procediamo all'effettiva rimozione
   if (hasAccepted) {
      try {

         // ricorda: basta una fetch con l'endpoint e il metodo corretti per rimuovere già qualcosa, l'await in questo caso non è obbligatorio
         // ma se ci serve un qualche dato di ritorno allora lo useremo per aspettare la resp e per ricavarne il body
         const resp = await fetch(endpoint, { method: "DELETE" })
         const deletedObj = await resp.json()

         alert("Hai eliminato l'appuntamento " + deletedObj.name)
         // se non usassimo un alert qui servirebbe ritardare l'esecuzione del metodo assign di window, 
         // ma siccome alert è "bloccante" in questo specifico caso non occorre
         window.location.assign("./index.html")

      } catch (error) {
         console.log(error)
      }
   }
}