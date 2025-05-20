<script setup lang="ts">
/*Acá va toda la lógica de JavaScript o Typescript */
    import { ref } from "vue";
    const saludo = ref("Hola mundo desde un componente de un solo archivo");
</script>

<template>
    <!-- HTML - ESTRUCTURA DEL COMPONENTE -->
    <div class="container">
        {{ saludo }}
    </div>
</template>

<style scoped>
    /**El scoped nos permite que otros estilos no sobrescriban los estilos de este componente apesar
    de que se llamen igual en clases o id.
    */
    .container {
        display: flex;
        justify-content: center;
        width: 100%;
        align-items: center;
        text-align: center;
    }
</style>