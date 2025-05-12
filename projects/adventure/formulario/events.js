const geoCheck = document.querySelector("#geoCheck");
const camCheck = document.querySelector("#cameraCheck");
const dirInput = document.querySelector("#direccion");
const photoInput = document.querySelector("#foto");
const photoFile = document.querySelector("#file");
const camara = document.querySelector("#camaraInput");
const capturarBtn = document.querySelector("#capturarBtn");
const canvas = document.querySelector("#canvas");
const descripcionInput = document.querySelector("#textarea");
const enviarBtn = document.querySelector("#enviar");


geoCheck.addEventListener("change", (e) => {
    if (e.target.checked) {
        if(navigator.geolocation){
            // Si el navegador soporta geolocalización
            navigator.geolocation.getCurrentPosition(geolocationSucess, geolocationFailure);
        }
    } else {
        console.log("¡Oh no! No podrás compartir tu ubicación.");
        dirInput.disabled = false;
    }

})


enviarBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const imagen_i = localStorage.getItem('fotografia');
    const ubicacion_i = dirInput.value;
    const descripcion_i = descripcionInput.value;

    const storage = JSON.parse(localStorage.getItem('aventuras')) || [];
    console.log(storage);

    if(imagen_i && ubicacion_i !== ''){ //Entonces guardamos
        const data = {
            ubicacion: ubicacion_i,
            fotografia: imagen_i,
            descripcion: descripcion_i
        };

        storage.push(data);
        const json = JSON.stringify(storage);
        localStorage.setItem('aventuras', json);
    }
    alert("Has registrado una nueva experiencia :)");
})

camCheck.addEventListener("change", (e) => {
    if (e.target.checked) {
        photoInput.style.display = "none";
        console.log(photoFile);
        navigator.mediaDevices.getUserMedia({video: true})
        .then((stream) => {
            capturarBtn.style.display = "flex";
            photoFile.removeAttribute('required');
            camara.style.display = "flex";
            camara.srcObject = stream;
            camara.stream = stream;
        })
        .catch(error => alert(error));
    } else {
        photoInput.style.display = "flex";
        capturarBtn.style.display = "none";
        camara.style.display = "none";
        photoFile.setAttribute('required', null);
        if(camara.stream){
            camara.stream.getTracks().forEach(track =>{
                console.log(track);
                track.stop();
            })
            camara.active = false;
        }
    }

})


photoInput.addEventListener("change", (e) => {
    const file = e.target.files[0]; //Solo nos interesa un archivo
    const reader = new FileReader();

    reader.onload = (e) => {
        const imagen = e.target.result;
        localStorage.setItem("fotografia", imagen);
        console.log(imagen);
        alert("Imagen guardada en localStorage");
    }

    reader.readAsDataURL(file);
})


capturarBtn.addEventListener("click", () => {
    canvas.width = camara.videoWidth;
    canvas.height = camara.videoHeight;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(camara, 0, 0, canvas.width, canvas.height);
    const imagen = canvas.toDataURL('image/jpeg');

    localStorage.setItem("fotografia", imagen);
    console.log(imagen);
    alert("Fotografía tomada y guardada en Local Storage");
    /*Esto no va, solo necesitamos la imagen de arriba
    const enlace = document.createElement('a');
    enlace.href = imagen;
    enlace.download = 'captura.jpg';
    enlace.click();*/

});

function geolocationSucess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C+${lon}&key=6b905379928643fb929244cf720e7b23&pretty=1`;
    dirInput.value = "Obteniendo ubicación...";
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const direccion = data.results[0].formatted;
        dirInput.value = direccion;
        dirInput.disabled = true;
        //console.log(`Dirección: ${direccion}`);
    })

    console.log(position);
}

function geolocationFailure(error){
    alert(error);
}