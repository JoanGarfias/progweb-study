<script>
    import { ref } from 'vue';

    // Tasas de cambio respecto a USD (ejemplo, pueden actualizarse)
    const rates = {
        USD: 1,
        MXN: 19.19,
        AUD: 1.51,
        EUR: 0.92,
        RUB: 89.5,
        CNY: 7.25
    };

    export default {
        name: 'CalcDivisa',
        data(){
            return {
                monedaOrigen: 'USD',
                monedaDestino: 'MXN',
                cantidad: ref(''),
                resultado: ref(null),
                showResult: false,
                monedas: [
                  { code: 'USD', name: 'Dólar estadounidense' },
                  { code: 'MXN', name: 'Peso mexicano' },
                  { code: 'AUD', name: 'Dólar australiano' },
                  { code: 'EUR', name: 'Euro' },
                  { code: 'RUB', name: 'Rublo ruso' },
                  { code: 'CNY', name: 'Yuan chino' },
                ]
            }
        },
        methods: {
            calcularDivisa (){
                const cantidadNum = parseFloat(this.cantidad);
                if (isNaN(cantidadNum) || cantidadNum <= 0) {
                    this.resultado = null;
                    this.showResult = false;
                    return;
                }
                // Convertir primero a USD, luego a destino
                const cantidadEnUSD = cantidadNum / rates[this.monedaOrigen];
                const resultadoFinal = cantidadEnUSD * rates[this.monedaDestino];
                this.resultado = resultadoFinal;
                this.showResult = true;
            }
        }
    }
</script>

<template>
    <div class="calc-container">
      <form @submit.prevent="calcularDivisa" class="calc-form">
          <label for="GET-cantidad">Cantidad</label>
          <input type="number" min="0" step="any" v-model="cantidad" id="GET-cantidad" @change="calcularDivisa" placeholder="Ingresa cantidad" required/>

          <div class="select-group">
            <div>
              <label for="GET-origen">De</label>
              <select class="opcionOrigen" v-model="monedaOrigen" id="GET-origen" @change="calcularDivisa">
                  <option v-for="m in monedas" :key="m.code" :value="m.code">{{ m.code }} - {{ m.name }}</option>
              </select>
            </div>
            <div>
              <label for="GET-destino">A</label>
              <select class="opcionDestino" v-model="monedaDestino" id="GET-destino" @change="calcularDivisa">
                  <option v-for="m in monedas" :key="m.code" :value="m.code">{{ m.code }} - {{ m.name }}</option>
              </select>
            </div>
          </div>
          <button type="submit" :disabled="!cantidad || parseFloat(cantidad) <= 0" class="convert-btn">Convertir</button>
      </form>
      <transition name="fade">
        <div v-if="showResult" class="resultados">
            <p class="origenLab label">{{ cantidad }} {{ monedaOrigen }}</p>
            <p class="sonLab label">SON</p>
            <p class="destinoLab label">{{ resultado.toLocaleString(undefined, {maximumFractionDigits: 2}) }} {{ monedaDestino }}</p>
        </div>
      </transition>
    </div>
</template>

<style scoped>
.calc-container {
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.calc-form {
    background: #fff8f0;
    border-radius: 1.5rem;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    padding: 2.5rem 2rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    max-width: 800px;
    margin-bottom: 2rem;
}
.calc-form label {
    font-weight: 600;
    margin-bottom: 0.3rem;
    color: #7a4c15;
}
.calc-form input[type="number"] {
    padding: 0.7rem 1rem;
    border-radius: 0.7rem;
    border: 1px solid #e0c9a6;
    font-size: 1.1rem;
    outline: none;
    transition: border 0.2s;
}
.calc-form input[type="number"]:focus {
    border: 1.5px solid #c19a6b;
}
.select-group {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    justify-content: space-between;
}
.select-group label {
    display: block;
    margin-bottom: 0.2rem;
}
.calc-form select {
    padding: 0.5rem 1rem;
    border-radius: 0.7rem;
    border: 1px solid #e0c9a6;
    font-size: 1rem;
    background: #fff;
    outline: none;
    transition: border 0.2s;
}
.calc-form select:focus {
    border: 1.5px solid #c19a6b;
}
.convert-btn {
    background: #c19a6b;
    color: #fff;
    font-weight: 700;
    border: none;
    border-radius: 0.7rem;
    padding: 0.9rem 0;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background 0.2s, box-shadow 0.2s;
    box-shadow: 0 2px 8px rgba(193,154,107,0.08);
}
.convert-btn:disabled {
    background: #e0c9a6;
    cursor: not-allowed;
}
.resultados {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
}
.label {
    background-color:burlywood;
    font-weight: 700;
    padding: 1rem 2rem;
    border-radius: 1rem;
    font-size: 1.2rem;
    color: #7a4c15;
    box-shadow: 0 2px 8px rgba(193,154,107,0.08);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>