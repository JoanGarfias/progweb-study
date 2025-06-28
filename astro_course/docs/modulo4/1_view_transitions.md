# view Transitions

Nos va permitir que nuestra aplicación parezca una SPA (podriamos hacer pre-fetching de algunas páginas).

Para agregarlo en nuestra página haremos:

```astro
---
import { ViewTransitions } from 'astro:transitions';
///Ahora en el head de un html usariamos:
---

<head>
    <ViewTransitions />
</head>

```