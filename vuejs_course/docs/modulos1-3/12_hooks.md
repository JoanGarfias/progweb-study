# Hooks del ciclo de vida de un componente

Los hooks del ciclo de vida en Vue.js son funciones especiales que Vue llama automáticamente en momentos clave del ciclo de vida de un componente: desde su creación, montaje, actualización y destrucción.

# 🧬 ¿Qué es el "ciclo de vida" de un componente?

Es la secuencia de etapas por las que pasa un componente Vue desde que se crea hasta que se destruye:

> Creación → Montaje → Actualización → Destrucción

# Principales hooks del ciclo de vida en Vue 2 y 3 (API de opciones)

- beforeCreate()
- created()
- beforeMount()
- mounted()
- beforeUpdate()
- beforeUnmount()
- unmounted()
- beforeDestroy()
- destroyed()

# Ejemplo

```vue
export default {
  data() {
    return { contador: 0 };
  },
  created() {
    console.log('Componente creado');
  },
  mounted() {
    console.log('Componente montado en el DOM');
  },
  updated() {
    console.log('El DOM se actualizó');
  },
  unmounted() {
    console.log('Componente destruido');
  }
}
```

# Documentación de ciclo de vida de componentes con Composition API

> https://vuejs.org/api/composition-api-lifecycle