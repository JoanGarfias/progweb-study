# Recibir parámetros en funciones por defecto

Anteriormente en `1_parametros_opcionales` se mencionó que se pueden retornar valores por defectos en las funciones si los atributos son opcionales con el operador `??`.

Si queremos recibir un parámetro en la función ya por defecto, podemos hacer lo siguiente en los parámetros de la función:

`<variable>: <tipo> = <valor>`

Por ejemplo:


```typescript
const estaAutentificado(jwt: string, userId: number, role: string = 'admin', level?: number){
    return {
        userId,
        jwt,
        role,
        level: level ?? 10,
    }
}
```

En este ejemplo, el parámetro:

```typescript
role: string = 'admin';
```
> [!IMPORTANT]
> Le estamos diciendo a la función que por defecto el rol tendrá un valor por defecto de `admin`.


> [!TIP]
> Se recomienda que los valores que no tienen un valor por defecto vayan primero en los parámetros. Luego de eso deben ir los parámetros con valor por defecto y finalmente los parámetros opcionales.
