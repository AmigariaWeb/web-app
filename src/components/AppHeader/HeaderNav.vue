<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  routes:{
    type:Array,
    require:true
  }
})

</script>

<template>
  <nav class="app-header-nav">
    <ul>
      <li v-for="route in routes">
        <RouterLink :to="route.path">{{route.name}}</RouterLink>
      </li>
    </ul>
  </nav>
</template>


<style lang="scss" scoped>
.app-header-nav {
  ul {
    list-style: none;
    padding: 0;
  }
}
</style>