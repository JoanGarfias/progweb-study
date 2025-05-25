# Rutas dinamicas en Vue

Para crear una ruta dinámica lo definimos en `src/router/index.ts` de la siguiente forma:

```typescript
    {
      path: '/product/:id',
      name: 'product',
      component: ProductView,
    },

```

> Nótese que a comparación de las rutas estáticas, las rutas dinámicas tienen un `:` que indica el nombre del parametro. 

# Recuperar los parámetros en una vista.

Para recuperar los parámetros de la url en una vista podemos utilizar `route` y utilizar la función `useRoute()`. Dentro de `route` tendremos `params` y podemos obtener un array de parametros.

Sintaxis:

```typescript
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute(); //Este tiene parametros en route.params

const id_producto = route.params.id;
```

Ahora podriamos usar en el template:

```vue
   <div>
    {{ id_producto }}
   </div> 
```

o bien podriamos tener:

```vue
    <div>
        {{ route.params.id }}
    </div>
```