const request_URL = 'http://www.omdbapi.com/?t=';
const api_key = "&apikey=9d0b481b";

const showMovie = (selector, title, released, poster) => {
    selector.innerHTML = "";
    selector.innerHTML += `
        <div class="container w-25">

          <div class="row ">
            <img src="${poster}" alt="Poster">

            <div class="col ">
              <h1>${title}</h1>
              <p>${released} </p>

              <a href="#">En savoir plus</a>
            </div>
          </div>
        </div>
    `
}


const getMovies = async (request_URL_final) => {
  const selector = document.getElementsByClassName("movies")[0];
  console.log(request_URL_final);
  const result = fetch(request_URL_final)
      .then(response => response.json())
      .then(element => {
          const title = element['Title'];
          console.log(title);
          const released = element.Released;
          console.log(released);
          const poster = element.Poster;
          showMovie(selector,title, released, poster);    
      });
};

function validateForm(e) {

    const formSearchValue = document.forms["researchForm"]["fsearch"].value;
    if (!formSearchValue) {
      alert("Veuillez faire une recherche digne de ce nom svp");
      e.preventDefault();
    }

    let request_URL_final = request_URL + formSearchValue + api_key;
    console.log(request_URL_final);
    getMovies(request_URL_final);
}
