# Vue Router

Vue Router es una manera de definir rutas con Vue 3, la librería se encarga de crear las rutas para nuestra aplicación y eso depende de cómo configuremos el archivo `src/router/index.ts`, la función que se encarga de crear las rutas es `createRouter()`

> index.ts

```typescript
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})
```

> Y se export de la siguiente forma:

```typescript
export default router
```

Como podemos ver hay un arreglo de rutas dentro de `routes` en la función `createRouter()`, ahí es donde podemos agregar nuestras rutas.

Para poder crear una ruta necesitamos crear una vista nueva, eso lo hacemos en la carpeta:
`src/views` y colocarle un nombre (por ej: `NewView.vue`).

Luego de eso colocamos esa vista como un componente asociada a la ruta en el `src/router/index.ts`.

Finalmente, en el App.vue debemos colocar solamente etiquetas generales (como `AppHeader.vue`) y después agregar:

```vue
    <RouterView></RouterView>
```

> Esto se hace dentro del `<template>` para que Vue reconozca que tenemos diferentes rutas.

Con esto ya podremos diseñar diferentes rutas y vistas.
