<script setup>
import HeaderNav from './HeaderNav.vue';
import BurgerNav from './BurgerNav.vue';
import NavPanel from './NavPanel.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import { useHeaderNavStore } from "@/stores/HeaderNavBar.js"

defineProps({
  headerTitle: {
    type: String,
    default: "Amigaria"
  }
})

const store = useHeaderNavStore();
const show = ref(true);

onMounted(() => {
  store.onWidthChange(window.innerWidth)
  window.addEventListener('resize', () => store.onWidthChange(window.innerWidth))
})
onUnmounted(() => window.removeEventListener('resize', () => store.onWidthChange(window.innerWidth)))
</script>

<template>
  <header class="app-header">
    <h2>{{ headerTitle }}</h2>
    <BurgerNav v-if="store.isMobile" />
    <Transition name="fade">
      <NavPanel v-if="store.isActive" />
    </Transition>
  </header>
  <HeaderNav v-if="!store.isMobile" />
</template>

<style lang="scss" scoped>
.app-header {
  position: relative;
  background-color: var(--clr-emphasis-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1rem;
  z-index: 1;

  h2 {
    font-size: clamp(1.5rem, 8vw, 3rem);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>