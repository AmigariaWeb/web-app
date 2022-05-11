<script setup>
  import WorkshopList from '@/components/WorkshopList.vue';
  import { useWorkshopsStore } from '@/stores/workShops';
  const storeWorkshops = useWorkshopsStore();
</script>

<template>
  <main>
    <div class="workshop__item" v-for="(item, index) in storeWorkshops.data" :key="index">
      <WorkshopList :data="item" :index="index"/>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  main{
      padding-top: 40px;
      padding-bottom: 40px;
      display: flex;
      flex-flow: column;
      gap:60px;
  }
</style>
