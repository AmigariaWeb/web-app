<script setup>
import { RouterLink } from 'vue-router'
import { useHeaderNavStore } from "@/stores/HeaderNavBar.js"

const store = useHeaderNavStore();

const routes = [
  { name: "Actividades", path: "/" },
  { name: "Talleres", path: "/workshops" },
  { name: "Mis Actividades", path: "/myactivities" },
  { name: "Crear Actividad", path: "/myactivities/form" }
]

</script>

<template>
  <nav :class="store.isMobile ? 'app-header-nav' : 'app-header-nav-desktop'">
    <ul>
      <li v-for="route in routes">
        <RouterLink :to="route.path">{{ route.name }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>


<style lang="scss" scoped>
.app-header-nav-desktop,
.app-header-nav {
  margin-bottom: 44px;

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

      a {
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

    a {
      padding-block: 1rem;
      border-radius: 2rem;
      border: 4px solid var(--clr-green-dark);
      width: min(100%, 15rem);
    }
  }

  .router-link-exact-active {
    font-weight: 700;
    background-color: var(--clr-emphasis-light);
    border: 4px solid transparent;
  }
}

.app-header-nav-desktop {
  ul {
    gap: 0.625rem;
    min-height: 90px;

    a {
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