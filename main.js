const request_URL = 'http://www.omdbapi.com/?s=';
const api_key = "&apikey=9d0b481b";
const selector = document.getElementsByClassName("row movies")[0];
const selector_movie = document.getElementsByClassName("ok")[0];
const showMovie = (selector, title, released, poster) => {
    const detail_url =`http://www.omdbapi.com/?t=${title}&apikey=9d0b481b`;
    selector.innerHTML += `

          <div class="row border pt-2 pb-2 rounded mb-3 h-10 w-75">
            <div class="col-2">
              <img src="${poster}" height="150px" alt="Poster">
            </div>

            <div class="col-9">
              <h2>${title}</h2>
              <p>${released}</p>

              <a href="#" onclick="readMore(${detail_url})">En savoir plus</a>

            </div>
          </div>

    `
}

const showMovieDetails = (selector_movie, title, released, plot,poster) => {
    selector_movie.innerHTML = "";
    selector_movie.innerHTML += `

          <div class="row border pt-2 pb-2 rounded mb-3 h-10">
            <div class="col-3">
              <img src="${poster}" height="300px" alt="Poster">
            </div>

              <div class="col-1"></div>

            <div class="col-8">
              <h2>${title}</h2>
              <p>${released}</p>
              <p>${plot}</p>
              <a href="javascript:getMovies(validateForm())">Retour</a>


            </div>
          </div>

    `
}

const getMovies = async (request_URL_final) => {
  const selector = document.getElementsByClassName("row movies")[0];
  console.log(request_URL_final);
  const result = fetch(request_URL_final)
      .then(response => response.json())
      .then(element => {
        let search_list = element.Search
        search_list.forEach(elementa => {
          const title = elementa['Title'];
          console.log(title);
          const released = elementa.Year;
          console.log(released);
          const poster = elementa.Poster;
          showMovie(selector,title, released, poster);
        });
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
    return request_URL_final;
}

let w;
function PopupCentrer(page, largeur, hauteur, options) {
  var top=(screen.height-hauteur)/2;
  var left=(screen.width-largeur)/2;
  w=window.open(page,"","top="+top+",left="+left+",width="+largeur+",height="+hauteur+","+options);
}

function Close() {
  if (w.document) {
    w.close();
  }
}

function readMore(detail_url,e){
  const selector_movie = document.getElementsByClassName("row movies")[0];
  console.log(detail_url);
  const result = fetch(detail_url)
      .then(response => response.json())
      .then(element => {
          const title = element['Title'];
          console.log(title);
          const released = element.Released;
          console.log(released);
          const poster = element.Poster;
          const plot = element.Plot;
          showMovieDetails(selector_movie,title, released, plot, poster);
      });
};
