# Tipado básico en TypeScript

Para definir el tipo de dato de variables normales se utiliza:


```ts
    const msg = ref<string>('Hola mundo');
    const isVisible = ref<boolean>(true);
    const total = ref<number>(100);
```

De manera que `<string>`, `<boolean>` y `<number>` indican el tipo de dato
de la variable.

# Tipado en objetos

Se utilizan interfaces para definir el tipado, por ejemplo:

```ts
    const user = reactive <User>({
        firstName: "Joan Pablo",
        lastName: "Garfias",
        age: 20,
        isAdult: false,
    })

    interface User{
        firstName: string,
        lastName: string,
        age: number,
        isAdult: boolean
    }
```

# Interfaces con atributos opcionales

Cuando definimos una interfaz por defecto todos sus campos serán  obligatorios si queremos utilizar la interfaz.

Por lo que se requiere que se indica que es un atributo opcional dentro de la interfaz.

Esto se logra agregando en la definición del atributo en la interfaz la estructura:

> isAdult?: boolean

Resultando de la siguiente manera:

```typescript
    const user = reactive <User>({
        firstName: "Joan Pablo",
        lastName: "Garfias",
        age: 20
    })

    interface User{
        firstName: string,
        lastName: string,
        age: number,
        isAdult?: boolean
    }
```

> [!NOTE]
> Nótese que isAdult no está definido dentro de 
```ts
    const user = reactive <User>({
        firstName: "Joan Pablo",
        lastName: "Garfias",
        age: 20
    })
```
> Lo cual no marca error porque en la definición de la interfaz `isAdult` se definió como un atributo opcional.