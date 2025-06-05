# 4 formas de usar imagenes en Astro

## Usando el componente `Image` de Astro.

En este caso importamos el componente Image de Astro y lo usamos.

```astro
---
import {Image} from 'astro:assets';
import imgCanto from '../assets/fotografia.png';
---

<Image src={imgCanto} alt="Canto" />
```

## Usando `Picture` de Astro

Nos permite importar imagenes con mejor accesibilidad. Además, nos permite cambiar el formato en los navegadores en caso de que no lo soporten, cambiar el tamaño de la imagen en celulares, etc.

```astro
<Picture src={imgCanto}
         alt="Canto"
         formats={[ "avif", "webp"]}
         class="img"
/>
```

# Usando el `<img>` de HTML

La desventaja de usar este tipo de etiqueta es que no hay compresión ni control. Astro no lo va pre-procesar.

Una ventaja es que soporta formatos nuevos a las librerias de `image` y `picture` (cosa que no pasa muy seguido), y que `<img>` permite utilizar urls directas. Mientras que los componentes `Image` y `Picture` no lo permiten.