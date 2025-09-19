<template>
  <q-layout view="hHh LpR lFf">
    <navbar-comp/>
    <q-page-container>
      <!-- aqui coloca as pages de home -->
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>
// import {ref} from 'vue';
import NavbarComp from 'src/components/NavbarComp.vue';


</script>

<style>

</style>