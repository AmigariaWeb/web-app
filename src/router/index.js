import { createRouter, createWebHistory } from 'vue-router'
import ActivitiesView from '@/views/ActivitiesView.vue';
import AppLogin from '@/components/AppLogin/AppLogin.vue';
import AppRegister from '@/components/AppLogin/AppRegister.vue';
import ActivityDetailView from '@/views/ActivityDetailView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name:"Actividades",
      component:ActivitiesView
    },
    {
      path: "/activityDetail/:id",
      name:"Actividad",
      component: ActivityDetailView,
      props:true
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
        name:"Iniciar sesión",
        path: '',
        component: AppLogin,
      },
      {
        name:"Registrarse",
        path: 'register',
        component: AppRegister,
      }]
    },
    {
      path: '/workinprogress',
      component: () => import ('@/views/WorkInProgressView.vue') 
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import ('@/views/PageNotFound.vue') 
    },
  ]
})

export default router
