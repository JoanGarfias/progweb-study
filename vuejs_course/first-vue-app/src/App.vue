<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import SingleFile from './components/single-file.vue';
import ReactivityFile  from './components/reactivity-file.vue';
import ConditionalTest from './components/conditional-test.vue';
import RenderList from './components/render-list.vue';
import ComputedSample from './components/computed-sample.vue';
import EventHandling from './components/event-handling.vue';
import HookComponent from './components/hook-component.vue';
import WatchersSample from './components/watchers-sample.vue';
import AppHeader from './shared/components/layout/AppHeader.vue';
import ProductList from './components/products/product-list.vue';

/*
import type { Product } from '@/interfaces/Product';

const products: Product[] = [
  {
    id: 1,
    name: "Fabuloso",
    price: 25.5,
    isAvailable: true
  },
  {
    id: 2,
    name: "Coca",
    price: 30.5,
    isAvailable: false
  },
  {
    id: 3,
    name: "Pepsi",
    price: 18.5,
    isAvailable: true
  }
]
*/

</script>

<template>
<!-- <ReactivityFile />
<ConditionalTest />
<RenderList />
<br><br>
<h1>Clase 3 Propiedades computadas</h1>
<br><br>
<ComputedSample />
<br>
<h1>Clase 4 Eventos</h1>
<br><br><br>
<EventHandling />
<br><br>
<h1>Clase 5 Hooks</h1>
<br><br>
<HookComponent />
<br><br>
<h1>Clase 6 Watchers</h1>
<br><br>
<WatchersSample />
<br><br>
<h1>Clase 7 Componentes Globales</h1>
<br><br> -->

<!-- <br><br>
<h1>Clase 8 Atributos de componentes</h1>
<br><br>
<ProductList v-bind:products="products"/> -->

<div>
  <AppHeader />
  <RouterView></RouterView>
</div>

</template>

<style scoped>
  #app{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>