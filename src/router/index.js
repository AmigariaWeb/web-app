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
  ]
})

export default router
