# Definición de atributos para los componentes

Lo primero que se tiene que hacer para agregar atributos a un componente es utilizar `toRef`, el cual nos permite hacer que un objeto sea reactivo.

```typescript
import { toRef } from 'vue'
import type { Product } from '@/interfaces/Product';

interface Props {
    products: Product[],
}

const props = defineProps<Props>();
const products = toRef(props, "products");
```

> En este caso, se define que el atributo del componente será de tipo `<Props>` y lo que contiene
`Props` es una lista de `Product[]`, la cual se le tiene que enviar al componente para ser renderizado.

# Crear la interfaz para Product reutilizable

La mejor practica es crear las interfaces en un archivo (y carpeta) por separado de los componentes.

Para el ejemplo de `product-list` se creó la carpeta:

> interfaces/
dentro de `src/`, por lo que se nombró a la interfaz `Product.ts` y su contenido es:

```typescript
export interface Product{
    id: number,
    name: string,
    price: number,
    isAvailable: boolean
}
```

> NOTA: Nótese que lleva `export` y esto es para que la interfaz pueda ser importada desde
> cualquier lugar del proyecto (otros componentes).


# Usando el componente con atributos en la instancia de Vue

Para utilizar el componente con sus atributos dentro de la instancia de VueJS necesitamos
definir los datos que se le van a enviar `interfaces, boolean, numeros, etc`. De la siguiente manera:

```vuejs
<ProductList v-bind:products="products"/>
```
> En este caso `="products"` es donde `products` son los datos que tenemos creados en nuestro `App.vue`, aunque bien podría ser un `boolean, string, etc`. 

También podríamos evitar usar `v-bind` y simplemente usar `:products='products'` de la siguiente forma:

```vuejs
<ProductList :products="products"/>
```

El contenido de products se definió de la siguiente manera:

```typescript
import ProductList from './components/product-list.vue';

import type { Product } from '@/interfaces/Product';

const products: Product[] = [
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
]
```