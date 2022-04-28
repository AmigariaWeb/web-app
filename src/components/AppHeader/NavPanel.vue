<script setup>
  import HeaderNav from "./HeaderNav.vue"
  import { useHeaderNavStore } from "@/stores/HeaderNavBar.js"

  const store = useHeaderNavStore();
</script>

<template>
  <div class="panel">
    <HeaderNav :class="store.isMobile ? 'app-header-nav' : 'app-header-nav-desktop'"/>
    <div class="logo">
      <img src="@/assets/images/amigaria-logo.svg" alt="amigaria-logo">
      <h1>Amigaria</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.panel{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 6em;
  padding-inline: 1rem;
  background-color: var(--clr-emphasis-light);
  width: min(100%, 100vw);
  min-height: 100vh;
  top: 0px;
  left: 0px;
  position: absolute;
  z-index: -1;

  .logo{
    font-family: "JosefinSans";
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    img{
      width: 4rem;
    }
  }
}
</style>