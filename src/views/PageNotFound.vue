<script setup>

</script>

<template>
<div class="pageNotFound">
  <h3>No se ha encontrado lo que buscas</h3>
  <h4>Quizás te referías a alguna de estas secciones:</h4>
  <ul>
    <li><RouterLink to="/">Actividades</RouterLink></li>
    <li><RouterLink to="/workshops">Talleres</RouterLink></li>
    <li><a href="https://amigaria.com">Apúntate</a></li>
  </ul>
</div>
</template>

<style lang="scss" scoped>
.pageNotFound{
  text-align: center;
  display: grid;
  place-content: center;
  color: var(--clr-emphasis-light);
  height: calc(90vh - var(--header-size));
  padding: 1rem;

  h3{
    font-weight: 700;
  }
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
    a{
      color: var(--clr-yellow-light);
      font-size: 1.5rem;
    }

  }

}
</style>