let ciudadInput = document.querySelector("#ciudadInput");
let btnConsultar = document.querySelector("#btnConsultar");
let contenido = document.querySelector("#contenido");

let l_titulo = document.querySelector("#titulo");
let l_temperatura = document.querySelector("#temperatura");
let l_sensacion = document.querySelector("#sensacion");
let l_nivelmar = document.querySelector("#mar");
let l_max = document.querySelector("#temperaturaMax");
let l_min = document.querySelector("#temperaturaMin");
let l_icono = document.querySelector("#icono");
let l_velocidad = document.querySelector("#velocidad");
let l_descripcion = document.querySelector("#descripcion");

const apikey = '04810ec7aeb9b5d1e25e7a67d4b34668';
const url1 = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid=${apikey}`;

const optionFarenheit = 1;
const optionCelsius = 2;

btnConsultar.addEventListener("click", (e) => {
    e.preventDefault();
    contenido.style.display = "none";

    let ciudad = ciudadInput.value;    
    if(ciudad !== ''){
        if(getOption() === optionCelsius){
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apikey}&units=metric&lang=es`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                contenido.style.display = "block";
                l_titulo.innerHTML = data.name;
                l_temperatura.innerHTML = data.main.temp + "°C";
                l_max.innerHTML = data.main.temp_max + "°C";
                l_min.innerHTML = data.main.temp_min + "°C";
                l_sensacion.innerHTML = data.main.feels_like + "°C";
                l_nivelmar.innerHTML = data.main.sea_level + "m";
                l_velocidad.innerHTML = data.wind.speed + " km/h";
                data.weather.forEach(w => {
                    //const img = `https://openweathermap.org/img/wn/${w.icon}@2x.png`;
                    const img = getImage(w.main);
                    l_icono.src = `${img}`;
                    const p = document.createElement("p");
                    p.innerHTML = w.description;
                    l_descripcion.appendChild(p);
                });
            })
            .catch(error => {
                contenido.style.display = "none";
                alert("Ha ocurrido un problema con la solicitud");
            })
        }
        else{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apikey}&units=imperial&lang=es`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
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
                    //const img = `https://openweathermap.org/img/wn/${w.icon}@2x.png`;
                    const img = getImage(w.main);
                    l_icono.src = `${img}`
                    const p = document.createElement("p");
                    p.innerHTML = w.description;
                    l_descripcion.appendChild(p);
                });
            })
            .catch(error => {
                contenido.style.display = "none";
                alert("Ha ocurrido un problema con la solicitud");
            })
        }
    }
    else{
        alert("Debes escribir una ciudad");
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

const weatherImageMap = {
    "Thunderstorm": "img/day.svg",
    "Clouds": "img/cloudy-day-1.svg",
    "Drizzle": "img/rainy-2.svg",
    "Rain": "img/rainy-7.svg",
    "Snow": "img/snowy-6.svg",
    "Thunderstorm": "img/thunder.svg"
};
  
function getImage(id) {
    const imagePath = weatherImageMap[id];

    return imagePath ?? "img/weather.svg";
}