<!--html-->
<template>

  <div class="container">
    <div class="containerPostits">
    <div class="postit">
      <h4><strong>Ir a la biblioteca</strong></h4>
      <p>Tengo que ir a devolver un libro y echar un vistazo para llevarme otro.</p>
      <div class="postItContent">
        <p><strong>Cuándo:</strong> 20 Abril 2022, 19:00</p>
        <p><strong>Dónde:</strong> Torrent, Valencia, biblioteca pública</p>
        <p><strong>Duración:</strong> 2 - 3 horas</p>
      </div>
      <button>Ayudar</button>
    </div>
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
  min-height: 300px;
  padding:1rem;
  margin: 1rem;
  border: 15px solid white;
  border-radius: 15px;
  box-shadow: var(--shadow);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

  & .postItContent{
    background-color: var(--clr-emphasis-light);
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin: 0.5rem;
    width: 100%;
  }

  & button {
    font-size: 2rem;
    width: 150px;
    border-radius: 50px;
    border: 1px solid transparent;
    padding: 0.5rem;
    background-color: var(--clr-emphasis-light);
    color: var(--clr-dark-blue)
  }
}
</style>
