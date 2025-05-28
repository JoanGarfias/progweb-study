<script>

import SearchInput from '@/components/SearchInput.vue';
import TodoList from '@/components/TodoList.vue';

export default{
    
    data(){
        return {
            lista: [
                {
                    id: 0,
                    title: "Hacer la tarea",
                    completed: false,
                },
                {
                    id: 1,
                    title: "Ir de compras",
                    completed: true,
                }
            ]
        }
    },
    methods: {
    },
    components: {
        SearchInput,
        TodoList
    },
    computed: {
    },
    created(){
        this.copyT = [...this.lista];
    }
}

</script>

<template>
<div id="app">
    <div class="search">
        <SearchInput />
    </div>
    <TodoList :listaT="lista"/>
</div>

</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 5px;
}

.body{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5em;
    padding: 0;
    margin: 0;
}

h1{
    padding: 0 10px;
}


.search{
    display: flex;
    justify-content: center;
    background-color: #2c3e50;
}
</style>
