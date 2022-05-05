<script setup>
import AppHeader from './components/AppHeader/AppHeader.vue';
import { ref, watch } from 'vue';
import { useRoute, RouterView } from 'vue-router'
import { useHeaderNavStore } from "@/stores/HeaderNavBar.js"

/* Navbar */
const navbarStore = useHeaderNavStore();

const route = useRoute();
const currentSection = ref(route.name);


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
