<script setup>
  import WorkshopList from '@/components/WorkshopList.vue';
  import { useWorkshopsStore } from '@/stores/workShops';
  const storeWorkshops = useWorkshopsStore();
</script>

<template>
  <main>
  <h3>Talleres disponibles</h3>
    <div class="workshop__item" v-for="(item, index) in storeWorkshops.data" :key="index">
      <WorkshopList :data="item" :index="index"/>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  main{
      display: flex;
      flex-flow: column;
      gap:60px;

    h3{
      text-align: center;
      color: var(--clr-emphasis-light);
    }
  }
</style>
