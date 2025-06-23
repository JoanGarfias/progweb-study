<template>
  <HeaderCalc />
  <CalcDivisa />
</template>

<script>
import HeaderCalc from './components/HeaderCalc.vue';
import CalcDivisa from './components/CalcDivisa.vue';

export default {
  name: 'App',
  components: {
    HeaderCalc,
    CalcDivisa
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
