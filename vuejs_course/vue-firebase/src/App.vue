<script>
import { ref } from 'vue';

export default {
  name: 'App',
  data() {
    return {
      products: ref([
        {
          id: 1,
          name: 'Coca-Cola 600ml',
          price: 21.0,
          description: 'Bebida gaseosa de cola en presentación de 600ml.',
        },
        {
          id: 2,
          name: 'Pepsi 600ml',
          price: 18.0,
          description: 'Bebida gaseosa de cola en presentación de 600ml.',
        },
        {
          id: 3,
          name: 'Gansito Marinela',
          price: 31.0,
          description: 'Delicioso pan de chocolate con fresa.',
        },
        {
          id: 4,
          name: 'Galletas Marías Gamesa',
          price: 20.0,
          description: 'Deliciosas galletas tradicionales Maria.',
        }
      ])
    };
  },
  methods: {
    add-product(){
      
    }
  },
  provide() {
    return {
      products: this.products
    };
  },
}
</script>

<template>
  <div id="app">
    <nav>
      <h1>DxInventary</h1>
      <ul>
        <li><router-link :to="{path: '/products', params: {products} }">Productos</router-link></li>
        <li><router-link to="/orders">Ordenes</router-link></li>
        <li><router-link to="/create-order">Cobros</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

:root{
  --color-primary: #FFFFFF;
  --color-secondary: #AAAAAA;
  --color-secondary-light: #888888;
  --color-text-blue: #38BDF8;
  --color-text-green: #10B981;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #fff;
  font-family: "Inter", sans-serif;
}

body{
  background-color: #111111;
}

nav h1{
  color: var(--color-text-green);
  font-size: 2rem;
}

nav{
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #1A1A1A;
  padding: 0.8rem;
  margin-bottom: 2rem;
}

ul{
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: row;
  list-style: none;
  gap: 2rem;
}

li a:hover{
  color: var(--color-text-green);
}

a{
  text-decoration: none;
}

</style>
