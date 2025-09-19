const routes = [
  {
    path: '/',
    redirect: '/login' //quando abrir a raiz, vai direto pro login
  },

  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') }, //aqui entra a home
      { path: '/comunidade', component: () => import('pages/ComunidadePage.vue') }
    ]
  },

  {
    path: '/login',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
