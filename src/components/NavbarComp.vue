<template>
    <div>
    <q-header>
      <q-toolbar class="bg-dark text-white" id="nav">
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <!-- <q-item clickable tag="router-link" to="/home" class="router_logo">
          <img src="/src/assets/login2.png" id="logo">
        </q-item> -->
        <q-toolbar-title>CineShare</q-toolbar-title>
        
        <q-btn @click="logout()" id="links">
          <q-icon name="logout" />
          Sair
        </q-btn>
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
              <q-item clickable :active="menuItem.label === 'Home'" v-ripple :to="menuItem.link" :class="menuItem.class">
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
  import {logoutUser} from "src/services/authServices";
  import { useQuasar } from "quasar";
  import { useRouter } from "vue-router";

  const $q = useQuasar()
  const router = useRouter();
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
  {
    icon: 'logout',
    label: 'Sair',
    separator: false,
    link: '',
    class: 'absolute-bottom'
  },
  
]

async function logout() {
  try{
    await logoutUser()
    $q.notify({
      message: "Logout realizado com sucesso!",
      icon: 'logout',
      color: 'primary',
      textColor: 'white'
    })
    router.push("/login");
  }
  catch(error){
    $q.notify({
      message: "Erro ao fazer logout" + error.message,
      icon: 'warning',
      color: 'primary',
      textColor: 'white'
    })
  }
}

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
        width: 80px;
        height: 80px;
    }
    #links {
        text-decoration: none;
        margin: 12px;
    }
    #links:hover {
        color: white;
    }
</style>