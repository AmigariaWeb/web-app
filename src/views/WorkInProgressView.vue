<script setup>

</script>
<template>
  <main>
    <div class="container-wip">
      <p class="title">Estamos trabajando en ello</p>
      <div class="wip-image"></div>
      <p>En breve podrás disfrutar de nuestros servicios al completo</p>
    </div>
  </main>
</template>


<style lang="scss" scoped>
main{
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-wip {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--clr-emphasis-light);
  width: min(100%, 400px);
  height: 300px;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: var(--shadow);
  align-items: center;


  .title {
    font-size: 1.8rem;
  }

  .wip-image {
    background-image: url("../assets/images/lucid_lynx_icon_set-23.svg");
    width: min(100%, 8rem);
    height: 8rem;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>