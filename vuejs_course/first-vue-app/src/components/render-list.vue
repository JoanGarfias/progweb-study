<script setup lang="ts">
    import {ref} from 'vue';
    const names = ref<string[]>(["Joan", "Pablo", "Alvarado", "Garfias"]);
</script>

<template>
    <br><br>
    <div>
        <ul>
            <li v-for="name in names" v-bind:key="name"> <!--VueJS reconoce con v-bind:key un elemento para
                no volver a renderizarlo-->
                {{ name }}
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>