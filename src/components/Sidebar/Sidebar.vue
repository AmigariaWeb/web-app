
<script setup>
import { useUserStore } from '@/stores/useUserStore';
import { ref } from 'vue';

const userStore = useUserStore()
const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const toggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<template>
  <aside :class="`${is_expanded && 'is-expanded'}`">
    <div class="menu" v-if="userStore.user">
      <RouterLink class="button" to="/">
        <img src="@/assets/images/activities-icon.svg" alt="ir actividades">
        <span class="text">Actividades</span>
      </RouterLink>
      <RouterLink class="button" to="/myactivities">
        <img src="@/assets/images/myactivities-icon.svg" alt="ir mis actividades">
        <span class="text">Mis actividades</span>
      </RouterLink>
      <RouterLink class="button" to="/myactivities/form">
        <img src="@/assets/images/create-activity-icon.svg" alt="ir crear actividad">
        <span class="text">Nueva actividad</span>
      </RouterLink>
      <RouterLink class="button" to="/workshops">
        <img src="@/assets/images/workshops-icon.svg" alt="ir talleres">
        <span class="text">Talleres</span>
      </RouterLink>
      <RouterLink class="button" to="/workinprogress">
        <img src="@/assets/images/amigaria-logo.svg" alt="imagen de usuario">
        <span class="text">Usuario</span>
      </RouterLink>
      <div class="button">
        <button class="logout text" @click="userStore.logout()">Cerrar sesión</button>
      </div>
    </div>
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" tabindex="1" @click="toggleMenu">
        <img src="@/assets/images/arrow.svg" alt="flecha para abrir menú ">
      </button>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  position: fixed;
  z-index: 10;
  top: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--clr-dark-blue);
  color: var(--clr-yellow-light);
  width: calc(2rem + 37px);
  min-height: 100vh;
  padding-inline: 1rem;
  transition: 0.3s ease-out;

  .logo {
    margin-bottom: 1rem;

    img {
      width: 37px;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: 0;
    transition: 0.3s ease-out;

    .menu-toggle {
      align-items: center;
      background-color: var(--clr-dark-blue);
      border-radius: 50%;
      border: none;
      bottom: 2rem;
      box-shadow: -2px 0px 0px 2px var(--clr-dark-blue-shadow);
      cursor: pointer;
      display: flex;
      justify-content: center;
      left: 2rem;
      min-height: 44px;
      min-width: 44px;
      position: relative;
      transition: 0.3s ease-out;
      z-index: 11;

      &:hover {
        img {
          transition: 0.3s ease-out;
          transform: scale(1.1);
        }
      }
    }
  }


  .button .text {
    opacity: 0;
  }

  .menu {
    flex: 1 1 0;
    margin: 0 -1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;

      img {
        width: 37px;
      }

      .text {
        color: var(--clr-emphasis-light);
        font-weight: 700;
        white-space: nowrap;
        font-size: 0px;
      }

      &:hover,
      &.router-link-exact-active {
        background-color: var(--clr-dark-blue-shadow);
      }

      &.router-link-exact-active {
        border-right: 5px solid var(--clr-green-light);
      }
    }

    .logout {
      background-color: transparent;
      color: var(--clr-emphasis-light);
      border: none;
    }
  }

  &.is-expanded {
    width: var(--aside-size);

    .menu-toggle-wrap {
      transition: 0.3s ease-out;

      .menu-toggle {
        transition: 0.3s ease-out;
        transform: rotate(-180deg);
      }
    }

    .button .text {
      opacity: 1;
    }

    .button {
      img {
        margin-right: 1rem;
      }

      .text {
        font-size: 1rem;
      }
    }
  }
}
</style>