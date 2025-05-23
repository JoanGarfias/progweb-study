<script setup lang="ts">

    import { onUpdated, onMounted, onUnmounted, ref } from 'vue';

    onMounted(() => {
        console.log("Montando componente...");
    });

    onUnmounted(() => {
        console.log("Desmontando componente...");
    });

    onUpdated(() => {
        console.log("Actualizando componente...");
    })

    const message = ref("Hola Joann");

</script>

<template>
    <div>
        {{ message }}
    </div>
    <br>
    <input type="text" v-model="message">
</template>

<style scoped>

</style>