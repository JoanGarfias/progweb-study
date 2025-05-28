<script>

export default {

    name: "TodoItem",
    props: {
        item: Object,
    },
    data(){
        return {

        }
    },
    methods: {
    },
    components(){
    },
    computed: {
    },
}

</script>

<template>

    <div>
        <div class="t-body">
            <h2>{{ item.title }}</h2>
            <input type="checkbox" value="item.completed" />
        </div>
        <div class="todo-actions">
            <button>Eliminar</button>
        </div>
    </div>
</template>

<style scoped>
.todo-item{
    display: flex;
    flex-direction: row;
    border-bottom: solid 1px #ccc;
    padding: 10px;
}

.todo-item:not(.completed):hover{
    background-color: #eee;
}

.completed {
    color: #ccc;
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

.button:hover{
    background-color: #da2020;
    color: white;
}
</style>
