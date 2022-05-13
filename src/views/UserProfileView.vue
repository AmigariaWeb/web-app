<script setup>
import { useUserStore } from '../stores/useUserStore'

const userStore = useUserStore()
</script>

<template>
  <main>
    <div class="container">
      <div class="user-details">
        <div class="user-image">
          <img v-if="userStore.user.image" :src="userStore.user.image" alt="imagen de usuario" />
          <img v-else src="../assets/images/amigaria-logo.svg" alt="imagen de usuario" />

        </div>
        <div class="user-name">
          <p>
            <strong>Usuario: </strong>{{ userStore.user.name || 'Anónimo' }}
          </p>
        </div>
        <div class="user-email">
          <p><strong>Email: </strong>{{ userStore.user.email }}</p>
        </div>
        <button @click="userStore.resetPassword()">Cambiar contraseña</button>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.container {
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .user-details {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    justify-content: center;
    color: var(--clr-emphasis-light);

    .user-image {
      display: flex;
      justify-content: center;
      img {
        border-radius: 50%;
        width: min(100%, 8rem);
      }
    }
    p {
      font-size: 1.2rem;
    }
    button {
      font-weight: 500;
      font-size: 1.5625rem;
      line-height: 44px;
      text-align: center;
      padding: 5px 10px;
      border-radius: 20px;
      background-color: var(--clr-yellow-light);
      border: 3px solid transparent;
      transition: background-color 0.5s ease, color 0.5s ease;
      color: var(--clr-dark-blue);

      &:hover,
      &:focus {
        cursor: pointer;
        background-color: var(--clr-yellow-shadow);
        color: var(--clr-emphasis-light);
      }
    }
  }
}
</style>
