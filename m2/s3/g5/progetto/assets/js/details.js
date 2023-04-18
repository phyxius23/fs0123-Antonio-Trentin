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

console.log("ID: ", selectedId);


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
      const appointmentData = await resp.json()

      // destrutturazione dell'oggetto in variabili contenenti valori delle sue proprietà
      const { _id, name, description, price, time, createdAt, updatedAt } = appointmentData

      container.innerHTML = `
              <h1 class="fw-bold">${name}</h1>
              <p class="font-monospace">${new Date(time).toLocaleString("it-IT")}</p>
              <p>${price}€</p>
              <h6 class="bg-light py-3 ps-2">Server Details</h6>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item ps-2"><strong>id:</strong> ${_id}</li>
                  <li class="list-group-item ps-2"><strong>createdAt:</strong> ${createdAt}</li>
                  <li class="list-group-item ps-2"><strong>updatedAt:</strong> ${updatedAt}</li>
              </ul>
              <button class="btn btn-success mt-3" onclick="handleClick()">Modifica appuntamento</button>
              `
   }
   catch (err) {
      console.log(err)
   }
}


