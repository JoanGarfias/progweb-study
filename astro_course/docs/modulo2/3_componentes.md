# Uso de componentes en Astro

Podemos crear una carpeta `components` que contenga todos los componentes reutilizables. Por ejemplo: botones, labes, barras de navegación, etc.


# Paso de parámetros a componentes

Se puede utilizar Props con la siguiente sintaxis:

> Button.vue (component)

```astro
---

interface Props {
  texto: string;
}

const { texto } = Astro.props;

---
<button>
{texto}
</button>
<slot name="icono"/>
<slot name="precio"/>
```

Como podemos ver también podemos recibir slots además de los props. Esto es muy útil si queremos mandar valores dentro del uso del componente en la interfaz principal.

> [!IMPORTANT]
> Para usar cualquier componente se debe usar `import` al componente que queremos usar.

> [!TIP]
> Se recomienda usar interfaces con TypeScript