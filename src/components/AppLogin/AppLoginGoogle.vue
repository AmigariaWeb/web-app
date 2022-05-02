<script setup>
import { useUserStore } from '@/stores/useUserStore';

const userStore = useUserStore();
</script>
<template>
  <button @click="userStore.signInWithGoogle()" class="google-btn">
    <img  className="google-icon"
      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
    <span>Entra con Google</span>
  </button>
</template>

<style lang="scss" scoped>
.google-btn {
  align-items: center;
  background-color: var(--clr-emphasis-light);
  border: none;
  color: var(--clr-dark-blue-shadow);
  display: flex;
  padding: 1rem;
  font-size: 1.2rem;
  gap: 0.5rem;
  justify-content: center;
  margin: auto;
  border-radius: 20px;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: var(--clr-yellow-light);
    cursor: pointer;
  }
}

.google-icon {
  height: 18px;
}
</style>
