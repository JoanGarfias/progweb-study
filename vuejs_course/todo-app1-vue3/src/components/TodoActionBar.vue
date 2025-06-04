<script lang="ts" setup>
import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'create', text: string): void;
}>();

const text = ref('');
const create = () => {
  emit('create', text.value);
  text.value = '';
};
</script>

<template>
  <form @submit.prevent="create">
    <div
      class="mx-auto mb-2 flex items-center gap-1 rounded-md border border-white bg-white p-2 shadow-md focus-within:border-slate-400"
    >
      <div class="flex-grow">
        <input
          v-model="text"
          class="w-full pl-3 focus:outline-none"
          type="text"
          placeholder="What task do you need to create?"
        />
      </div>
      <button
        type="submit"
        class="rounded bg-purple-500 py-2 px-3 font-bold text-white transition-colors duration-300 hover:bg-purple-700"
      >
        Add
      </button>
    </div>
  </form>
</template>
