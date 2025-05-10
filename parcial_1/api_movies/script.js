let catalogo = document.querySelector(".catalogo");
let buscarBtn = document.querySelector(".btnBuscar");
let movieInput = document.querySelector(".movieInput");
console.log(movieInput);

const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTI2NmNiOTk2MWQ2ZWM2OWQ0ZTgwZjVhNzRmY2NjMiIsIm5iZiI6MTc0MzMxNTAxNi41MzEwMDAxLCJzdWIiOiI2N2U4ZTA0ODRmNzQxYzc1YmJjNjkxNTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Ck84u2Bxt133g5zjo7SPuAFxi9ppnQYmyoKRaWWOILs'
  }
};


function crearPelicula(id, titulo, fecha, descripcion, imgurl){
    let card = document.createElement("div");
    card.className = "card";
    card.style.width = "18rem";
    let img = document.createElement("img");
    img.src = imgurl;
    img.style.width = "200px";
    img.style.height = "280px";
    img.className = "card-img-top img-fluid mx-auto d-block";
    let cardBody = document.createElement("div");
    cardBody.className = "card";
    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = titulo;
    let cardDate = document.createElement("p");
    cardDate.className = "card-text text-truncate";
    cardDate.textContent = fecha;

    let cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = descripcion;

    let btn = document.createElement("a");
    btn.className = "btn btn-primary";
    btn.href = `detalles.html?id=${id}`;
    btn.textContent = "Ver más";

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDate);
    cardBody.appendChild(cardText);
    cardBody.appendChild(btn);
    card.appendChild(img);
    card.appendChild(cardBody);
    catalogo.appendChild(card);
}

fetch(url, options)
  .then(res => res.json())
  .then(json => {
    console.log(json);
    json.results.forEach(e => {
        const urlImg = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/" + e.poster_path;
        crearPelicula(e.id, e.title, e.release_date, e.overview, urlImg);
        //console.log(e);
    });
  })
  .catch(err => console.error(err));


buscarBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let idBuscar = movieInput.value;
    console.log("El ID a buscar es: " + idBuscar);
    const url = `https://api.themoviedb.org/3/movie/${idBuscar}?language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTI2NmNiOTk2MWQ2ZWM2OWQ0ZTgwZjVhNzRmY2NjMiIsIm5iZiI6MTc0MzMxNTAxNi41MzEwMDAxLCJzdWIiOiI2N2U4ZTA0ODRmNzQxYzc1YmJjNjkxNTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Ck84u2Bxt133g5zjo7SPuAFxi9ppnQYmyoKRaWWOILs'
      }
    };
    fetch(url, options)
    .then(data => data.json())
    .then(res => {
        console.log(res);
    })
});