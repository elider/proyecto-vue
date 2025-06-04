
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../modules/contador/components/Contador.vue'),
    },
     {
      path: '/lista-de-tareas',
      name: 'listaDeTareas',
      component: () => import('../modules/listaDeTareas/components/ListaDetareas.vue'),
    },
     {
      path: '/registrar',
      name: 'registrar',
      component: () => import('../modules/registro/views/RegistrarView.vue'),
    },
  ],
})

export default router
