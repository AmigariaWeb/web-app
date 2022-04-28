<script setup>
import { useHeaderNavStore } from "@/stores/HeaderNavBar.js"

const store = useHeaderNavStore();

</script>

<template>
  <div 
  @click="store.toggleActive" 
  :class="{ 'switch-burger': store.isActive }" 
  class="menu-burger" 
  tabindex="0">
    <div class="burger-line"></div>
    <div class="burger-line"></div>
    <div class="burger-line"></div>
  </div>
</template>


<style lang="scss" scoped>
.menu-burger {
  align-items: center;
  background-color: var(--clr-green-light);
  border-radius: 1rem;
  border: 4px solid var(--clr-green-dark);
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  height: 3rem;
  justify-content: center;
  overflow: hidden;
  width: min(100%, 3rem);

  &:hover {
    cursor: pointer;
  }

  .burger-line {
    background-color: var(--clr-green-dark);
    border-radius: 1rem;
    height: 0.3rem;
    transition: transform 0.5s ease;
    width: min(100%, 2rem);
  }
}

.switch-burger {
  .burger-line:nth-child(1) {
    transform: rotate(45deg) scaleX(1.3) translate(6px, 8px);
  }
  .burger-line:nth-child(2) {
    transform: rotateY(90deg);
  }
  .burger-line:nth-child(3) {
    transform: translate(0px, -10px) rotate(-45deg) scaleX(1.3);
  }
}
</style>