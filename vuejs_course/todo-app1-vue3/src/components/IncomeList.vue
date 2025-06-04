<template>
    <div class="income-list">
      <div v-for="(income, index) in incomes" :key="index" class="income-item">
        <span>{{ income.concept }}</span>
        <span>${{ income.amount }}</span>
        <span>{{ income.date }}</span>
        <button @click="$emit('delete-income', index)">🗑️</button>
      </div>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'IncomeList',
    props: {
      incomes: {
        type: Array as () => {
            concept: string;
            amount: number;
            date: string }[],
            required: true,
      },
    },
  });
</script>
  
<style scoped>
  .income-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .income-item {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr auto;;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;  
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
  button:hover {
    color: red;
  }
</style>