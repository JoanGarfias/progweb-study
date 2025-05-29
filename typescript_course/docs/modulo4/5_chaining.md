# Chaining

Es el operador `?` que nos permite ejecutar algo solo si un valor está definido (no es undefined). Ejemplo:

```ts
const btn = document.querySelector("button");

btn?.addEventListener('click', () => {
    //Logica de botón
})

```

> [!IMPORTANT]
> Le estamos diciendo al compilador de TS que si el botón está definido que agregue un evento de click. Esto se puede llevar a otros eventos, validaciones en if, etc.