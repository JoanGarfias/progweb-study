<template>
  <CalculadoraImc/>
</template>

<script>
import CalculadoraImc from './components/CalculadoraImc.vue'

export default {
  name: 'App',
  data(){
  },

  components: {
    CalculadoraImc,
  }
}
</script>

<style>
body{
  background-color: #1f1f1f;
}
</style>