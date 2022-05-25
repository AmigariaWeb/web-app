<script setup>
  import Spinner from '../components/Spinner/Spinner.vue'
</script>

<template>
  <main>
    <div>
      <h1>Preguntas frecuentes</h1>
      <Spinner v-if="loading" />
      <details>
        <summary>Pregunta1</summary>
        <p>Respuesta1</p>
      </details>
    </div>
  </main>
</template>

<style lang="scss" scoped>

</style>
