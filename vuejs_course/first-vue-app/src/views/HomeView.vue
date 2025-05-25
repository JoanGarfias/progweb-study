<script setup lang="ts">
import AppHeader from '@/shared/components/layout/AppHeader.vue';
import ProductList from '@/components/products/product-list.vue';
import type { Product } from '@/interfaces/Product';
import useProduct from '@/composable/useProduct';

const {products} = useProduct();

</script>

<template>
    <ProductList :products="products"></ProductList>
    <RouterView></RouterView>
</template>
