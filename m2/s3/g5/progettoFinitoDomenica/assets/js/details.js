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
 * DETTAGLIO
 * ----------------------------------------------------------------------------
 */
const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get("id");

// inserisco anno copyright nel footer
let currentYear = new Date();
document.querySelector('footer p').innerText = `© ${currentYear.getFullYear()} Crudazon, Inc.`;


/**
 * Fn che tramite il metodo .assign() ci sposta un'altra pagina (anche senza utilizzare l'elemento a)
 * ----------------------------------------------------------------------------
 */
const handleClick = () => {
   window.location.assign("./backoffice.html?id=" + selectedId)
}


/**
 * window.onload()
 * ----------------------------------------------------------------------------
 */
window.onload = async () => {
   const container = document.getElementById("details-container")

   try {
      console.log(api + "?id=" + selectedId)
      const resp = await fetch(api + selectedId, authorization)
      const productFields = await resp.json()

      // destrutturazione dell'oggetto in variabili contenenti valori delle sue proprietà
      const { _id, name, brand, description, imageUrl, price } = productFields;

      container.innerHTML = `
         <div class="d-flex flex-column align-items-center shadow">
            <div class="header bg-light rounded-top w-100 py-3">
               <h3 class="fw-bold text-center mb-0">Dettagli del Prodotto</h3>
            </div>
            <div class="main d-flex justify-content-center align-items-center my-4 mx-2">
               <div class="col-6 p-3">
                  <img src="${imageUrl}" class="img-fluid" alt="">
               </div>
               <div class="col-6 p-3">
                  <h1>${name}</h1>
                  <h2 class="">${brand}</h2>
                  <p>${description}</p>
                  <p>$ ${price}</p>
               </div>
            </div>
            <div class="footer bg-light rounded-bottom w-100 py-4 text-center">
               <button class="btn btn-primary rounded-pill" onclick="handleClick()">Modifica prodotto</button>
            </div>
         </div>
      `
   }
   catch (err) {
      console.log(err)
   }
}