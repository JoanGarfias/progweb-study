<script setup lang="ts">
    import { ref, watch} from 'vue';

    const msg = ref<string>("Hola Pablito");
    const error = ref<string>("");

    watch(msg, (m) => {
        if(!m){ //Si m es vacio...
            error.value = "Este campo es obligatorio";
        }
        else{
            error.value = "";
        }
    })

</script>

<template>
    <div>
        <div>
            Mensaje: {{ msg }}
        </div>
        <br>
        <input type="text" v-model="msg"/>
        <br>
        <span style="color: red">{{ error }}</span>
    </div>
</template>

<style scoped>

</style>