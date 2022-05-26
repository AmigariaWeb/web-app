<script setup>
import { onBeforeMount, onMounted, reactive } from 'vue';
import { useWorkshopsStore } from '@/stores/useWorkshopsStore.js';
import { storeToRefs } from 'pinia';
import WorkshopList from '@/components/AppWorkshop/WorkshopList.vue';
import Spinner from '@/components/Spinner/Spinner.vue';
import PageInfoModal from '@/components/PageInfoModal/PageInfoModal.vue'
import { useUserStore } from '@/stores/useUserStore'
const { workshops, loading} = storeToRefs(useWorkshopsStore())
const { fetchWorkshops } = useWorkshopsStore();
const { isAssociation} = storeToRefs(useWorkshopsStore())
const { setAssociation } = useUserStore()


// Rellenar actividades
    onBeforeMount( async () => {
      await fetchWorkshops()
      await setAssociation()
    })
    onMounted(() => {
      console.log(isAssociation);
      console.log(workshops);
    })


</script>

<template>
  <main>
    <Spinner v-if="loading" />
    <h1 v-if="workshops.length === 0" class="workshops-content__title">Aun no hay talleres registrados</h1>
    <h1 v-if="workshops.length > 0" class="workshops-content__title">Talleres</h1>
    <div v-if="workshops.length > 0" class="workshops-content">
      <WorkshopList v-for="(workshop, index) in workshops" :data="workshop" :index="index" :key="index"/>
    </div>
    <PageInfoModal />
  </main>
</template>

<style lang="scss" scoped>
  .workshops{
    &-content{
      display: flex;
      flex-flow: column;
      gap:60px;
      &__title{
        text-align: center;
        color: var(--clr-emphasis-light);
      }
    }
  }
</style>
