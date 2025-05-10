let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let escuela = document.querySelector("#escuela");
let edad = document.querySelector("#edad");
let profesion = document.querySelector("#profesion");

function saveData(){
    
    let json = {
    "nombre": nombre.value,
    "apellido": apellido.value,
    "escuela": escuela.value,
    "edad": edad.value,
    "profesion": profesion.value
    };

    let datos = JSON.stringify(json);
    localStorage.setItem("data", datos);
}
    
function loadData(){
    let datos_crudos = localStorage.getItem("data");
    let datos = JSON.parse(datos_crudos);

    if(datos != null){
        document.querySelector("#nombre").value = datos.nombre;
        document.querySelector("#apellido").value = datos.apellido;
        document.querySelector("#escuela").value = datos.escuela;
        document.querySelector("#edad").value = datos.edad;
        document.querySelector("#profesion").value = datos.profesion;
    }
}
    
document.querySelector("#guardar").addEventListener("click", (e) =>{
    saveData();
});

document.querySelector("#cargar").addEventListener("click", (e) =>{
    e.preventDefault();
    loadData();
});
