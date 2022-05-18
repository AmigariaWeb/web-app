<script setup>

</script>

<template>
<main class="pageNotFound">
  <div id="container">
    <img id="svg" src="src/assets/images/amigaria_404.svg" alt="404: página no encontrada">
    <h3 id="text1">Página no encontrada</h3>
    <h4 id="text2">porque me la comí!</h4>
  </div>
</main>
</template>

<style lang="scss" scoped>
.pageNotFound{
  display: block;
  align-content: center;
  padding: 1rem; 


#container{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

img{
  width: 60vw;
  max-width: 300px;
}

  h3{
    font-family: Pacifico;
    color: white;
  }
  h4{
    font-family: Pacifico;
    color: white;
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
// @media ()
@media (max-width: 350px){
  img{
    width: 60vw;
  }
  #container{
    #text1 { order: 1; }
    #text2 { order: 3; }
    #svg { order: 2; }
  }
}
</style>