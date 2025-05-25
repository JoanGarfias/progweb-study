# Qué es un valor reactivo (componente reactivo)

Un componente reactivo es aquél que no necesita recargar el navegador para actualizar un valor. 
Esto se logra utilizando objetos reactivos, para ello podemos utilizar ref() en lugar de cadenas literales.


> En lugar de tener: 
```vue
<script setup lang="ts">
    const msg = "Hola";
</script>

<template>
    <div>
        {{ msg }}
    </div>
</template>

<style scoped>

</style>
```

> Podemos tener:

```vue
<script setup lang="ts">
    const msg = ref('Hola mundo');
</script>

<template>
    <div>
        <input v-model="message" type="text" />
        {{ msg }}
    </div>
</template>

<style scoped>

</style>
```

De esta forma si `msg` cambia, se actualiza sin refrescar el navegador.


# Acceso a valores de elementos reactivos

Si usamos ref(), por ejemplo este caso:

```vue
<script setup lang="ts">
    const user = ref({
        name: 'Pepe sech',
        city: 'México'
    });
    const actualizar = () => {
        console.log(user.value.name);
        console.log(user.value.city);
    }
</script>
```
> [!NOTE]
> Nótese que si usamos ref() tenemos que utilizar `user.value` para acceder a los atributos.
> Esto es porque `user` es el componente reactivo en sí y si intentamos hacer `user.name`
> Dará error porque el componente `user` no tiene ese metodo.

> [!NOTE]
> Sin embargo, si usamos reactive() no necesitamos colocar `user.value`, podemos colocar `user.<atributo>`
> como: `user.name` y `user.city`