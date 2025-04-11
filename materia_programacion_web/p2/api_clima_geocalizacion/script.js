let ciudadInput = document.querySelector("#ciudadInput");
let btnConsultar = document.querySelector("#btnConsultar");
let btnCargando = document.querySelector("#btnCargando");
let contenido = document.querySelector("#contenido");

let l_titulo = document.querySelector("#titulo");
let l_temperatura = document.querySelector("#temperatura");
let l_sensacion = document.querySelector("#sensacion");
let l_nivelmar = document.querySelector("#mar");
let l_max = document.querySelector("#temperaturaMax");
let l_min = document.querySelector("#temperaturaMin");
let l_icono = document.querySelector("#icono");
let l_velocidad = document.querySelector("#velocidad");

const apikey = '04810ec7aeb9b5d1e25e7a67d4b34668';

const optionFarenheit = 1;
const optionCelsius = 2;

btnConsultar.addEventListener("click", (e) => {
    e.preventDefault();
    btnCargando.style.display = "flex";
    contenido.style.display = "none";

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(geolocationSucess, geolocationFailure);
    }
    else{
        alert("Este navegador no soporta geocalización");
    }
})

function getOption(){
    let celsius = document.querySelector("#optionCelsius").checked;
    let fah = document.querySelector("#optionFarenheit").checked;

    if(celsius)
        return optionCelsius;
    if(fah)
        return optionFarenheit;
}


function geolocationSucess(position){
    console.log("Tu última posición es (" + position.coords.latitude
    + "," + position.coords.longitude + ")" + "con una exactitud de " + position.coords.accuracy + " metros.");
    
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;


    if(getOption() === optionCelsius){
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric&lang=es`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            btnCargando.style.display ="none";
            contenido.style.display = "block";
            l_titulo.innerHTML = data.name;
            l_temperatura.innerHTML = data.main.temp + "°C";
            l_max.innerHTML = data.main.temp_max + "°C";
            l_min.innerHTML = data.main.temp_min + "°C";
            l_sensacion.innerHTML = data.main.feels_like + "°C";
            l_nivelmar.innerHTML = data.main.sea_level + "m";
            l_velocidad.innerHTML = data.wind.speed + " km/h";
            data.weather.forEach(w => {
                const img = `https://openweathermap.org/img/wn/${w.icon}@2x.png`; 
                l_icono.src = `${img}`
            });
        })
        .catch(error => {
            contenido.style.display = "none";
            alert("Ha ocurrido un problema con la solicitud");
        })
    }
    else{
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial&lang=es`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            btnCargando.style.display ="none";
            contenido.style.display = "block";
            console.log(data);
            l_titulo.innerHTML = data.name;
            l_temperatura.innerHTML = data.main.temp + "°F";
            l_max.innerHTML = data.main.temp_max + "°F";
            l_min.innerHTML = data.main.temp_min + "°F";
            l_sensacion.innerHTML = data.main.feels_like + "°F";
            l_nivelmar.innerHTML = data.main.sea_level + "m";
            l_velocidad.innerHTML = data.wind.speed + " km/h";
            data.weather.forEach(w => {
                const img = `https://openweathermap.org/img/wn/${w.icon}@2x.png`;
                l_icono.src = `${img}`
            });
        })
        .catch(error => {
            contenido.style.display = "none";
            alert("Ha ocurrido un problema con la solicitud");
        })
    }
}

function geolocationFailure(positionError){
    switch(positionError.code){
        case 1:
            alert("Has decidido no compartir tu ubicación.");
            break;
        case 2:
            alert("No se puede determinar tu ubicación, la red no funciona.");
            break;
        case 3:
            alert("Tiempo de localizacion excedido.");
            break;
        case 0:
            alert("Hubo un error inesperado.");
            break;
    }
}