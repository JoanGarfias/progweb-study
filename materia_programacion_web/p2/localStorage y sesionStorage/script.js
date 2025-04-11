function saveData(){
    let localObj = document.querySelector("#DatoLocal").value;
    let sesionObj = document.querySelector("#DatoSesion").value;
    localStorage.setItem("localData", localObj);
    sessionStorage.setItem("sesionData", sesionObj);
}

function loadData(){
    let localData = localStorage.getItem("localData");
    let sesionData = sessionStorage.getItem("sesionData");

    if(localData != null){
        document.querySelector("#DatoLocal").value = localData;
    }

    if(sesionData != null){
        document.querySelector("#DatoSesion").value = sesionData;
    }
}


document.querySelector("#guardar").addEventListener("click", (e) =>{
    saveData();
});

document.querySelector("#cargar").addEventListener("click", (e) =>{
    e.preventDefault();
    loadData();
});
