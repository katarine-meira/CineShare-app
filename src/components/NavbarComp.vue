<template>
    <div>
    <q-header>
      <q-toolbar class="bg-black text-white" id="nav">
        <!-- Logo como link -->
        <!-- <q-item clickable tag="router-link" to="/home" class="router_logo">
          <img :src="logo" :alt="alt" id="logo">
        </q-item> -->

        <!-- Links -->
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>CineShare</q-toolbar-title>
        <router-link to="/login" id="links">Login</router-link>
        <router-link to="/home" id="links">Home</router-link>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
        bordered
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      >
        <q-scroll-area class="fit">
          <q-list>
            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item clickable :active="menuItem.label === 'Home'" v-ripple :to="menuItem.link">
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const drawer = ref(false)

  const menuList = [
  {
    icon: 'home',
    label: 'Home',
    separator: true,
    link: '/home'
  },
  {
    icon: 'group',
    label: 'Comunidade',
    separator: false,
    link: '/comunidade'
  },
  {
    icon: 'bookmark',
    label: 'Salvos',
    separator: false,
    link: ''
  },
  {
    icon: 'military_tech',
    label: 'Hanking',
    separator: false,
    link: ''
  },
  {
    icon: 'notifications',
    label: 'Notificações',
    separator: true,
    link: ''
  },
  {
    icon: 'account_circle',
    label: 'Perfil',
    separator: false,
    link: ''
  },
  {
    icon: 'settings',
    label: 'Configurações',
    separator: false,
    link: ''
  },
  
]

</script>

<style scoped>
    #nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .router_logo {
        margin: auto;
        margin-left: 0;
    }
    #logo {
        width: 40px;
        height: 40px;
    }
    #links {
        color: #fcba03;
        text-decoration: none;
        margin: 12px;
    }
    #links:hover {
        color: white;
    }
</style>