/*Esta función está en la documentación de mdn web docs 
https://developer.mozilla.org/en-US/docs/Web/API/Location/hash
*/
let url;
let idProducto;

document.addEventListener("DOMContentLoaded", (event) =>{
    // Obtiene todo lo que está después del #
    url = window.location.hash;

    // Remueve el símbolo # si está presente
    idProducto = url ? url.substring(1) : null;
    peticion = CARGAR_PRODUCTO;
    request.send();
});

function buscarPorId(){
    let producto = productos.datos.find(p => p.id == idProducto);
    crearProductoIndividual(producto);
}