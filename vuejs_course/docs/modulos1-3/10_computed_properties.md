# Propiedades Computadas

En Vue.js, computed() (o la opción computed: {} en Vue 2) se usa para declarar propiedades computadas, que 
son valores derivados de otras propiedades reactivas (como datos en data()), pero que se recalculan automáticamente cuando esas cambian.

# 🧠 ¿Qué es una propiedad computada?
Es una función que se comporta como una propiedad reactiva, pero su valor se calcula a partir de otras y se actualiza automáticamente cuando esas otras cambian.

> ✅ Se cachea (no se vuelve a ejecutar si las dependencias no han cambiado).


# Diferencia entre usar funciones a usar computed properties

Si tenemos una función que retorna un valor calculado y un computed propertie, la diferencia será la caché.
En computed propertie no se volverá a calcular cada que se mande a llamar al atributo, si el elemento
no ha cambiado se recupera de la caché.

Mientras que con funciones se calcula siempre.

En términos de eficiencia puede ser muy útil tener computed properties.

# Ejemplo con función

```ts
    const q = () => {
        return cart.items.length;
    }
```
> Y con esta función lo usamos dentro de nuestro `<template>`

```html
    <template>
        <div>
            {{ q() }}
        </div>
    </template> 
```

# Computed Properties (más eficiente)

```ts
    const quantity = computed({
        return cart.items.length;
    })
```

> Y con esta función lo usamos dentro de nuestro

```html
    <template>
        <div>
            {{ quantity }}
        </div>
    </template> 
```


# Los Computed Properties NO SON EDITABLES por defecto

Si or ejemplo, hacemos un v-model entre un input y un mensaje tipo `computed`, no se actualiza ya que `computed` por defecto no realiza cambios directos.

Para poder realizar cambios necesitamos crear los metodos `get()` y `set()` de la siguiente manera:

```js
    const msg = computed({
        get(){
            return cart.description;
        }
        set(newValue){
            cart.description = newValue;
        }
    })
```

> Nótese el metodo `set(newValue)` recibe un parámetro el cual será el que se mande para hacer el cambio.
> De esta forma podemos tener distintos elementos en la interfaz que puedan modificar un valor de tipo `computed`. 