<template>
    <div class="q-pa-md row justify-center q-mt-md">
        <q-input rounded outlined v-model="search" type="search" label="Buscar filmes e séries" class="col-10 col-sm-8 col-md-6 col-lg-5">
            <template v-slot:append>
            <q-icon name="search"/>
            </template>
      </q-input>
    </div>
</template>
<script setup>
import { ref } from "vue";
    const search = ref('')
</script>
    
<style scoped>

</style>