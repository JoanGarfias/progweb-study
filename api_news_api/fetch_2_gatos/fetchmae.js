let img = document.querySelector('#img-gato');
let btn = document.querySelector("#btn-mae");
let msj = document.querySelector(".mensaje");
let contenedor = document.querySelector(".contenedor");

fetch('https://api.thecatapi.com/v1/images/search?limit=10')
.then(response => response.json())  // Convertimos la respuesta a JSON
.then(data => {
    console.log(data);
    msj.style.display = "none";

    data.forEach(d => {
        let img = document.createElement("img");
        img.src = d.url;
        img.width = 150;
        img.height = 150;
        contenedor.appendChild(img);
    });

})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log("Terminado");
});

btn.addEventListener('click', () => {
    msj.style.display = "flex";

    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    .then(response => response.json())  // Convertimos la respuesta a JSON
    .then(data => {
        console.log(data);
        msj.style.display = "none";
        contenedor.innerHTML = "";
        data.forEach(d => {
            let img = document.createElement("img");
            img.src = d.url;
            img.width = 150;
            img.height = 150;
            contenedor.appendChild(img);
        });

    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Terminado");
    });
});
