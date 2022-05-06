<script setup>
import AppHeader from './components/AppHeader/AppHeader.vue';
import { onBeforeMount, ref, watch } from 'vue';
import { useRoute, RouterView } from 'vue-router'
import { useHeaderNavStore } from "@/stores/HeaderNavBar.js"
import { useUserStore } from "@/stores/useUserStore"

const userStore = useUserStore()
/* Navbar */
const navbarStore = useHeaderNavStore();

const route = useRoute();
const currentSection = ref(route.name);

onBeforeMount(() => {
  userStore.fetchUser()
})

watch(() => route.name, (newRouteName) => {
  currentSection.value = newRouteName;
  navbarStore.removeActive();
})
</script>

<template>
  <AppHeader :headerTitle="currentSection" />
  <RouterView />
</template>

<style>
@import '@/assets/base.css';

@media (min-width:1440px) {
  #app {
    max-width: 1440px;
    margin: 0 auto;
  }
}
</style>
