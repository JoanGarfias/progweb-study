<script setup lang="ts">

    import { reactive, computed } from 'vue';

    const cart = reactive({
        category: 'hosting',
        description: 'Carrito de compras de Joan',
        currency: 'USD',
        items: [
            {
                id: 1,
                name: 'basic',
                price: 20,
            },
            {
                id: 2,
                name: 'medium',
                price: 30,
            },
            {
                id: 3,
                name: 'pro',
                price: 40,
            }
        ]
    })

    const msg = computed( () => {
        return cart.description;
    });

    const totalPrice = computed( () => {
        return cart.items.reduce((accumulator, current) => accumulator + current.price, 0);
    });

</script>

<template>
    <div>
        {{ msg }} {{ totalPrice }}
    </div>
</template>

<style scoped>

</style>