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
 * HOMEPAGE
 * ----------------------------------------------------------------------------
 */

// qui andrò ad iniettare le mie card
const products = document.querySelector('#products');


/**
 * Fn per creare le singole card
 * ----------------------------------------------------------------------------
 */
const createCard = async (elementi) => {

   if (elementi) {

      products.innerHTML = '';

      for (const card of elementi) {

         const column = document.createElement('div');
         column.className = 'col-12 col-md-6 col-lg-4';

         column.innerHTML = `
            <div class="card">
               <img src="${card.imageUrl}" class="card-img-top img-fluid p-3" alt="${card.description}">
               <div class="card-body">
                  <h5 class="card-title mt-auto">${card.name}</h5>
                  <p class="card-text">${card.description}</p>
                  <div class="d-flex justify-content-between">
                     <!-- <button type="button" class="btn btn-primary">1</button>
                     <button type="button" class="btn btn-primary">2</button> -->
                     <a href="./details.html?id=${card._id}" class="btn btn-success">Scopri di più</a>
                     <a href="./backoffice.html?id=${card._id}" class="btn btn-outline-success">Edit</a>
                  </div>
               </div>
            </div>
         `;

         products.appendChild(column);
      }
   }
}


/**
 * Fn che mi recupera i dati via API
 * ----------------------------------------------------------------------------
 */
const fetchData = async (type) => {

   try {
      const resp = await fetch(api, authorization);

      // gestione degli errori
      if (resp.status === 400) throw new Error("Errore nella richiesta (Status: 400)")
      if (resp.status === 404) throw new Error("Non abbiamo trovato la risorsa (Status: 404)")
      if (!resp.ok) throw new Error("Errore nella fetch")

      const body = await resp.json();
      // console.log(body)

      createCard(body);
   } catch (error) {
      console.log(error);
   }
}



const handleClick = () => {

   // il metodo .assign() sposta l'utente su un'altra pagina, come fosse un href su un <a>
   window.location.assign("./backoffice.html?id=" + selectedId)
}


window.onload = () => {

   fetchData();

}