<script lang="ts" setup>
const props = defineProps<{
  id: number | string;
  text: string;
  completed: boolean;
}>();

const emit = defineEmits<{
  (e: 'toggle', id: number | string): void;
}>();

const toggle = () => {
  emit('toggle', props.id);
};
</script>

<template>
  <label
    class="flex cursor-pointer items-center rounded-md border border-white p-2 shadow-sm transition-colors duration-500 focus-within:border-slate-400 hover:border-slate-400"
    :class="completed ? 'bg-gray-100' : 'bg-white'"
  >
    <div class="m-1 ml-3 flex-shrink-0 align-middle">
      <input
        type="checkbox"
        :checked="completed"
        @change="toggle"
        class="outline-1 outline-purple-400"
      />
    </div>
    <div
      class="text-md ml-6 leading-tight"
      :class="completed ? 'text-gray-500' : 'text-gray-900'"
    >
      {{ text }}
    </div>
  </label>
</template>
