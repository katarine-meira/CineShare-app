<template>
    <q-carousel
      animated
      v-model="slide"
      infinite
      :autoplay="autoplay"
      arrows
   
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1"  img-src="img/carousel/4.png">
        <div class="absolute-bottom custom-caption column items-center text-white">
          <div class="text-h2">Salve filmes</div>
          <div class="text-subtitle1">Encontre filmes para assistir ou salve os assistidos</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="imagem" img-src="img/carousel/2.png" img-position="top">
        <div class="absolute-bottom custom-caption column items-center text-white">
          <div class="text-h2">Compartilhe</div>
          <div class="text-subtitle1">Escreva suas notas e opiniões</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="img/carousel/3.png" >
        <div class="absolute-bottom custom-caption column items-center text-white">
          <div class="text-h2">Siga os amigos</div>
          <div class="text-subtitle1">Veja o que seus amigos estão assistindo</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
</template>

<script setup>
import { ref } from 'vue'

    const slide = ref(1)
    const autoplay = ref(true)

</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto+Flex:opsz@8..144&display=swap');
  .imagem{
    background-position: top; 
    background-size: cover;
  }
  .custom-caption{
    text-align: center;
    padding: 12px;
    color: white;
    background-color: rgba(0, 0, 0, .3);
  }
  *{
     font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  }
</style>