<script setup>
import Avatar from './Avatar.vue'

const props = defineProps({
  userName: { type: String, default: '' },
  image: { type: String, default: '' },
  sender: { type: Boolean, default: false },
})
</script>

<template>
  <div class="message" :class="{ sender: sender }">
  <div class="user">
    <Avatar :src="image" />
    <span v-if="!sender">{{ userName || 'Anónimo' }}: </span>
  </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.message {
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background-color: var(--clr-emphasis-light);
  border-radius: 20px;
  max-width: 20rem;
  min-width: 10rem;
  padding-block: 0.5rem;
  padding-inline: 1rem;;
  font-size: 1.1rem;
  align-self: flex-start  ;
  word-break: break-all;

  .user{
    display: flex;
    align-items: center;
    span {
      font-weight: 700;
    }

  }

}
.sender {
  background-color: var(--clr-green-light);
  color: var(--clr-dark-blue);
  align-self: flex-end;

}
</style>
