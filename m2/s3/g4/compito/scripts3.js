/**
 * Your API key: vfub8YmgyfPuZtW4MX3DRKKvTzIXYwH7uvp3JxnHCIWpdrKyWE3NM5cN
 * ----------------------------------------------------------------------------
 */

// vedi pagina details.html per spiegazione delle prossime due righe
// const URLParams = new URLSearchParams(window.location.search)
// console.log(URLParams)
// const selectedId = URLParams.get("id")
// console.log(selectedId)
// const api = 'https://api.pexels.com/v1/search?query=nature'


// 
const album = document.querySelector('.album .row');

// parametri necessari per recuperare i dati json
const api = 'https://api.pexels.com/v1/search?query=';
const key = 'vfub8YmgyfPuZtW4MX3DRKKvTzIXYwH7uvp3JxnHCIWpdrKyWE3NM5cN';
const authorization = {
   headers: {
      "Authorization": "vfub8YmgyfPuZtW4MX3DRKKvTzIXYwH7uvp3JxnHCIWpdrKyWE3NM5cN"
   }
}
let typePhoto = 'nature';
// const searchParams = {
//    query: 'nature',
//    size: 'small',
//    per_page: 9
// }

const fetchData = async () => {
   console.log("test fetchData");

   try {
      const resp = await fetch(api+typePhoto, authorization);
      const body = await resp.json();
      
      createCard(body);
   } catch (error) {
      console.log(error);
   }


   // const photos = JSON.parse(JSON.stringify(body.photos));

   // console.log(body);

   // return body;
   // createCard(photos);
}


// console.log(fetchedData)

// fetchedData.photos.forEach(element => {    
//    album.appendChild(replacePhoto(element));
// });




// const replacePhoto = (element) => {
//    const photo = document.createElement('img');
//    album.querySelectorAll('svg').remove;

//    photo.setAttribute('url', element.url);

//    return photo;
// }

/**
 * Fn per creare le singole card
 * ----------------------------------------------------------------------------
 */
const createCard = async (elementi) => {

   if(elementi) {


   console.log(elementi)

   album.innerHTML = '';

   elementi.forEach(elemento => {

      const column = document.createElement('div');
      column.classList.add('col-md-4');
      column.innerText = elemento;

   //    column.innerHTML = `
   //    <div class="card mb-4 shadow-sm">
   //       <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
   //          <title>Placeholder</title>
   //          <rect width="100%" height="100%" fill="#55595c" />
   //          <text x="50%" y="50%" fill="#eceeef" dy=".3em">
   //             Thumbnail de Toni!
   //          </text>
   //       </svg>
   //       <div class="card-body">
   //          <h5 class="card-title">Lorem Ipsum</h5>
   //          <p class="card-text">
   //             This is a wider card with supporting text below as a natural
   //             lead-in to additional content. This content is a little bit
   //             longer.
   //          </p>
   //          <div class="d-flex justify-content-between align-items-center">
   //             <div class="btn-group">
   //                <button type="button" class="btn btn-sm btn-outline-secondary">
   //                   View
   //                </button>
   //                <button type="button" class="btn btn-sm btn-outline-secondary">
   //                   Edit
   //                </button>
   //             </div>
   //             <small class="text-muted">9 mins</small>
   //          </div>
   //       </div>
   //    </div>
   // `;

      album.appendChild(column);
   })
}

}

window.onload = () => {
   console.log('test onload')

   const btn = document.querySelector('#btnLoadPhoto');

   btn.onclick = () => {
      fetchData()
   }

}

// window.onload = async () => {

//    const btn = document.querySelector('#btnLoadPhoto');
//    console.log(btn)

//    fetchData();

//    btn.onclick = () => {
//       // console.log(fetchData())
//       console.log('click funzionante')
//       createCard();
//    }
// }



// const BASE_URL = "https://api.pexels.com/v1/";
// const FETCH_PARAM = {
//   method: "GET", // *GET, POST, PUT, DELETE, etc.   // di default è get quindi basta che lo impostiate quando vi serve
//   headers: {
//     Authorization: "Bearer dasfasfalskfjlakjsopewr798f9f7", //qua ci va l'autorizazione, di solito con Bearer se è come oggi togliete Bearer e lasciate solo la stringa
//     "Content-Type": "application/json" // dovrebbe andare bene application/json
//   }
//   //body: JSON.stringify(data), // body data type must match "Content-Type" header   , lo ho lascito per traccia ma lo create se e quando vi serve
// };

// // Qesti sono i query param, quelli che vanno dopo il ? nel url, anche qui solo se vi servono, io ho creato l'oggetto per averceli per default
// const SEARCH_PARAM = {
//   query: "nature",
//   size: "small",
//   per_page: 9
// };

// //"https://api.pexels.com/v1/search?query=nature&per_page=1"
// //"https://api.pexels.com/v1/photos/2014422"
// //"https://api.pexels.com/v1/search?query=people"
// //"https://api.pexels.com/v1/collections/featured?per_page=1

// const resp = async (url, params) => {
//   try {
//     const response = await fetch(url, params);
//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error("Network response was not OK");
//     }
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// /* da qui esempi su come si usa*/
// // primo modo per usarla

//resp(url,FETCH_PARAM).then()  un modo è usarla con then()

// secondo modo è dentro una funzione async
/*
const faQualcosa = async() =>{
    const data = await resp(url, FETCH_PARAM)
    return data
}
*/

// const faQualcosa = async (url) => {
//   const data = await resp(url, FETCH_PARAM);
//   return data;
// };
// // Per cambiare il metodo basta che aggiungete un parametro FETCH_PARAM
// FETCH_PARAM.method = "POST"; // idem per gli altri

// //per cambiare la query idem su SEARCH_PARAM
// SEARCH_PARAM.query = nature;
// // o per aggiungere
// SEARCH_PARAM.nuovo_parametro = "ciao";
// //praticamente manipolate i parametri degli oggetti prima di invocare la funzione
// //SEARCH_PARAM potete anche ometterlo e costruirvene uno al volo quando vi serve

// //qui vi costruite l'url e dipende dall'endpoint che volete chiamare usate l'interpolazione
// // new URLSearchParams() è quella che ha usato lui sta mattina per riprendersi i parametri dall url del browser, si può usare anche al contrario
// // BASE_URL è definito sopra ed è la radice dell' endpoint, il punto di partenza. search è una stringa, dipende sempre da quello che dovete fare. Il ? invece è obbilcatorio
// // prima dei parametri
// const url = `${BASE_URL}search?${new URLSearchParams(SEARCH_PARAM)}`;
// //qui invocate la funzione che fa la fetch
// const dati = faQualcosa(url);
// // da qui in poi avete i dati e potete fare quel che vi pare