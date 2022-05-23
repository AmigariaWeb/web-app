<template>
  <img v-if="src" class="avatar" :src="src" />
  <img v-else src="../../assets/images/amigaria-logo.svg" alt="">
</template>

<script setup>
const props = defineProps({ src: { type: String } })
</script>

<style lang="scss" scoped>
img{
  width: min(100%, 2rem);
  height: 2rem;
  border-radius: 50%;
}
  
</style>