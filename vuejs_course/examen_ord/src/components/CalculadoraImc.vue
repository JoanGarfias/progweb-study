<template>
  <div class="imc-calculator">
    <h1>Calculadora de IMC</h1>
    <form @submit.prevent="calcularIMC">
      <div>
        <label for="peso">Peso (kg):</label>
        <input id="peso" v-model.number="peso" type="number" step="0.1" min="0" required />
      </div>
      <div>
        <label for="altura">Altura (m):</label>
        <input id="altura" v-model.number="altura" type="number" step="0.01" min="0" required />
      </div>
      <button type="submit">Calcular IMC</button>
    </form>
    <div v-if="imc > 0">
      <h2>Tu IMC es: {{ imc.toFixed(2) }}</h2>
      <h3>{{ categoriaIMC }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalculadoraImc',
  data() {
    return {
      peso: 0,
      altura: 0,
      imc: 0,
      categoriaIMC: ''
    }
  },
  methods: {
    calcularIMC() {
      if (this.peso > 0 && this.altura > 0) {
        this.imc = this.peso / (this.altura * this.altura);
        this.categoriaIMC = this.obtenerCategoriaIMC(this.imc);
      } else {
        this.imc = 0;
        this.categoriaIMC = '';
      }
    },
    obtenerCategoriaIMC(imc) {
      if (imc < 16) return 'Infrapeso: Delgadez Severa';
      if (imc < 17) return 'Infrapeso: Delgadez moderada';
      if (imc < 18.5) return 'Infrapeso: Delgadez aceptable';
      if (imc < 25) return 'Peso normal';
      if (imc < 30) return 'Sobrepeso';
      if (imc < 35) return 'Obeso: Tipo I';
      if (imc < 40) return 'Obeso: Tipo II';
      return 'Obeso: Tipo III';
    }
  }
}
</script>

<style scoped>
.imc-calculator {
  max-width: 400px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fafafa;
}
.imc-calculator h1 {
  margin-bottom: 20px;
}
.imc-calculator form > div {
  margin-bottom: 12px;
}
.imc-calculator label {
  margin-right: 8px;
}
.imc-calculator input {
  width: 100px;
  padding: 4px;
}
.imc-calculator button {
  padding: 6px 16px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.imc-calculator button:hover {
  background: #369870;
}
</style>
