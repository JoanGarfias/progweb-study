const CREAR_PRODUCTOS = 998;
const CARGAR_PRODUCTO = 999;

var productos;
var request = new XMLHttpRequest();
let peticion;

request.open('GET', '../storage/datos.json', true);

request.onreadystatechange = function() {
    if (request.readyState === 4) {
        if (request.status == 200) {
            productos = JSON.parse(request.responseText);
            switch(peticion){
                case CREAR_PRODUCTOS:
                    crearProductos();
                    break;
                case CARGAR_PRODUCTO:
                    buscarPorId();
                    break;
            }
        } else {
            console.log("Ha ocurrido un error al enviar la peticion");
            estado = false;
        }
    }
}