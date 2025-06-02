var results;

window.onload = function(){
    results = document.querySelector("#results");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(geolocationSucess, geolocationFailure);
        results.innerHTML = "Buscando tu ubicación";
    }
    else{
        results.innerHTML = "Este navegador no soporta geocalización";
    }
}

function geolocationSucess(position){
    results.innerHTML = "Tu última posición es (" + position.coords.latitude
    + "," + position.coords.longitude + ")" + "con una exactitud de " + position.coords.accuracy + " metros.";
}

function geolocationFailure(positionError){
    switch(positionError.code){
        case 1:
            results.innerHTML = "Has decidido no compartir tu ubicación.";
            break;
        case 2:
            results.innerHTML = "No se puede determinar tu ubicación, la red no funciona.";
            break;
        case 3:
            results.innerHTML = "Tiempo de localizacion excedido.";
            break;
        case 0:
            results.innerHTML = "Hubo un error inesperado.";
            break;
    }
}