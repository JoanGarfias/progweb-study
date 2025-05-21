# Cómo usar TypeScript en VueJS

Solo con poner:
> \< script setup lang="ts" \>
Ya podemos usar typescript con Vue.

# Ejemplo de código en VueJS compatible con TypeScript

```html
<script setup lang="ts">
import {ref} from 'vue'

const msg = ref('Hello world')
</script>

<template>
    <h1>{{ msg }}</h1>
    <input v-model="msg">
</template>
```