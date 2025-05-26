"use strict";
const saludar = (nombre, edad) => {
    console.log(`Hola ${nombre.toUpperCase()} tienes ${edad} años de edad`);
};
const getPares = (n1, n2) => {
    const pares = [];
    let i = 0;
    for (i = n1; i <= n2; i++) {
        if (i % 2 == 0)
            pares.push(i);
    }
    return pares;
};
const isRefresco = (refresco) => {
    console.log("Es un refresco");
};
const isLatino = (pais) => {
    const pais_format = pais.toLocaleLowerCase();
    const paises_latinos = ["mexico", "bolivia", "argentina", "peru", "chile"];
    return paises_latinos.includes(pais);
};
saludar("Joan", 20);
console.log(getPares(2, 10));
//isRefresco("squirt"); -> esto da error porque no está en el tipo de dato REFRESCO
isRefresco("coca");
console.log("Verificando si USA es un pais latino: ", isLatino("estados unidos"));
console.log("Verificando si Mexico es un pais latino: ", isLatino("mexico"));
