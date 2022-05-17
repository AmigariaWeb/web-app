<script setup>
import { useUserStore } from '@/stores/useUserStore'
import { onMounted, ref } from 'vue'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

const userStore = useUserStore()
const is_expanded = ref(localStorage.getItem('is_expanded') === 'true')

const toggleMenu = () => {
  is_expanded.value = !is_expanded.value
  localStorage.setItem('is_expanded', is_expanded.value)
}

onMounted(() => {
  if (width.value >= 1720) {
    is_expanded.value = true
    localStorage.setItem('is_expanded', is_expanded.value)
  }
})
</script>

<template>
  <aside :class="`${is_expanded && 'is-expanded'}`">
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="toggleMenu">
        <img class="menu-arrow" src="@/assets/images/arrow2.svg" alt="flecha para abrir menú " />
      </button>
    </div>
    <div class="menu" v-if="userStore.user">
      <RouterLink class="navlink" to="/">
        <img src="@/assets/images/activities-icon.svg" alt="ir actividades" />
        <span class="text">Actividades</span>
      </RouterLink>
      <RouterLink class="navlink" to="/myactivities">
        <img
          src="@/assets/images/myactivities-icon.svg"
          alt="ir mis actividades"
        />
        <span class="text">Mis actividades</span>
      </RouterLink>
      <RouterLink class="navlink" to="/myactivities/form">
        <img
          src="@/assets/images/create-activity-icon.svg"
          alt="ir crear actividad"
        />
        <span class="text">Nueva actividad</span>
      </RouterLink>
      <RouterLink class="navlink" to="/workshops">
        <img src="@/assets/images/workshops-icon.svg" alt="ir talleres" />
        <span class="text">Talleres</span>
      </RouterLink>
      <RouterLink class="navlink" to="/userprofile">
        <img
          v-if="userStore.user.image"
          class="user-image"
          :src="userStore.user.image"
          referrerpolicy="no-referrer"
          alt="imagen de usuario"
        />
        <img
          v-else
          class="user-image"
          src="@/assets/images/amigaria-logo.svg"
        />
        <span class="text userName">{{
          userStore.user.name || 'Usuario'
        }}</span>
      </RouterLink>
      <div class="navlink" @click="userStore.logout()">
        <img src="@/assets/images/logout-icon.svg" alt="cerrar sesión" />
        <span class="text" >
          Cerrar sesión
        </span>
      </div>
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
      top:2rem;
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

      .menu-arrow{
        width: 25px;
      }

      &:hover {
        img {
          transition: 0.3s ease-out;
          transform: scale(1.1);
        }
      }
    }
  }

  .navlink .text {
    opacity: 0;
  }

  .menu {
    flex: 1 1 0;
    margin: 0 -1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5vh ;
    padding-bottom: 2rem;

    @media(max-height:375px){
      &{
        justify-content: space-evenly;
        gap: 0 ;
      }
    }

    .navlink {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;

      img {
        width: 37px;
        min-height: 38px;
      }

      .user-image {
        border-radius: 50%;
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

    .navlink .text {
      transition: 0.3s ease-out;
      opacity: 1;
    }

    .navlink {
      img {
        margin-right: 1rem;
      }

      .text {
        font-size: 1rem;
      }

      .userName {
        max-width: var(--aside-size);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
