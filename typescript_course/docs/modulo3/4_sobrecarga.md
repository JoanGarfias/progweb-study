# Sobrecarga de metodos (funciones)

La sobrecarga de metodos en typescript es muy diferente a otros lenguajes de programación como Java.

En TS, la sobrecarga consiste en primero hacer los estereotipos de la función y después se define el comportamiento de la función. Esto se logrará empaquetando todos los tipos de datos posibles que den las distintas funciones en un solo tipo de dato.

Ejemplo:

```typescript
function transformaNumero(num: string) : string;
function transformaNumero(num: number) : number;

function transformaNumero(num: Args) : Args{
    return num;
}

const response = transformaNumero("1");
console.log(response);
```

> [!IMPORTANT]
> Al hacer TypeScript ya sabe si recibe un parámetro `number` te dará los metodos de `number`, en cambio si mandas un valor `string` te dará los metodos de `string`.