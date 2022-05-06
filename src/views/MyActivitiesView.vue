<script setup>
import { useUserStore } from '../stores/useUserStore';

const userStore = useUserStore();
console.log(userStore.user.displayName);
</script>

<template>
  <div class="container">
    <div class="user">
      <img :src="userStore.user.photoURL" />
      <p>{{ userStore.user.displayName }}</p>
    </div>
    <div class="email">
      <p>{{ userStore.user.email }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  color: var(--clr-emphasis-light);

  img {
    border-radius: 50%;
    width: min(100%, 3rem);
  }
}
</style>