import { createRouter, createWebHistory } from 'vue-router'
import ActivitiesView from '@/views/ActivitiesView.vue';
import AppLogin from'@/components/AppLogin.vue'
import AppRegister from'@/components/AppRegister.vue'

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
    {
      path: "/login",
      name:" - ",
      component:() => import('@/views/LoginRegisterView.vue'),
      children: [{
        name:"Iniciar sesion",
        path: '',
        component: AppLogin,
      },
      {
        name:"Registrarse",
        path: 'register',
        component: AppRegister,
      }]
    }
  ]
})

export default router
