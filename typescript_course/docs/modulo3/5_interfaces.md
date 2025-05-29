# Interfaces

Son lo más usado en TypeScript.

Estructura:

```typescript
interface NombreInterfaz{
    atributo1: number,
    atributo2: string,
    atributo3: boolean,
    atributo4?: string,
}
```

# Diferencia entre interfaces y type

Los type se usan más para los tipos de datos primitivos
```typescript
type Response = number | string;
```

Las interfaces sirven para algo más complejo (una estructura de objetos).

# Herencia de Interfaces (extends)

La interfaz se puede extender (heredar) y darles otros atributos.
Con la siguiente sintaxis:


```typescript
type direccion = string | undefined;

interface Persona{
    curp: string,
    nombre: string,
    edad: number.
    domicilio: direccion,
}

interface Usuario extends Persona{
    cupones: number,
    estaLogeado: boolean,
}
```

> [!NOTE]
> En este caso la interfaz `Usuario` hereda los atributos de `Persona`. 