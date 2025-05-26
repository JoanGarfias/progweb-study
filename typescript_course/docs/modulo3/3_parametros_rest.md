# Spit Operator 

Es el operador que nos permite decirle a una función que recibiremos muchos parámetros y no sabemos cuántos son. `ANY...`

Comparativa:

```typescript
const funcioncioncita = (arg1: string, arg2: number, arg3: boolean) => {
    //Esto puede ser muy poco legible si son muchos parámetros.
}
```

> [!TIP]
> Para evitar escribir tantos argumentos podemos usar el `Split Operator`.

# Ejemplo con `Split Operator`

```typescript
const funcioncioncita = (...args: any[]) => {
    //Esto puede ser muy poco legible si son muchos parámetros.
}
```

Podemos definir el tipo de dato de `...args`, pero todos los argumentos serán de ese tipo.

Si ponemos que son de tipo `any[]` podremos mandar un array de lo que se nos antoje.

Si ponemos que son de tipo `string` todos los argumentos serán cadenas.

> [!TIP]
> Si queremos colocar parámetros con cierto tipado podemos definir un `TYPE` y colocar los tipos necesarios.

# Ejemplo de Split Generator con TYPE

```typescript
type PEPE number | string | boolean;
const funcioncioncita = (...args: PEPE) => {
    //Esto puede ser muy poco legible si son muchos parámetros.
}
```
> [!NOTE]
> Acá le estamos diciendo que los argumentos serán de tipo `PEPE` y según la definición de `PEPE` podría ser un **enero, string o un booleano**.

Otra manera de hacer esto puede ser creando diferentes tipos de datos (objeto).

```typescript
type PERSONA = {
    nombre: string,
    edad: number,
    hijos?: string[],
};
const funcioncioncita = (...args: PERSONA) => {
    //Esto puede ser muy poco legible si son muchos parámetros.
}
```

> [!NOTE]
> Este ejemplo es un poco más legible y nos sirve para recibir objetos con el Split Operator.