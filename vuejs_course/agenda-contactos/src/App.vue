<script>
import NavBar from './shared/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  }
}

</script>

<template>
  <NavBar />
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

  :root{
    --bg-primary: #000;
    --tx-primary: #ffffff;
    --tx-secondary: #999999;
    --tx-borde: #1a1a1a;
    --bg-section: #0d0d0d;
    --tx-acento: #6366f1;
    --success: #00d084;
    --error: #ff5555;
  }

  *{
    font-family: "Inter", sans-serif;
  }

  body{
    background-color: var(--bg-primary);
  }
</style>
