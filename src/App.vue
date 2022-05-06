<script setup>
import { onBeforeMount } from 'vue';
import { RouterView } from 'vue-router'
import { useUserStore } from "@/stores/useUserStore"
import Sidebar from '@/components/Sidebar/Sidebar.vue';

const userStore = useUserStore()
onBeforeMount(() => {
  userStore.fetchUser()
})
</script>

<template>
  <Sidebar v-if="userStore.user" />
  <RouterView />
</template>

<style lang="scss">
@import '@/assets/base.css';

#app {
  main {
    flex: 1 1 0;
    padding: 2rem;
    padding-left: 6rem;
  }
}

@media (min-width:1440px) {
  main {
    max-width: 1440px;
    margin: 0 auto;
  }
}
</style>
