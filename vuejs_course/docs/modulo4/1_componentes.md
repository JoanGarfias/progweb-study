# Componentes globales

Para utilizar componentes en toda nuestra aplicación podemos crear la instancia del componente en `main.ts` y así podremos utilizarlo en cualquier componente dentro de `src/components/`

# Creando un componente global

Primero creamos las carpetas en la carpeta `src/` según: `shared/components/layout`
y dentro de todo eso el componente global como: `AppHeader.vue`

Dentro de `AppHeader.vue` podemos definir un componente que se repita siempre (como un banner, menu, etc). Ejemplo de `AppHeader.vue`:

```vue
<template>
    <div>
        <img :src="logo" alt="Logo" width="30" />
        <div>
            <ul class="flex flex-row">
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
    import logo from "@/assets/logo.svg"
</script>

<style scoped>

</style>
```

# TIP: Importación de la imagen y atajos

Nótese que en `import logo from "@/assets/logo.svg"` se utiliza `@` esto es porque 
el `@` es una referencia a la carpeta `src/` y está definido dentro de `vite.config.ts`
de la siguiente manera:

```typescript
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url))
    },
  },
})
```

Podemos definir nuestro propios atajos en los `alias` de `vite.config.ts`

# Definición del componente global en la instancia de Vue

Para poder crear el componente global ahroa que ya lo tenemos programado debemos meternos al archivo `main.ts` a modificar un par de cosas:

```typescript
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AppHeader from '@/shared/components/layout/AppHeader.vue'

const app = createApp(App) //Nos permite crear una instancia de la aplicación Vue

app.component('AppHeader', AppHeader);
app.use(router);

app.mount('#app');

```

> Nótese que se importa `AppHeader.vue` en `AppHeader` y se define como componente global en la instancia de vue con ```typescript app.component('AppHeader', AppHeader) ```

De tal manera que ahora este componente `AppHeader` lo podemos usar donde queramos, en cualquier componente.

Aunque no se recomienda excederse con esta posibilidad, ya que siempre será mejor mantener importaciones locales por componente por una cuestión de legibilidad.