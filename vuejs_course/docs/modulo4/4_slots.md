# Slots en VueJS

Los `slots` en VueJS sirve para reutilizar la estructura (y estilos) de un componente.

Por ejemplo:

`ProductList` es la lista de productos, pero `ProductListItem` es un solo producto.

Se puede realizar esta reutilización con props pero también se puede hacer con `slots`.

La manera de realizar esto es definir los nombres de los slots dentro del `componente hijo`, y en el `componente padre` especificamos qué cosas irán en un slot del componente hijo. Por ejemplo:

> En el componente hijo:

```vue
<template>
    <br>
    <div>
        <div class="flex flex-column gap-xs">
                <div class="title">
                    <slot name="title"></slot>
                </div>
                <div class="description">
                    <slot name="price"></slot>
                </div>
                <div class="button-container">
                    <slot name="comprar"></slot>
                </div>
        </div>
    </div>
</template>
```

> Como se observa, se da una estructura del componente hijo y los slots son como un `espacio donde se guardará información de otros componentes`.

> En el componente padre le decimos que utilice rellene los slots del hijo:

```vue

<li v-for="product in products" v-bind:key="product.id" class="flex flex-column gap-xs">
    <ProductListItem>
        <template>
            <div>{{ product.name }}</div>
        </template>
        <template>
           <div>{{ product.price }}</div>
        </template>
        <template>
            <button @click="() => addToCart(product)">Agregar al carrito</button>
        </template>
    </ProductListItem>
</li>

```