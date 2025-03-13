const catalogo = document.querySelector(".products");
function crearProductos(){
    productos.datos.forEach(prod => {
        crearProducto(prod);
    });
}


function crearProducto(p){
    const img = document.createElement("img");
    const titulo = document.createElement("h2");
    const descripcion = document.createElement("p");
    const precio = document.createElement("p");

    img.src = `img/${p.imagen}`;
    titulo.innerHTML = `<a class="titulo-p" href="producto.html#${p.id}"> ${p.titulo} </a>`;
    descripcion.innerHTML = `${p.descripcion}`;
    precio.innerHTML = `$ ${p.precio}`;
        
    const article = document.createElement("article");
    article.className = "product";
    article.appendChild(img);
    article.appendChild(titulo);
    article.appendChild(descripcion);
    article.appendChild(precio);
    catalogo.appendChild(article);
}

function crearProductoIndividual(p){
    const producto = document.querySelector(".contenedor");

    const img = document.createElement("img");

    const titulo = document.createElement("h2");

    const precio = document.createElement("p");
    const boton = document.createElement("button");

    const stock = document.createElement("p");
    const descripcion = document.createElement("p");
    
    const article = document.createElement("article");
    const izq = document.createElement("div");
    const der = document.createElement("div");
    const linea = document.createElement("div");

    img.src = `img/${p.imagen}`;
    titulo.innerHTML = `<a class="titulo-p" href="producto.html#${p.id}"> ${p.titulo} </a>`;
    descripcion.innerHTML = `${p.descripcion}`;
    precio.innerHTML = `$ ${p.precio}`;
    stock.innerHTML = `${p.stock} unid. en stock`;
    boton.innerHTML = "Comprar";

    img.className = "img-p";
    precio.className = "precio-p";
    titulo.className = "titulo-p";
    boton.className = "btn-p";
    stock.className = "stock-p";
    descripcion.className = "descripcion-p";

    article.className = "product";
    linea.className = "linea";
    izq.className = "izq";
    der.className = "der";

    linea.appendChild(precio);
    linea.appendChild(boton);

    izq.appendChild(img);
    der.appendChild(titulo);
    der.appendChild(linea);
    der.appendChild(stock);
    der.appendChild(descripcion);
    article.appendChild(izq);
    article.appendChild(der);
    producto.appendChild(article);
}