<!--html-->
<template>

  <div class="container">
    <div class="containerPostits">
    <div class="postit"></div>
    <div class="postit"></div>
    <div class="postit"></div>
    <div class="postit"></div>
    <div class="postit"></div>
    </div>
  </div>
</template>

<!--js-->
<script setup>

</script>

<!--css-->
<style lang="scss" scoped>

.container{
  background-color: var(--clr-green-light);
  padding:1rem;

}
.containerPostits{
  background-color: var(--clr-green-light);
  padding:1rem;
  margin: 1rem;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
}
.postit{
  background-color: var(--clr-yellow-light);
  width: 300px;
  height: 300px;
  padding:1rem;
  margin: 1rem;
  border: 10px solid white;
  border-radius: 20px;
  box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.15);
  position: relative;
  display: flex;
  overflow: hidden;

  &::before {
    height: 15%;
    width: 50%;
    content: '';
    position: absolute;
    bottom: -2px;
    right: -1px;
    display: flex;
    background-color: white;
    clip-path: polygon(100% 44%,
        100% 100%,
        0% 100%,
        43% 95.5%,
        63% 84.5%,
        77% 73%,
        90% 60%);
  }

  &::after {
    height: 15%;
    width: 50%;
    content: '';
    position: absolute;
    bottom: -2px;
    right: -1px;
    display: flex;
    background-color: #00000033;
    mix-blend-mode: multiply;
    clip-path: polygon(88% 0%,
        93% 11%,
        97.5% 27%,
        100% 44%,
        90% 60%,
        77% 73%,
        63% 84.5%,
        43% 95.5%,
        0% 100%,
        31% 91%,
        50% 75.5%,
        63.5% 58%,
        76% 35.5%,
        84% 15.5%);
  }
}
</style>
