<template>
    <div class="todo" v-bind:class="{completed: registro.completed}">
        <div class="todo-body">
            <input type="checkbox" v-bind:checked="registro.completed" v-bind:onchange="marcarItem"/>
            {{ registro.title }}
        </div>

        <div class="todo-actions">
            <button v-on:click="$emit('delete-todo', registro.id)">Eliminar</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"TodoItem",
    props: ["registro"],
    data(){
        return {
            reg: this.registro,
        }
    },
    methods: {
        marcarItem(){
            this.reg.completed = !this.reg.completed;
        }
    }
};
</script>

<style scoped>
.todo{
    border-bottom: solid 1px #ccc;
    padding: 10px;
}

.todo:not(completed):hover{
    background-color: #eee;
}

.completed{
    color:#ccc;
    text-decoration: line-through;
}

.completed .todo-body{
    text-decoration: line-through;
}

.todo-body,
.todo-actions{
    display: inline-block;
    vertical-align: top;
}

.todo-body{
    width: 85%;
}

.todo-actions{
    padding: 0 10px;
    width: 10%;
}

button{
    border: none;
    border-radius: 3px;
    padding: 10px;
    background-color: #ccc;
    color: black;
}

button:hover{
    background-color: #da2020;
    color: white;
}

</style>