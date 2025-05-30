<template>
    <div>
        <div v-bind:key="item.id" v-for="item in listaT" >
            <TodoItem v-bind:registro="item" v-on:delete-todo="$emit('delete-todo', item.id)"/>
        </div>
    </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default{
    name: "TodoList",
    props: ["listaT"],
    components: {TodoItem},
};
</script>