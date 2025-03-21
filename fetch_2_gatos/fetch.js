let img = document.querySelector('#img-gato');
let btn = document.querySelector("#btn-mae");
let msj = document.querySelector(".mensaje");

fetch('https://api.thecatapi.com/v1/images/search')
.then(response => response.json())  // Convertimos la respuesta a JSON
.then(data => {
    console.log(data);
    img.src = data[0].url;  // La API devuelve un array, accedemos a la URL de la imagen
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log("Terminado");
});

btn.addEventListener('click', () => {
    msj.style.display = "flex";

    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())  // Convertimos la respuesta a JSON
    .then(data => {
        console.log(data);
        img.src = data[0].url;  // Accedemos a la URL de la imagen correctamente
        msj.style.display = "none";
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Terminado");
    });
});
