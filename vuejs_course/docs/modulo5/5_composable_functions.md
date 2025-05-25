# Qué son

Son funciones que permiten reutilizar la lógica que están dentro de los componentes.

Es muy util cuando queremos compartir la misma lógica entre componentes.

# Creación de la carpeta `composable`

Crearemos una carpeta llamada `composable` y dentro un archivo `useProduct.ts`

> [!TIP]
> Se recomienda colocar la convención `use<Nombre>.ts` utilizando `camelCase`.

# Estructura de un composable

> useProduct.ts

```typescript


import {reactive, ref} from 'vue';

const useProduct = () => {
    
    const name = ref<string>();
    const price = ref<number>(0);
    const isAvailable = ref<boolean>(true);

    const submit = () => {
        console.log({name, price, isAvailable});
    }

    return { //Al final retornamos las variables y funciones del componente
        name,
        price,
        isAvailable,
        submit
    }
}

export default useProduct;

```

> [!IMPORTANT]
> Para utilizar esta composable function en una vista / componente podemos hacer lo siguiente:

```vue
<script setup lang="ts">
    import useProduct from '@/composable/useProduct.ts';
    const { name, price, isAvailable, submit} = useProduct();
</script>

<template>
    <div>
        <h1>New view</h1>
        <div class="flex flex-column gap-xs">
            <label>Nombre: </label>
            <input type="text" v-model="name" />
        </div>
        <div class="flex flex-column gap-xs">
            <label>Precio: </label>
            <input type="number" v-model="price"/>
        </div>
        <div class="flex flex-column gap-xs">
            <label>Está disponible: </label>
            <input type="checkbox" v-model="isAvailable" />
        </div class="flex flex-column gap-xs">
        <button type="button" @click="submit">Guardar</button>
    </div>
</template>
```

> [!NOTE]
> Como podemos ver, los inputs/botones se conectan a los valores que utilizamos del composable function.
> Esto permite reutilizar la misma lógica en otros componentes/vistas.


# Usando un objeto dentro del composable function:

> useProduct.ts

```typescript

import {ref} from 'vue';
import {useRouter} from 'vue-router';

import type { Product } from '@/interfaces/Product';

const products = ref<Product[]>([
    {
      id: 1,
      name: "Fabuloso",
      price: 25.5,
      isAvailable: true
    },
    {
      id: 2,
      name: "Coca",
      price: 30.5,
      isAvailable: false
    },
    {
      id: 3,
      name: "Pepsi",
      price: 18.5,
      isAvailable: true
    }
  ]);

const useProduct = () => {
    const router = useRouter();
    
    //Estas son las variables vinculadas a los inputs
    const name = ref<string>("");
    const price = ref<number>(0);
    const isAvailable = ref<boolean>(true);

    const submit = () => {
        const p = {
            id: products.value.length + 1,
            name: name.value,
            price: price.value,
            isAvailable: isAvailable.value,
        };
        console.log(p);
        products.value.push(p);
        router.push('/'); //Redireccionamos al inicio y mostramos los productos
    }

    return {
        products,
        name,
        price,
        isAvailable,
        submit
    }
}

export default useProduct;
```