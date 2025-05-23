<template>
    <div>
        <img :src="logo" alt="Logo" width="30" />
        <div>
            <ul class="flex flex-row">
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
    import logo from "@/assets/logo.svg"
</script>

<style scoped>

</style>