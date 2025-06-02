const cards = document.querySelector(".cards");
const cards_container = document.querySelector(".layout-aventuras");
const nocards = document.querySelector(".nocards");

document.addEventListener("DOMContentLoaded", () => {
    const datos = getData();
    if (datos.length > 0) {
        nocards.style.display = "none";
        cards_container.style.display = "grid";
        datos.forEach(dato => {
            crearCard(dato.fotografia, dato.descripcion, dato.ubicacion);
        });
    }
    else{
        nocards.style.display = "flex";
        cards_container.style.display = "none";
    }
});



function crearCard(img, contenido, ubicacion) {
    const card = document.createElement("div");
    const n = Math.random();
    const categoria = (n)? "Experiencia" : "Viaje";
    card.classList.add("card");
    card.innerHTML = `
        <img class="card-img" src="${img}" alt="Imagen de la aventura">
        <div class="categoria">${categoria}</div>
        <div class="contenido">${contenido}</div>
        <div class="ubicacion">${ubicacion}</div>
    `;
    cards.appendChild(card);
};

function getData(){
    const data = localStorage.getItem("aventuras");
    return data ? JSON.parse(data) : [];
}


const title = document.querySelector('.title');
const opciones = document.querySelector('.nav-list');

let menu = false;

document.querySelector("#burger").addEventListener("click" , function() {
    if(menu === false){ //si el menu esta cerrado, lo abriremos
        opciones.classList.add("activo");
        title.classList.add("activo");
        menu = true;
    }
    else{
        opciones.classList.remove("activo");
        title.classList.remove("activo");
        menu = false;
    }
});