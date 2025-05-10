let lista = document.getElementById('datos');
let fragmento = document.createDocumentFragment();
const consultaBtn = document.querySelector('#consulta');
const altaBtn = document.querySelector('#alta');
const eliminarBtn = document.querySelector("#borrar");
const modificarBtn = document.querySelector('#modificar');

consultaBtn.addEventListener('click', () => {
    fetch('http://localhost:3000/carros')
    .then(res => res.json())
    .then(res => {
        console.log(res);
        drawTabla(res);
    })
});

const drawTabla = e => {
    lista.innerHTML = '';
    const tabla = 
    `
    <table class="table">
        <thead>
            <th scope="col">id.</th>
            <th scope="col">Modelo</th>
            <th scope="col">Año</th>
        </thead>
        <tbody id="t">
        </tbody>
    </table>`;

    lista.insertAdjacentHTML('beforeEnd', tabla);
    let elemento = document.getElementById('t');
    e.forEach(element => {
        const linea = 
        `
        <tr>
            <th scope="row">${element.id}</th>
            <td>${element.modelo}</td>
            <td>${element.año}</td>
        </tr>
        `;
        elemento.insertAdjacentHTML('beforeEnd', linea);
    })
}

altaBtn.addEventListener('click', () => {
    let mod = prompt("Introduzca un modelo del carro: ");
    if(! (mod == null || mod == "")){
        let año = prompt("Introduzca año del modelo: ");
        if(! (año == null || año == "")){
            fetch('http://localhost:3000/carros',{
                method: "POST",
                header: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({modelo: mod, año: año})
            })
            .then(res => res.text())
            .then(res => {
                console.log(res)
            })
        }
        else{

        }
    }else{

    }
});

eliminarBtn.addEventListener('click', () =>{
    const id = prompt("Introduzca id a eliminar: ");
    if(! (id == null || id == "")){
        fetch(`http://localhost:3000/carros/${id}`, {
            method: "DELETE"
        })
        .then(res => res.text())
        .then(res => {
            console.log(res)
        })
        .catch(res => {
            alert(`El ID es ${id} incorrecto`);
        })
    }
})


/*Cuando llamas a una función asíncrona en JavaScript,
esta se ejecuta en segundo plano, lo que permite que el 
resto del código siga corriendo sin esperar su resultado. 
Sin embargo, cuando usas await, le dices a JavaScript que 
detenga la ejecución en esa línea hasta que la operación 
asíncrona termine y devuelva un resultado.
*/

modificarBtn.addEventListener("click", async () => {
    const d = prompt("Introduzca id a modificar: ");
    if (!d || d.trim() === "") return;

    const URL = `http://localhost:3000/carros/${d}`;
    let mod = prompt("Introduzca el modelo del carro:");
    let año = prompt("Introduzca el año del modelo:");

    try {
        if (!mod || !mod.trim() || !año || !año.trim()) {
            const res = await fetch(URL);

            if (!res.ok) {
                throw new Error(`Error al obtener el carro: ${res.status} ${res.statusText}`);
            }

            const data = await res.json();

            if (!mod || !mod.trim()) mod = data.modelo;
            if (!año || !año.trim()) año = data.año;
        }

        año = parseInt(año, 10);
        if (isNaN(año)) throw new Error("El año ingresado no es válido");

        const response = await fetch(URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ modelo: mod, año: año }),
        });

        if (!response.ok) {
            throw new Error(`Error al actualizar: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        console.log("Carro actualizado con éxito:", result);
    } catch (error) {
        console.error("Error:", error.message);
    }
});
