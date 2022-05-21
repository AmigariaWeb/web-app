<template>
  <img class="avatar" :src="src" />
</template>

<script setup>
const props = defineProps({ src: { type: String, default: '' } })
</script>
