import Sidebar from '@/components/Sidebar.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../components/Contador.vue'),
    },
     {
      path: '/lista-de-tareas',
      name: 'listaDeTareas',
      component: () => import('../components/ListaDeTareas.vue'),
    },
  ],
})

export default router
