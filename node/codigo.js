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

modificarBtn.addEventListener('click', async () => {
    const d = prompt("Introduzca id a modificar: ");
    if (!d || d.trim() === "") return;

    const URL = `http://localhost:3000/carros/${d}`;
    let mod = prompt("Introduzca el modelo del carro");
    let año = prompt("Introduzca el año del modelo: ");

    try {
        if (!mod || mod.trim() === "" || !año || año.trim() === "") {
            const res = await fetch(URL);
            const data = await res.json();
            
            if (!mod || mod.trim() === "") {
                mod = data.modelo;
            }
            if (!año || año.trim() === "") {
                año = data.año;
            }
        }

        const response = await fetch(URL, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ modelo: mod, año: año })
        });

        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error("Error al actualizar:", error);
    }
});
