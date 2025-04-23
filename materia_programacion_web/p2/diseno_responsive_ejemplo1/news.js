const apiKey = "f1c04bc99f954a27ab550ce9f8607cd9";
const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + apiKey;

const divcards = document.querySelector(".news-cards");

function crearPost(img, title, content){
    const div = document.createElement("div");
    div.innerHTML = 
    `
    <img class="" src="${img}">
    <h3 class="">${title}</h3>
    <p class="">${content}</p>
    <a href="">Leer más <i class="fas fa-angle-double-right"></i></a>
    `;
    divcards.appendChild(div);
}

document.addEventListener("DOMContentLoaded", () => {
    fetch(url)
        .then(objeto => objeto.json())  
        .then(datos => {
            datos.articles.forEach(d => {
                crearPost(d.urlToImage, d.title, d.author, d.description);
            });
        })
        .catch(error => console.log("Error al obtener los datos:", error))
        .finally(() => console.log("Carga de noticias completada"));
});