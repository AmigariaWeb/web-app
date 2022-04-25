<script setup>
import HeaderNav from './HeaderNav.vue';

defineProps({
  headerTitle:{
    type:String,
    default:"Amigaria"
  }
})

const routes = [
  { name: "Actividades", path: "/" },
  { name: "Talleres", path: "/workshops" },
  { name: "Mis Actividades", path: "/myactivities" },
]
</script>

<template>
  <header class="app-header">
    <h2>{{headerTitle}}</h2>
    <HeaderNav :routes="routes"/>
  </header>
</template>



<style lang="scss" scoped>
.app-header {
  background-color: var(--clr-emphasis-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1rem;
}
</style>