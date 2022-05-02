<script setup>
import { RouterLink } from 'vue-router'
import { useHeaderNavStore } from "@/stores/HeaderNavBar.js"
import { useUserStore } from "@/stores/useUserStore.js"
import AppNavLogin from "@/components/AppLogin/AppNavLogin.vue"
import AppLoginGoogle from '@/components/AppLogin/AppLoginGoogle.vue'

const headerNavStore = useHeaderNavStore();
const userStore = useUserStore();

const routes = [
  { name: "Actividades", path: "/" },
  { name: "Talleres", path: "/workshops" },
  { name: "Mis Actividades", path: "/workinprogress" },
  { name: "Crear Actividad", path: "/myactivities/form" }
]

</script>

<template>
  <nav :class="headerNavStore.isMobile ? 'app-header-nav' : 'app-header-nav-desktop'">
    <ul v-if="$route.name === 'Iniciar sesión' || $route.name === 'Registrarse'">

    </ul>
    <ul v-else>
      <li v-for="route in routes">
        <RouterLink class="navLink" :to="route.path">{{ route.name }}</RouterLink>
      </li>
      <li>
        <button class="navLink" @click="userStore.logout()">Cerrar sesión</button>
      </li>
    </ul>
  </nav>
</template>


<style lang="scss" scoped>
.app-header-nav-desktop,
.app-header-nav {

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    li {
      width: 100%;
      display: flex;
      justify-content: center;

      .navLink {
        font-size: 1.2rem;
        display: block;
        color: var(--clr-dark-blue-shadow);
        background-color: var(--clr-green-light);
        text-align: center;
        text-decoration: none;
      }
    }
  }
}

.app-header-nav {
  width: inherit;
  height: inherit;
  justify-content: center;

  ul {
    flex-direction: column;
    gap: 2rem;

   .navLink {
      padding-block: 1rem;
      border-radius: 2rem;
      border: 4px solid var(--clr-green-dark);
      width: min(100%, 15rem);
      transition: transform 0.3s ease;

      &:hover{
        cursor: pointer;
        transform: scale(1.05);
      }
    }
  }

  .router-link-exact-active {
    font-weight: 700;
    background-color: var(--clr-emphasis-light);
    border: 4px solid transparent;
  }
}

.app-header-nav-desktop {
  position: sticky;
  top: var(--header-size);
  z-index: 2;
  ul {
    gap: 0.625rem;
    min-height: 90px;

    .navLink {
      box-shadow: 0px 7px 0px #00000015;
      padding-block: 0.5rem;
      width: 100%;
      border-radius: 0px 0px 20px 20px;
    }
  }

  .router-link-exact-active {
    font-weight: 700;
    background-color: var(--clr-yellow-light);
  }
}
</style>