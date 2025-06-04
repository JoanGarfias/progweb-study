<template>
  <div class="app-container">
    <h1 class="title">Control de Ingresos <span class="total-label">Tus ingresos: ${{ total }}</span></h1>
    <IncomeActionBar @add-income="addIncome" />
    <IncomeList :incomes="incomes" @delete-income="deleteIncome" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import IncomeActionBar from '@/components/IncomeActionBar.vue';
import IncomeList from '@/components/IncomeList.vue';

export default defineComponent({
  name: 'IncomeApp',
  components: { IncomeActionBar, IncomeList },
  setup() {
    const incomes = ref<{ concept: string; amount: number; date: string }[]>([
      { concept: 'Salario', amount: 1500, date: '2025-06-01' },
      { concept: 'Venta de artículos', amount: 300, date: '2025-06-02' },
      { concept: 'Freelance', amount: 500, date: '2025-06-03' },
    ]);
    const total = ref(0);

    const addIncome = (income: { concept: string; amount: number; date: string }) => {
      incomes.value.push(income);
      total.value += income.amount;
    };

    const deleteIncome = (index: number) => {
      total.value -= incomes.value[index].amount;
      incomes.value.splice(index, 1);
    };

    return { incomes, total, addIncome, deleteIncome };
  },
});
</script>

<style scoped>
.app-container {
  padding: 20px;
}
.title {
  font-size: 24px;
  margin-bottom: 20px;
}
.total-label {
  font-size: 18px;
  color: #4caf50;
  margin-left: 10px;
}
</style>