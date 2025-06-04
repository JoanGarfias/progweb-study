<script lang="ts" setup>
import { ref, toRef, computed, onMounted } from 'vue';
import NewItem from '@/components/TodoActionBar.vue';
import TodoList from '@/components/TodoList.vue';
import TodoStatusBar from '@/components/TodoStatusBar.vue';

export type ITodoItem = {
  id: number | string;
  text: string;
  completed: boolean;
};

const props = withDefaults(defineProps<{ todos?: ITodoItem[] }>(), {
  todos: () => [],
});

const items = toRef(props, 'todos');
const idCursor = ref(0);

const completed = computed(
  () => items.value.filter((item) => item.completed).length
);
const total = computed(() => items.value.length);

const onToggle = (id: number | string) => {
  const item = items.value.find((item) => item.id === id);
  if (item) {
    item.completed = !item.completed;
  }
};

const onCreate = (text: string) => {
  if (!text) return;
  idCursor.value += 1;
  items.value.push({
    id: items.value.length + 1,
    text,
    completed: false,
  });
};

onMounted(() => {
  idCursor.value = items.value.length;
});
</script>

<template>
  <div>
    <TodoStatusBar :completed="completed" :total="total" />
    <NewItem @create="onCreate" />
    <TodoList :items="items" @toggle="onToggle" />
  </div>
</template>
