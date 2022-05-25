<script setup>
import { onBeforeMount } from 'vue';
import { RouterView } from 'vue-router'
import { useUserStore } from "@/stores/useUserStore"
import Sidebar from '@/components/Sidebar/Sidebar.vue';

const userStore = useUserStore()

onBeforeMount(() => {
  userStore.fetchUser();
})
</script>

<template>
  <Sidebar v-if="userStore.user"/>
  <RouterView />
</template>

<style lang="scss">
@import '@/assets/base.css';

#app {
  min-height: 100vh;
  main {
    min-height: 100vh;
    flex: 1 1 0;

    padding-left: 5rem;
  }
}

@media (min-width:1440px) {
  main {
    max-width: 1440px;
    margin: 0 auto;
  }
}
</style>
