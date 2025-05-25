# Rutas anidadas en Vue

Para definir rutas anidadas debemos agregar la ruta con la siguiente sintaxis:

```typescript
    {
      path: '/user/:id',
      name: 'user',
      component: UserView,
      children: [
        { path: 'profile', name: 'profile', component: UserProfile,  },
        { path: 'post', name: 'post', component: UserPost,  }
      ]
    },
```

> Podemos ver que la ruta dinamica `user/:id` tiene hijos, esos hijos son las rutas anidadas.
> La forma correcta de agregarlo es colocar el parametro `children` en el componente padre y colocar en un array el conjunto de objetos (cada objeto será una ruta hijo de `user:/id`).

Claramente esto involucra importar tanto `UserProfile` y `UserPost` dentro de `index.ts`.

Además, debemos crear tanto `UserProfile.vue` y `UserPost.vue` como componentes.

# Modificación de la vista del padre

Para este caso, la vista padre es `UserView.vue`, dentro tiene una sintaxis peculiar:

```vue
<template>
    <div>
        <h1>User {{ route.params.id }} </h1>
        <div class="flex flex-row">
            <RouterLink to="profile">Perfil</RouterLink>
            <RouterLink to="post">Post</RouterLink>
        </div>
        <RouterView></RouterView>
    </div>
</template>

<script setup lang="ts">
    import {useRoute} from 'vue-router';
    const route = useRoute();

</script>

<style scoped>

</style>
```

> NOTA: `<RouterLink>` nos permite colocar enlaces de nuestras rutas, si queremos que la ruta se cree conforme al nombre que colocamos en `index.ts` su parametro `to` debe ser seguido del nombre de la ruta. 

> Sin embargo, si queremos que la ruta se genera conforme a una URL podemos hacer que el parametro `to` sea seguido de `/<ruta>`.

Ejemplos:

```vue
    <RouterLink to="profile">Perfil con URL nombrada</RouterLink>
    <RouterLink to="/profile">Perfil con URL ya generada</RouterLink>
```

> Además, es importante tomar en cuenta que se debe agregar el `RouterView` dentro de la vista padre. Ejemplo:

```vue
<template>
    <div>
        <h1>User {{ route.params.id }} </h1>
        <div class="flex flex-row">
            <RouterLink to="profile">Perfil</RouterLink>
            <RouterLink to="post">Post</RouterLink>
        </div>
        <RouterView></RouterView>
    </div>
</template>
```