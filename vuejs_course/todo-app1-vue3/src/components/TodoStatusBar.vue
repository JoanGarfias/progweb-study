<script lang="ts" setup>
defineProps<{
  completed: number;
  total: number;
}>();
</script>

<template>
  <p class="mt-2 text-center">{{ completed }} of {{ total }} completed.</p>
</template>
