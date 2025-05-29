# Intersecciones
En TypeScript, una **intersección de tipos** (`&`) es una forma de combinar múltiples tipos en uno solo, de modo que el nuevo tipo resultante debe cumplir con todos los tipos involucrados. Es decir, un valor de tipo intersección debe tener todas las propiedades y comportamientos de todos los tipos combinados.

# Cómo funciona

La intersección toma dos o más tipos y los une. Si tienes:

```ts
type A = { nombre: string };
type B = { edad: number };
```

Entonces puedes crear un nuevo tipo:

```ts
type Persona = A & B;
```

El tipo Persona ahora requiere que un objeto tenga tanto nombre como edad:

```ts
const juan: Persona = {
  nombre: "Juan",
  edad: 25,
};
```