let lista = document.querySelector(".listado");
let con = new XMLHttpRequest();
let btnBuscar = document.querySelector(".btnBuscar");

btnBuscar.addEventListener("click", (e) =>{
    e.preventDefault();
    const buscar = document.querySelector(".pokemonInput").value;
    const url = `https://pokeapi.co/api/v2/pokemon/${buscar}`

    fetch(url)
    .then(res => res.json())
    .then(data =>{
        crearPokemon(data.name, data.id, data.types);
    })
})

btnBuscar.addEventListener("click", (e) => {
    e.preventDefault();
    const buscar = document.querySelector(".pokemonInput").value.toLowerCase(); // por si escriben con mayúscula
    const url = `https://pokeapi.co/api/v2/pokemon/${buscar}`;

    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error("Pokémon no encontrado");
            return res.json();
        })
        .then(data => {
            crearPokemon(data.name, data.id, data.types, data.sprites.front_default);
        })
        .catch(err => {
            console.error(err);
            document.querySelector(".poke").innerHTML = `
                <div class="alert alert-danger text-center">Pokémon no encontrado</div>
            `;
        });
});

function crearPokemon(nombre, id, tipos, imagen) {
    const contenedor = document.querySelector(".poke");
    const tiposHTML = tipos.map(tipo => `<p class="card-text text-center">${tipo.type.name}</p>`).join("");

    contenedor.innerHTML = `
        <div class="card mx-auto" style="width: 18rem;">
            <h3 class="h3 text-center mt-2 text-capitalize">${nombre}</h3>
            <img src="${imagen}" class="card-img-top" alt="${nombre}">
            <div class="card-body">
                <h5 class="card-title text-center">N° ${id}</h5>
                ${tiposHTML}
            </div>
        </div>
    `;
}