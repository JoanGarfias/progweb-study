# Tipar argumentos de funciones

Los parametros de las funciones requieren que se les pase el tipo de dato.

De la siguiente manera

```typescript
const saludar = (nombre: string, edad: number) => {
    console.log(`Hola ${nombre} tienes ${edad} años de edad`);
}
saludar("Joan", 25);

```