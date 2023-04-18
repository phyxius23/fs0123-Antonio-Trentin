/**
 * Your API key: vfub8YmgyfPuZtW4MX3DRKKvTzIXYwH7uvp3JxnHCIWpdrKyWE3NM5cN
 * ----------------------------------------------------------------------------
 */

const BASE_URL = "https://api.pexels.com/v1/search?query=";
const FETCH_PARAM = {
   headers: {
      Authorization: "vfub8YmgyfPuZtW4MX3DRKKvTzIXYwH7uvp3JxnHCIWpdrKyWE3NM5cN",
      "Content-Type": "application/json"
   }
};

// Qesti sono i query param, quelli che vanno dopo il ? nel url, anche qui solo se vi servono, io ho creato l'oggetto per averceli per default
const SEARCH_PARAM = {
   query: "nature",
   size: "small",
   per_page: 9
};

//"https://api.pexels.com/v1/search?query=nature&per_page=1"
//"https://api.pexels.com/v1/photos/2014422"
//"https://api.pexels.com/v1/search?query=people"
//"https://api.pexels.com/v1/collections/featured?per_page=1

const resp = async (url, params) => {
   try {
      const response = await fetch(url, params);
      const data = await response.json();

      if (!response.ok) {
         throw new Error("Network response was not OK");
      }
      return data;
   } catch (error) {
      console.log(error);
   }
};

// const faQualcosa = async (url) => {
//    const data = await resp(url, FETCH_PARAM);
//    return data;
// };

// new URLSearchParams() è quella che ha usato lui sta mattina per riprendersi i parametri dall url del browser, si può usare anche al contrario => cercare info dettagliate fetchData

const url = `${BASE_URL}search?${new URLSearchParams(SEARCH_PARAM)}`;

//qui invocate la funzione che fa la fetch
// const dati = faQualcosa(url);



// ----------------------------------------------------------------------------
const album = document.querySelector('.album .row');



/**
 * Fn per creare le singole card
 * ----------------------------------------------------------------------------
 */
const createCard = (elementi) => {

   console.log(elementi)

   album.innerHTML = '';

   for (const elemento of (elementi.photos)) {
      
   // }

   // elementi.photos.forEach(elemento => {

      const column = document.createElement('div');
      column.classList.add('col-md-4');

      column.innerHTML = `
      <div class="card mb-4 shadow-sm">
         <img src="${elemento.url}" class="card-img-top" alt="">
         <div class="card-body">
            <h5 class="card-title">Lorem Ipsum</h5>
            <p class="card-text">
               This is a wider card with supporting text below as a natural
               lead-in to additional content. This content is a little bit
               longer.
            </p>
            <div class="d-flex justify-content-between align-items-center">
               <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">
                     View
                  </button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">
                     Edit
                  </button>
               </div>
               <small class="text-muted">9 mins</small>
            </div>
         </div>
      </div>
   `;

      album.appendChild(column);
   }

}



const btn = document.querySelector('#btnLoadPhoto');
console.log(btn)

window.onload = async () => {

   // console.log(() => {resp()})
   // fetchData();

   btn.onclick = () => {
      resp(BASE_URL, FETCH_PARAM)
      // console.log(fetchData())
      console.log('click funzionante')
      // createCard(dati);
   }
}
