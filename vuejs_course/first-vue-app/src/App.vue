<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import SingleFile from './components/single-file.vue';
import ReactivityFile  from './components/reactivity-file.vue';
import ConditionalTest from './components/conditional-test.vue';
import RenderList from './components/render-list.vue';
import ComputedSample from './components/computed-sample.vue';
import EventHandling from './components/event-handling.vue';

</script>

<template>
<ReactivityFile />
<ConditionalTest />
<RenderList />
<br><br>
<h1>Clase 3 Propiedades computadas</h1>
<br><br>
<ComputedSample />
<br>
<h1>Clase 4 Eventos</h1>
<br><br><br>
<EventHandling />
</template>

<style scoped>
  #app{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>