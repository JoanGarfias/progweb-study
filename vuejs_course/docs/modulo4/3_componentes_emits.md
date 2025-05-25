# Emits en VueJS

Los `emits` en VueJS permiten que los `componentes hijos` disparen eventos a los `componentes padres`.

Esto es muy parecido a los `eventListeners` que se tenía con JavaScript puro. De tal manera que un evento hijo puede disparar `N` eventos y el componente padre decide qué hacer cuando se dispare tal evento.

La manera de disparar un evento es con `emit()` pero la forma en la que se emite el evento se define con `defineEmits<{ lógica de disparo }>();`.

# Ejemplo:
```ts
const emit = defineEmits<{
    (e: 'addToCart', product: Product): void
}>();

const addToCart = (product: Product) => {
    emit('addToCart', product);
}

```

> Nótese que addToCart es la función que se ejecuta y es el nombre del evento que se dispara usando emit()

De esta forma podemos tener en el componente padre algo como:

```vue
<ProductoItem @addToCart="manejarCarrito" />
```

Y manejar la lógica del evento de la siguiente forma:

```typescript
const manejarCarrito = (producto: Product) => {
  // Aquí haces lo que quieras con el producto
  carrito.push(producto)
}
```