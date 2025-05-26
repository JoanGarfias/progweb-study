# Parametros opcionales en TypeScript

Cuando tenemos una función a veces vamos querer hacer que sus parámetros sean opcionales y no obligatorios para evitar errores con TypeScript.

La sintaxis para hacer esto es que en los parámetros de la función en lugar de tener `<variable>: <tipo>` vamos a tener `<variable>: <tipo>`.

Un ejemplo:
```typescript
function saludarOpcional(nombre: string, edad?: number){
    if(edad !== undefined){
        console.log(`Hola ${nombre} tienes ${edad} años de edad`);
    }
    else{
        console.log(`Hola ${nombre}, no se ha proporcionado la edad`);
    }
}
```

# Dar valores por defecto a los parámetros en TypeScript

Cuando definamos parámetros opcionales tal vez en ocasiones vamos a requerir que esos parámetros opcionales **tengan un valor por defecto** al retornarlos.

Para esto se utiliza el operador `??`. Ejemplo:

```typescript
const estaAutentificado(jwt: string, userId: number, role: string, level?: number){
    return {
        userId,
        jwt,
        role,
        level: level ?? 10,
    }
}
```

> [!NOTE]
> En este ejemplo el parámetro opcional `level` recibirá el valor de `10` por defecto.