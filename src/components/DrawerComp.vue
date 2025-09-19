<template>
    <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
      <q-scroll-area
         style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
        >
        <q-list padding>
          <q-item clickable v-ripple to="/" active-class="my-menu-link" exact>
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section> Início </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/about" active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section> Sobre </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/row" active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section> Rows </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/form" active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section> Forms </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
</template>

<script setup>
    import { ref } from 'vue'
    const drawer = ref(false)


</script>

<style scoped>

</style>