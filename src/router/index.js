import { createRouter, createWebHistory } from 'vue-router'
import ActivitiesView from '@/views/ActivitiesView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name:"Activities",
      component:ActivitiesView
    },
    {
      path: "/workshops",
      name:"Workshops",
      component:() => import('@/views/WorkshopsListView.vue')
    },
    {
        path: '/workshops/:slug',
        component: () => import('@/views/WorkshopShowView.vue'),
    },
    {
      path: "/myactivities",
      name:"MyActivities",
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
