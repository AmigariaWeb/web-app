<script setup>
import { RouterLink } from 'vue-router'
import { useHeaderNavStore } from "@/stores/HeaderNavBar.js"
import AppNavLogin from "@/components/AppLogin/AppNavLogin.vue"
import AppLoginGoogle from '@/components/AppLoginGoogle.vue'
const store = useHeaderNavStore();

const routes = [
  { name: "Actividades", path: "/" },
  { name: "Talleres", path: "/workshops" },
  { name: "Mis Actividades", path: "/myactivities" },
]

</script>

<template>
  <nav :class="store.isMobile ? 'app-header-nav' : 'app-header-nav-desktop'">
    <ul v-if="$route.name === 'Iniciar sesion' || $route.name === 'Registrarse'">
          <li>
            <AppLoginGoogle/>
          </li>
          <li>
              <RouterLink :to="{ path: '/login'}">Iniciar sesion</RouterLink>
          </li>
          <li>
              <RouterLink :to="{ name: 'Registrarse'}">Registrase</RouterLink>
          </li>
    </ul>
    <ul v-else>
      <li v-for="route in routes">
        <RouterLink :to="route.path">{{ route.name }}</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ path: '/login' }">Cerrar sesion</RouterLink>
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
    align-items: center;

    li {
      width: 100%;
      display: flex;
      justify-content: center;

      a {
        font-size: 1.2rem;
        display: block;
        color: var(--clr-dark-blue-shadow);
        background-color: var(--clr-yellow-light);
        text-align: center;
        text-decoration: none;
      }
    }
  }

  .router-link-exact-active {
    font-weight: 700;
    background-color: var(--clr-green-light);
    border: 4px solid var(--clr-green-dark);
  }
}
.app-header-nav {
  width: inherit;
  height: inherit;
  justify-content: center;

  ul {
    flex-direction: column;
    gap: 2rem;

    a {
      padding: 1rem;
      border-radius: 2rem;
      border: 4px solid var(--clr-yellow-shadow);
      width: min(100%, 15rem);
    }
  }
}

.app-header-nav-desktop {
  ul {
    a {
      padding: 0.2rem;
      border: 4px solid var(--clr-yellow-shadow);
      border-left: 2px solid var(--clr-yellow-shadow);
      border-right: 4px solid var(--clr-yellow-shadow);
      width: 100%;
    }
  }
}
</style>