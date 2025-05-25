<template>
    <div>
        <img :src="logo" alt="Logo" width="30" />
        <div>
            <ul class="flex flex-row nav">
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
    ul{
        display: flex;
        flex-direction: row;
        gap: 40px;
        list-style: none;
    }

</style>