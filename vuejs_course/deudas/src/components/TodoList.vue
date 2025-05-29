<script>

import TodoItem from '@/components/TodoItem.vue';

export default{

    name: "TodoList",
    props: {
        listaT: [],
    },
    data(){
        return {

        }
    },
    methods: {
    },
    components: {
        TodoItem,
    },
    computed: {
    },
}

</script>

<template>
    <div class="">
        <div v-for="elem in listaT" :key="elem.id">
            <TodoItem :item="elem"/>
        </div>
    </div>

</template>

<style>

</style>
