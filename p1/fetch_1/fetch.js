let lista = document.querySelector('.contenedor');
let fragmento = document.createDocumentFragment();

fetch('https://randomuser.me/api/?results=10')
.then(result => {
    console.log(result);
    return result.json();
})
.then(txtjson => {
    console.log(txtjson);
    txtjson.results.forEach(j => {
        const art = document.createElement("article");
        const li = document.createElement("h1");
        const img = document.createElement("img");

        li.innerHTML = `${j.name.title} ${j.name.first} ${j.name.last}`;
        img.src = j.picture.large;

        art.appendChild(li);
        art.appendChild(img);
        lista.appendChild(art);
    });
})
.catch(error => {
    console.log(err);
})
.finally( () =>{
    console.log("Terminado");
})