# Estructura de Astro

En la carpeta `src` está todo el código en sí. Es toda la lógica.

En la carpeta `public` estarán imágenes, iconos, archivos, etc. Documentos que no quieres que Astro pre-procese.

> [!IMPOTANT]
> Todo lo que está en `src` (imagenes por defecto) cuando Astro genera la página web comprimirá las imágenes.

# Carpeta pages

La carpeta pages contiene todas las páginas (inicio, contacto, etc). 

# Carpeta layouts

Es todo el código reutilizable.
Son plantillas.

# Carpeta assets

Acá habrán imagenes, archivos pdf, videos, etc. (Todo será procesado por Astro - Comprimido)

# astro.config.mjs

Este archivo es muy importante. Acá vendrán todas las configuraciones de la personalización de Astro.
Por ejemplo, si trabajamos con React, Vue, etc. Acá se configura.

# No es necesario definir el nombre de un layout o un componente.

No es necesario porque Astro ya infiere el nombre del layout/componente con el nombre del archivo.