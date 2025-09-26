<template>
    <carousel-comp/>
    <buscar-comp v-model:search="search"/>
    <catalogo-comp :filtro = "search"/>
</template>

<script setup>
    import CarouselComp from 'src/components/CarouselComp.vue'
    import BuscarComp from 'src/components/BuscarComp.vue'
    import CatalogoComp from 'src/components/CatalogoComp.vue'
    import {ref} from "vue"
    const search = ref("")

</script>
    
<style scoped>
    /* *{
        margin: 0;
        background-color: #e9e8e8;
    } */
</style>