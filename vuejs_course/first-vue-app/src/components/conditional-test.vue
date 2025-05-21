<script setup lang="ts">
    import { ref } from 'vue';

    const text = ref<string>('Hola');
    const isVisibleShow = ref<boolean>(true);
    const isVisibleIf = ref<boolean>(true);
    const age = ref<number>(18);
</script>

<template>

    <h1>Clase 2 v-if y v-show</h1>

    <div v-show="isVisibleShow">
        {{ text }}
    </div>
    <button type="button" v-on:click="isVisibleShow = !isVisibleShow">Cambiar v-show</button>

    <div v-if="isVisibleIf">
        {{ text }}
    </div>
    <div v-else="isVisibleIf">
        No estás visible
    </div>
    <button type="button" v-on:click="isVisibleIf = !isVisibleIf">Cambiar v-if</button>

    <br><br><br>

    <label>Ingresa tu edad</label> <br>
    <input v-model="age">

    <div v-if="age >= 18 && age < 30">
        Eres mayor de edad pero tas chavo
    </div>
    <div v-else-if="age < 18 && age > 0">
        Tas chamaco, no sabes nada de la vida mocoso
    </div>
    <div v-else-if="age < 0">
        Cómo que tienes edad negativa w nmms
    </div>
    <div v-else>
        Eres un dinosaurio, ya ni chavelo
    </div>

</template>

<style scoped>

</style>