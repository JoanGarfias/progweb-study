<script>

export default {
  name: 'App',
  data() {
    return {
    };
  },
  methods: {
  }
}
</script>

<template>
  <p>Hola</p>
  <div id="app">
    <h1>Bienvenido a la App</h1>
    <nav>
      <router-link to="/products">Productos</router-link>
      <router-link to="/orders">Ordenes</router-link>
      <router-link to="/create-order">Crear orden</router-link>
    </nav>
    <router-view></router-view>
  </div>

</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
