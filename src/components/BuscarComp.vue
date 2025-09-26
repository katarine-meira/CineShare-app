<template>
    <div class="q-pa-md row justify-center q-mt-md">
        <q-input rounded outlined v-model="text" type="search" label="Buscar filmes e séries" 
        class="col-10 col-sm-8 col-md-6 col-lg-5">
            <template v-slot:append>
            <q-icon name="search"/>
            </template>
      </q-input>
    </div>
</template>
<script setup>
import { ref, watch } from "vue";
    const text = ref('');
    
    //defineEmits é a forma oficial do vue 3 para substituir o $emit
    const emit = defineEmits(["update:search"])
    watch(text, (newValue) => {
        emit("update:search", newValue);
    });

</script>
    
<style scoped>

</style>