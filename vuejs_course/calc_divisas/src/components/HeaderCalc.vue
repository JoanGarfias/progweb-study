<script>
export default {
  name: 'HeaderCalc',
  data() {
    const opcionesFecha = { day: 'numeric', month: 'long', year: 'numeric' };
    const fechaActual = new Date().toLocaleDateString('es-MX', opcionesFecha);
    return {
      fechaActual
    };
  }
}
</script>

<template>
  <nav>
    <h1>Convertidor de divisas</h1>
    <p>{{ fechaActual }}</p>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  background-color: bisque;
  padding: 0.5rem;
  margin-bottom: 3rem;
}
</style>
