<template>
  <div id="header"><h1>Lista de Tareas</h1></div>
  <div class="body">
    <div id="main-container">
        <div class="todo-add">
            <h3>Agrega una tarea</h3>
            <div class="todo-addItem">
                <TodoAdd v-bind:listaT="lista" @todoAdded="agregarTodo" />
            </div>
        </div>
        <h3>Contenido</h3>
        <TodoList v-bind:listaT="lista" @registroTodo="agregarTodoList" v-on:delete-todo="deleteItemList"/>
    </div>
  </div>

</template>

<script>
import TodoList  from './components/TodoList.vue';
import TodoAdd from './components/TodoAdd.vue';

export default {

  name: 'App',
  components: {
    TodoList,
    TodoAdd,
  },
  data(){
    return{
      lista: [
        {id: 0, title: "Hacer el super", completed: false},
        {id: 1, title: "Lavar el carro", completed: true},
        {id: 2, title: "Limpiar mi cuarto", completed: false},
        {id: 3, title: "Hacer tarea", completed: false},
      ],
      copyT: [],
    };
  },
  created(){
    this.copyT = [...this.lista];
  },
  methods: {
    agregarTodo(newItem){
        console.log(newItem);
        this.lista.push(newItem);
    },
    deleteItemList(id){
        const itemIndex = this.lista.findIndex((p) => p.id === id);
        console.log("El indice en el array a eliminar es: ", itemIndex);
        this.lista.splice(itemIndex, 1);
        this.copyT = [...this.lista];
        console.log(this.lista);
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

*{
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
}

body{
  font-size: 1.5em;
  padding: 0;
  margin: 0;
}

#main-container{
  border: solid 1px #ccc;
  width: 600px;
  margin: 100px auto;
}

#header{
  background: rgb(24, 23, 23);
  padding: 10px;
    color: #ccc;
}

h1{
  padding: 0 10px;
}

.todo-add{
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

.todo-addItem{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

</style>