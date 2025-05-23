<script setup lang="ts">
import { toRef } from 'vue'
import type { Product } from '@/interfaces/Product';

interface Props {
    products: Product[],
}

const props = defineProps<Props>();
const products = toRef(props, "products");


</script>

<template>
    <div>
        <ul class="flex flex-column gap-m">
            <li v-for="product in products" v-bind:key="product.id" class="flex flex-column gap-xs">
                <div>{{ product.name }}</div>
                <div>{{ product.price }}</div>
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>