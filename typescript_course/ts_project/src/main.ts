type REFRESCO = "coca" | "pepsi" | "jarritos";
enum PAISES {
    BOL = 'BOL',
    ARG = 'ARG',
    CHI = 'CHI'
};

let PING: unknown = 80;
PING = null;

const saludar = (nombre: string, edad: number) => {
    console.log(`Hola ${nombre.toUpperCase()} tienes ${edad} años de edad`);
}

const getPares = (n1: number, n2: number): number[] => {
    const pares: number[] = [];
    let i: number = 0;
    for(i=n1; i<=n2; i++){
        if(i % 2 == 0)
            pares.push(i);
    }
    return pares;
}

const isRefresco = (refresco: REFRESCO) => {
    console.log("Es un refresco");
}

const isLatino = (pais: string) : boolean => {
    const pais_format = pais.toLocaleLowerCase();
    const paises_latinos = ["mexico", "bolivia", "argentina", "peru", "chile"];
    return paises_latinos.includes(pais);
}

function validarPing(){
    if(typeof PING == 'number'){
        console.log("OK");
    }
    else{
        throw new Error('No hay conexión');
    }
}

saludar("Joan", 20);
console.log(getPares(2, 10));

//isRefresco("squirt"); -> esto da error porque no está en el tipo de dato REFRESCO
isRefresco("coca");

console.log("Verificando si USA es un pais latino: ", isLatino("estados unidos"));
console.log("Verificando si Mexico es un pais latino: ", isLatino("mexico"));