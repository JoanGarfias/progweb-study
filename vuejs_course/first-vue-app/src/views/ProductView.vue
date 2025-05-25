<template>
    <ProductList v-bind:products="products"/>
    <div>
        El producto que quieres ver es id: {{ id_producto }}
    </div>

</template>

<script setup lang="ts">

import { useRouter, useRoute } from 'vue-router';
import ProductList from '@/components/products/product-list.vue';
import type { Product } from '@/interfaces/Product';

const router = useRouter();
const route = useRoute(); //Este tiene parametros en route.params

const id_producto = route.params.id;

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
</script>

<style scoped>

</style>