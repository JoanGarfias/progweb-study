interface Usuario {
    nombre: string;
    edad: number;
  }
  
const objeto1: any = { nombre: "Ana", edad: 30 };
const objeto2: any = { nombre: "Pedrito", edad: 24 };  
const objeto3: any = { nombre: "Bernardo", edad: 49 };

const user1 = objeto1 as Usuario;
const user2 = (objeto2 as Usuario);
const user3 = <Usuario> objeto3;

console.log(user1.nombre);
console.log(user2.nombre);
console.log(user3.nombre);