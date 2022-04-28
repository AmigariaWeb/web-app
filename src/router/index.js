import { createRouter, createWebHistory } from 'vue-router'
import ActivitiesView from '@/views/ActivitiesView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name:"Actividades",
      component:ActivitiesView
    },
    {
      path: "/workshops",
      name:"Talleres",
      component:() => import('@/views/WorkshopsListView.vue')
    },
    {
        path: '/workshops/:slug',
        component: () => import('@/views/WorkshopShowView.vue'),
    },
    {
      path: "/myactivities",
      name:"Mis Actividades",
      component:() => import('@/views/MyActivitiesView.vue')
    },
    {
      path: "/myactivities/form",
      name:"Crear Actividad",
      component:() => import('@/views/ActivityFormView.vue')
    },
  ]
})

export default router
