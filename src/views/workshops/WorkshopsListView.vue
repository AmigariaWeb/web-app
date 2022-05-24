<script setup>
import { onBeforeMount, onMounted, reactive } from 'vue';
import { useWorkshopsStore } from '@/stores/useworkShopsStore.js';
import { storeToRefs } from 'pinia';
import WorkshopList from '@/components/AppWorkshop/WorkshopList.vue';
import Spinner from '@/components/Spinner/Spinner.vue';

const { workshops, loading} = storeToRefs(useWorkshopsStore())
const { fetchWorkshops } = useWorkshopsStore();

// Rellenar actividades
    onBeforeMount( async () => {
      await fetchWorkshops()
    })
    onMounted(() => {
      
    })


</script>

<template>
  <main>
    <Spinner v-if="loading" />
    <p v-else-if="workshops.length === 0">Aun no hay talleres registrados</p>
    <WorkshopList v-else v-for="(workshop, index) in workshops" :data="workshop" :index="index" :key="index"/>
  </main>
</template>

<style lang="scss" scoped>
  main{
      display: flex;
      flex-flow: column;
      gap:60px;
  }
</style>
