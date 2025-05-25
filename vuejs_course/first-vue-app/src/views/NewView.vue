<script setup lang="ts">
    import useProduct from '@/composable/useProduct.ts';
    const { name, price, isAvailable, submit} = useProduct();
</script>

<template>
    <div>
        <h1>New view</h1>
        <div class="flex flex-column gap-xs">
            <label>Nombre: </label>
            <input type="text" v-model="name" />
        </div>
        <div class="flex flex-column gap-xs">
            <label>Precio: </label>
            <input type="number" v-model="price"/>
        </div>
        <div class="flex flex-column gap-xs">
            <label>Está disponible: </label>
            <input type="checkbox" v-model="isAvailable" />
        </div class="flex flex-column gap-xs">
        <button type="button" @click="submit">Guardar</button>
    </div>
</template>

<style scoped>

</style>