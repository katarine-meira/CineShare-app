<template>
        <img src="img/wave.png" class="wave" alt="login-wave">
        <div class="row" style="height: 90vh">
            <div class="col-0 col-md-6 flex justify-center content-center">
                <img src="img/login.png" class="responsive tamanho" alt="login-image">
            </div>
            <form-comp/>
        </div>

</template>

<script setup>
import FormComp from 'src/components/FormComp.vue';


</script>

<style scoped>
    .wave{
        position: fixed;
        height: 100%;
        left: 0;
        bottom: 0;
        z-index: -1;
    }

    
    
</style>