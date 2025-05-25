<template>
    <div>
        <h1>User {{ route.params.id }} </h1>
        <div class="flex flex-row">
            <RouterLink to="profile">Perfil</RouterLink>
            <RouterLink to="post">Post</RouterLink>
        </div>
        <RouterView></RouterView>
    </div>
</template>

<script setup lang="ts">
    import {useRoute} from 'vue-router';
    const route = useRoute();

</script>

<style scoped>

</style>