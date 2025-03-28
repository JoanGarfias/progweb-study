const apiKey = "f1c04bc99f954a27ab550ce9f8607cd9";
const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + apiKey;

const contenedor = document.querySelector(".rowp");
const container = document.querySelector(".postp");

function crearPost(titulo, autor, descripcion, fecha, imagen, url) {
    const div1 = document.createElement("div");
    div1.className = "col-md-6 mb-4"; // Divide en dos columnas en pantallas medianas

    const div2 = document.createElement("div");
    div2.className = "card flex-md-row mb-4 box-shadow h-md-250";

    const div3 = document.createElement("div");
    div3.className = "card-body d-flex flex-column align-items-start";

    const img = document.createElement("img");
    img.className = "card-img-right flex-auto d-none d-md-block";
    img.src = imagen;
    img.alt = "Imagen del artículo";
    img.style.width = "150px"; // Tamaño controlado para evitar desbordes

    const h3 = document.createElement("h3");
    h3.className = "mb-0";

    const e_autor = document.createElement("strong");
    e_autor.className = "d-inline-block mb-2 text-primary";
    e_autor.innerHTML = autor || "Autor desconocido";

    const e_titulo = document.createElement("a");
    e_titulo.className = "text-dark";
    e_titulo.href = url;
    e_titulo.target = "_blank";
    e_titulo.innerHTML = titulo;

    const e_fecha = document.createElement("div");
    e_fecha.className = "mb-1 text-muted";
    e_fecha.innerHTML = new Date(fecha).toLocaleDateString();

    const e_descripcion = document.createElement("p");
    e_descripcion.className = "card-text mb-auto";
    e_descripcion.innerHTML = descripcion || "Sin descripción disponible.";

    div3.appendChild(e_autor);
    h3.appendChild(e_titulo);
    div3.appendChild(h3);
    div3.appendChild(e_fecha);
    div3.appendChild(e_descripcion);

    div2.appendChild(div3);
    div2.appendChild(img);
    div1.appendChild(div2);

    contenedor.appendChild(div1);
    container.appendChild(contenedor);
}

document.addEventListener("DOMContentLoaded", () => {
    fetch(url)
        .then(objeto => objeto.json())  
        .then(datos => {
            datos.articles.forEach(d => {
                crearPost(d.title, d.author, d.description, d.publishedAt, d.urlToImage, d.url);
            });
        })
        .catch(error => console.log("Error al obtener los datos:", error))
        .finally(() => console.log("Carga de noticias completada"));
});
