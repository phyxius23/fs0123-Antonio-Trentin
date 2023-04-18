/**
 * Your API key: vfub8YmgyfPuZtW4MX3DRKKvTzIXYwH7uvp3JxnHCIWpdrKyWE3NM5cN
 * ----------------------------------------------------------------------------
 */

const album = document.querySelector('.album .row');

const URL = 'https://api.pexels.com/v1/search?query=people';

const fetchData = async () => {
   console.log("test");

   const resp = await fetch(URL, {
      method: "GET",
      headers: {
         "Content-type": "application/json;charset=UTF-8",
         "Authorization": "vfub8YmgyfPuZtW4MX3DRKKvTzIXYwH7uvp3JxnHCIWpdrKyWE3NM5cN"
      }
   })

   const fetchedData = await resp.json();
   console.log(fetchedData)

   fetchedData.photos.forEach(element => {    
      album.appendChild(createCard(element));
   });

}

window.onload = () => {
   fetchData();

   console.log("last of onload");
}

/**
 * Fn per creare le singole card
 * ----------------------------------------------------------------------------
 */
const createCard = () => {

   const column = document.createElement('div');
   column.classList.add('col-md-4');

   column.innerHTML = `
      <div class="card mb-4 shadow-sm">
         <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
               Thumbnail
            </text>
         </svg>
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

   return column;
}