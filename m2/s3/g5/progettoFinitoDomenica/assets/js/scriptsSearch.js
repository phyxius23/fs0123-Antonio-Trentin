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

// inserisco anno copyright nel footer
let currentYear = new Date();
document.querySelector('footer p').innerText = `© ${currentYear.getFullYear()} Crudazon, Inc.`;


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
            <div class="card h-100 shadow">
               <img src="${card.imageUrl}" class="card-img-top img-fluid p-3" alt="${card.description}">
               <div class="card-body">
                  <h5 class="card-title">${card.name}</h5>
                  <p class="card-text">${card.description}</p>
                  <div class="d-flex justify-content-between mt-auto">
                     <a href="./backoffice.html?id=${card._id}" class="btn btn-outline-primary">Edit</a>
                     <a href="./details.html?id=${card._id}" class="btn btn-primary">Scopri di più</a>
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


/**
 * Fn che avvia una ricerca tra i prodotti
 * ----------------------------------------------------------------------------
 */
const formSearch = (event) => {
   event.preventDefault;

   productSearch = document.querySelector('#formSearch input').value;
   fetchData(productSearch);
   document.querySelector('#formSearch').reset();

   // return productSearch
}

const myFormSearch = document.querySelector('#formSearch button')
/**
 * window.onload()
 * ----------------------------------------------------------------------------
 */
window.onload = () => {

   myFormSearch.onclick = () => formSearch();
   fetchData();

}