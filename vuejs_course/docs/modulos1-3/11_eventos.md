# Manejo de eventos con VueJS

Los eventos en VueJS son muy útiles, estos remplazan a los eventos que se hacian manualmente con JavaScript
permitiendo que cuando se detecte el evento se dispare una función que nosotros queramos.

La forma de utilizar eventos es con la directiva es con:
> v-on:`<evento>`

Por ejemplo:

```vue
    <template>
        <input v-model="variable">
        <button type="button" v-on:click="funcionpepe">
    </template>
```

El div que se muestra en el código tiene el evento "click" el cual detecta cuando el usuario da click en algo y ejecuta la función `funcionpepe()`.

Esto nos permite ahorrar tiempo de desarrollo.

Existen muchos otros eventos como:
1. v-on:play
2. v-on:abort
3. v-on:canplay
4. v-on:drop
> Y existen muchisimos más...

# Abreviatura de los eventos

Se puede abreviar tener que escribir `v-on:<evento>` solo colocando `@<evento>`

Por ejemplo:

```vue
<input type="text" @click="funcionpepe">
<button type="button" @keyup="funcionpepe2">
```

# Modificadores de Eventos

Existen modificadores que se agregan a los eventos:

En formularios:
```
.stop
.prevent
.self
.capture
.once
.passive

```

En eventos de teclado:
```
.enter
.tab
.delete
.esc
.space
.up
.down
.left
.right
```
