<script setup>
import Avatar from './Avatar.vue'

const props = defineProps({
  name: { type: String, default: '' },
  photoUrl: { type: String, default: '' },
  sender: { type: Boolean, default: false },
})
</script>

<template>
  <div class="message">
    <span v-if="!sender">{{ name }}</span>
    <Avatar :src="photoUrl" />
    <slot />
  </div>
</template>
