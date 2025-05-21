<script setup lang="ts">
    import { reactive, ref } from "vue";
    
    const msg = ref<string>('Hola mundo');
    const isVisible = ref<boolean>(true);
    const total = ref<number>(100);

    const user = reactive <User>({
        firstName: "Joan Pablo",
        lastName: "Garfias",
        age: 20,
        isAdult: false,
    })

    interface User{
        firstName: string,
        lastName: string,
        age: number,
        isAdult: boolean
    }

</script>

<template>
    <h1>Clase 1 componentes reactivos</h1>
    <div>
        <input v-show="isVisible" v-model="msg" type="text" />
        <input v-on:click="isVisible = !isVisible" type="checkbox" />
        {{ msg }}
    </div>
</template>

<style scoped>

</style>