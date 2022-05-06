<script setup>

</script>
<template>
  <div class="spinner"></div>
</template>

<style lang="scss" scoped>
.spinner{
  animation: spin 1s linear infinite;
  border-radius: 50%;
  border: 4px solid rgba(0,0,0,0.1);
  border-left-color: var(--clr-green-light);
  height: 2.5rem;
  margin: 0 auto;
  width: 2.5rem;
}

@keyframes spin{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
</style>