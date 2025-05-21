<script setup lang="ts">
    import {ref} from 'vue';
    const names = ref<string[]>(["Joan", "Pablo", "Alvarado", "Garfias"]);

    interface User{
        id: number,
        firstName: string,
        lastName: string,
        age: number
    }

    const users = ref<User[]>([
        {
            id: 1,
            firstName: "Joan",
            lastName: "Pablo",
            age: 20
        },
        {
            id: 2,
            firstName: "Marait",
            lastName: "Sanchez",
            age: 21
        },
        {
            id: 3,
            firstName: "Elvi",
            lastName: "Padilla",
            age: 42
        }
    ]);

</script>

<template>
    <br><br>
    <div>
        <h1>Nombres</h1>
        <ul>
            <li v-for="name in names" v-bind:key="name"> <!--VueJS reconoce con v-bind:key un elemento para
                no volver a renderizarlo-->
                {{ name }}
            </li>
        </ul>


        <br><br>

        <ul>
            <li v-for="user in users" v-bind:key="user.id"> <!--v-bind:key tiene que tener
                un valor unico para evitar renderizar todo, es para optimización-->
                {{ user.firstName }} {{ user.lastName }} {{ user.age }}
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>