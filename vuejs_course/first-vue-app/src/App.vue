<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import SingleFile from './components/single-file.vue';
import ReactivityFile  from './components/reactivity-file.vue';
import ConditionalTest from './components/conditional-test.vue';

</script>

<template>
<ReactivityFile />
<ConditionalTest />
</template>

<style scoped>
  #app{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
