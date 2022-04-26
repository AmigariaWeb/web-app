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
      component:() => import('@/views/WorkshopsView.vue')
    },
    {
      path: "/myactivities",
      name:"Mis Actividades",
      component:() => import('@/views/MyActivitiesView.vue')
    },
  ]
})

export default router
