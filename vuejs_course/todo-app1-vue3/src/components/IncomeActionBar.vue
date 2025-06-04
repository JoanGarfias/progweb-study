<template>
    <div class="action-bar">
      <input v-model="concept" type="text" placeholder="Concepto" required />
      <input v-model.number="amount" type="number" placeholder="Monto" required />
      <input v-model="date" type="date" required />
      <button @click="handleAddIncome">Agregar</button>
    </div>
    <p v-if="errorShow" class="error-message">Por favor, completa todos los campos correctamente.</p>
</template>
  
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'IncomeActionBar',
    emits: ['add-income'],
    setup(_, { emit }) {
      const concept = ref('');
      const amount = ref<number | null>(null);
      const date = ref('');
      const errorShow = ref(false);
  
      const handleAddIncome = () => {
        if (!concept.value || !amount.value || !date.value || amount.value <= 0) {
          errorShow.value = true;
          return;
        }
        emit('add-income', { concept: concept.value, amount: amount.value, date: date.value });
        concept.value = '';
        amount.value = null;
        date.value = '';
        errorShow.value = false;
      };
  
      return { concept, amount, date, errorShow, handleAddIncome };
    },
  });
</script>
  
<style scoped>
  .action-bar {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    width: 90%;
    justify-content: center;
    margin: 0 auto;
  }
  input {
    padding: 5px;
    font-size: 14px;
    border-style: dotted;
    border-bottom-color: #000;
  }
  button {
    padding: 5px 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
  .error-message {
    color: red;
    font-size: 14px;
    margin-top: 10px;
    text-align: center;
  }
</style>