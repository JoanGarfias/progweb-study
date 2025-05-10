let img = document.querySelector('#img-gato');
let btn = document.querySelector("#btn-mae");
let msj = document.querySelector(".mensaje");
let contenedor = document.querySelector('.contenedor');

const url = 'https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c2729f1da6msh4b49bd69a645359p14a4b3jsn71a99fc93c09',
		'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
	}
};

const url_search = 'https://online-movie-database.p.rapidapi.com/auto-complete?q=';

fetch(url,options)
.then(objeto => objeto.json())  // Convertimos la respuesta a JSON
.then(datos => {
    console.log(datos);
    const listaPelis = datos.d;
    listaPelis.map((e) => {
        console.log(e);
        const titulo = e.l;
        const imagen = e.i.imageUrl;
        const elenco = e.s;

        const poster = 
        `
        <div class="poster">
            <img src="${imagen}" />
            <h2>${titulo}</h2>
            <small>${elenco}</small>
        </div>
        `;
        contenedor.innerHTML += poster;
    })
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log("Terminado");
});

btn.addEventListener('click', () => {
    msj.style.display = "flex";
    contenedor.innerHTML = '';

    let url_buscar = url_search + document.querySelector("#Buscador").value;

    fetch(url_buscar,options)
    .then(objeto => objeto.json())  // Convertimos la respuesta a JSON
    .then(datos => {

        console.log(datos);
        const listaPelis = datos.d;
        listaPelis.map((e) => {
            console.log(e);
            const titulo = e.l;
            const imagen = e.i.imageUrl;
            const elenco = e.s;
    
            const poster = 
            `
            <div class="poster">
                <img src="${imagen}" />
                <h2>${titulo}</h2>
                <small>${elenco}</small>
            </div>
            `;
            document.querySelector('.contenedor').innerHTML += poster;
        })
        msj.style.display = "none";
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Terminado");
    });

});
