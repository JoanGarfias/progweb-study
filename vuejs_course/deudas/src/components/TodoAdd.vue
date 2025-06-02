<template>
    <div id="add-container">
        <form @submit="agregarTodo">
            <input type="checkbox" v-model="isCompleted"/>
            <input type="text" v-model="nombreTodo"/>
            <button type="submit">Agregar</button>
        </form>
    </div>
</template>

<script>

export default{
    name: "TodoAdd",
    props: ["listaT"],
    data() {
        return {
            nombreTodo: "",
            isCompleted: false,
        }
    },
    methods: {
        agregarTodo(event){
            event.preventDefault();
            const newItem = {
                id: this.listaT.length + 1,
                title: this.nombreTodo,
                completed: this.isCompleted,
            }
            this.$emit('todoAdded', newItem);
            this.isCompleted = false;
            this.nombreTodo = "";
        }
    }
};
</script>

<style scoped>
#add-container{
    padding: 10px;
}

input{
    padding: 10px;
    outline: none;
    border: solid 1px #ccc;
}

button{
    background-color: rgb(30, 196, 71);
    color: white;
    border: none;
    padding: 10px;
}

</style>