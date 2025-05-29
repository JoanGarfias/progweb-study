type A = { nombre: string };
type B = { edad: number };

type Persona = A & B;

const juan: Persona = {
    nombre: "Juan",
    edad: 25,
  };

console.log(juan);