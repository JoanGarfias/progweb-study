let lista = document.querySelector(".listado");
let con = new XMLHttpRequest();

con.open("GET", "https://mindicador.cl/api/euro", true);

con.onreadystatechange = function(){
    if(con.readyState == 4 && con.status == 200){
        var data = JSON.parse(con.responseText);
        data.serie.forEach(cot => {
            let elem = document.createElement("ul");
            let fecha = cot.fecha;
            const fechaRec = fecha.trim("T03:00:00.000Z");

            elem.innerHTML = `${fechaRec} || ${cot.valor}`;
            lista.appendChild(elem);
        });
        console.log(data);
    }
}

con.send();