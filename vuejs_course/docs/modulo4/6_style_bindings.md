# Style Bindings

Los style bindings permiten asignar estilos CSS de forma dinámica directamente desde el template, usando datos del componente.

# Para qué sirve

- Cambiar el color cuando el mouse está encima
- Mostrar u ocultar elementos con display: none
- Cambiar tamaños, bordes, etc. según condiciones o props.

# Sintaxis

> Binding con objeto `(v-bind:style o :style)` los elementos se colocan directamente en el :style

```vue
    <template>
    <div :style="{ color: textoColor, fontSize: tamañoLetra + 'px' }">
        Texto con estilo dinámico
    </div>
    </template>

    <script setup>
    const textoColor = 'red'
    const tamañoLetra = 24
    </script>
```

> Binding con variable de objeto

```vue
<template>
  <div :style="estilos">
    Texto con estilo dinámico desde objeto
  </div>
</template>

<script setup>
const estilos = {
  backgroundColor: 'blue',
  padding: '10px',
  borderRadius: '8px'
}
</script>
```

> Binding con array de estilos

```vue

<template>
  <div :style="[estiloBase, esActivo ? estiloActivo : estiloInactivo]">
    Botón
  </div>
</template>

<script setup>
const esActivo = true

const estiloBase = {
  padding: '10px',
  fontWeight: 'bold'
}

const estiloActivo = {
  backgroundColor: 'green',
  color: 'white'
}

const estiloInactivo = {
  backgroundColor: 'gray',
  color: 'black'
}
</script>

```