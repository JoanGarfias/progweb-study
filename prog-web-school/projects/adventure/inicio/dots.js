const title = document.querySelector('.title');
const opciones = document.querySelector('.nav-list');

let menu = false;

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    let cont_img = 0;

    const img = [
        '../img/aventura1.jpg',
        '../img/aventura2.jpg',
        '../img/aventura3.jpg',
    ];

    const dots = document.querySelectorAll('.dot');
    console.log(dots);
    dots.forEach((dot, index) => {
        console.log("Registrando evento");
        dot.addEventListener('click', () => {
            cambiarImagen(index);
        });
    });

    function cambiarImagen(index) {
        header.style.backgroundImage = `url(${img[index]})`;
        document.querySelector('.dot.active')?.classList.remove('active');
        dots[index].classList.add('active');
    }

    setInterval(() => {
        cont_img = (cont_img + 1) % img.length;
        cambiarImagen(cont_img);
    }, 2500);
    

});


document.querySelector("#burger").addEventListener("click" , function() {
    if(menu === false){ //si el menu esta cerrado, lo abriremos
        opciones.classList.add("activo");
        title.classList.add("activo");
        menu = true;
    }
    else{
        opciones.classList.remove("activo");
        title.classList.remove("activo");
        menu = false;
    }
});