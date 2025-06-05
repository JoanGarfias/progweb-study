
# Layouts en Astro

Astro es un moderno framework para crear sitios web rápidos y estáticos. Una de sus características más poderosas es el uso de **layouts**, que permite compartir una estructura común entre múltiples páginas.

## ¿Qué es un Layout?

Un layout en Astro es un componente reutilizable que define la estructura visual general de tus páginas. Por ejemplo, puede contener el encabezado, pie de página y navegación de tu sitio, evitando que repitas este código en cada archivo.

## Cómo crear un Layout

1. Crea una carpeta llamada `layouts/` dentro de `src/`.
2. Crea un archivo `.astro`, por ejemplo `BaseLayout.astro`.

```astro
---
// src/layouts/BaseLayout.astro
const { title } = Astro.props;
---
<html lang="es">
  <head>
    <title>{title}</title>
  </head>
  <body>
    <header><h1>Mi Sitio Web</h1></header>
    <main>
      <slot />
    </main>
    <footer><p>© 2025 Mi Sitio</p></footer>
  </body>
</html>
```

## Cómo usar un Layout en una página

Para usar un layout en una página, lo importas y lo envuelves alrededor del contenido.

```astro
---
// src/pages/index.astro
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="Inicio">
  <h2>Bienvenido a la página de inicio</h2>
  <p>Este contenido usa el layout base.</p>
</BaseLayout>
```

## Ventajas de usar Layouts

- Evitas repetir estructuras comunes.
- Haces cambios globales más fácilmente.
- Separas la lógica del diseño del contenido.

## Slots y Props

- `<slot />` representa el lugar donde se inserta el contenido de la página.
- Puedes pasar propiedades (`props`) como `title`, `description`, etc.

## Conclusión

Los layouts en Astro te permiten construir sitios mantenibles, reutilizables y con una estructura limpia. Son fundamentales para cualquier proyecto mediano o grande.