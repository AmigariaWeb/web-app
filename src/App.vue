<script setup>
import AppHeader from './components/AppHeader/AppHeader.vue';
import { ref, watch } from 'vue';
import {useRoute, RouterView} from 'vue-router'

  const route= useRoute();
  const currentSection = ref(route.name);

  watch(() => route.name, (newRouteName) => {
    currentSection.value = newRouteName
})
</script>

<template>
  <AppHeader :headerTitle="currentSection"/>
  <RouterView/>
</template>

<style>
@import '@/assets/base.css';


@media (min-width:1280px){
  #app {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
  }
}
</style>
