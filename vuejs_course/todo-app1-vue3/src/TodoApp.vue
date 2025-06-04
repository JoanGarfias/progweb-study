<script lang="ts" setup>
import { ref } from 'vue';
import TodoComponent from '@/components/TodoComponent.vue';

const todos = ref([
  {
    id: 1,
    text: 'Create Vue 3 Todo App',
    completed: true,
  },
  {
    id: 2,
    text: 'Create Apostrophe Webpack configuration module',
    completed: true,
  },
  {
    id: 3,
    text: 'Implement the Vue 3 Todo App in Apostrophe',
    completed: true,
  },
  {
    id: 4,
    text: 'Do the demo',
    completed: false,
  },
]);
</script>

<template>
  <div class="container mx-auto mt-4" data-todo-app>
    <h1 class="p-2 text-center text-3xl font-bold">
      Vue 3 Todo App with Vite and Typescript
    </h1>
    <TodoComponent :todos="todos" />
  </div>
</template>
