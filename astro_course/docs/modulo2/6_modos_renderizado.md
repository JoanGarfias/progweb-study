# Modos de Renderizado en Astro

Se configura el archivo `astro.config.mjs`

# Vite tiene dos modos de renderizado

```ts
import { defineConfig } from 'astro/config';
export default defineConfig({
    output: "server",
});
```

1. static: es el que genera archivos html, css y js en uno solo (html) y ya no cambian a menos que se ejecute nuevamente `npm run build`.
2. server: permite que se cargue por demanda del servidor (server side rendering).
3. híbrido: ya no se usa desde Astro 5

# Server Site Rendering 

Si queremos usar SSR con Astro vamos a necesitar algún servicio como Netlify, Cloudfare, etc.
Ejemplo:

```ts
import { defineConfig } from 'astro/config';
export default defineConfig({
    output: "server",
    adapter: "vercel",
});
```