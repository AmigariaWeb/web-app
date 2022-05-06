<script setup>
import { useActivitiesStore } from '@/stores/useActivitiesStore.js';
import { storeToRefs } from 'pinia';
import ActivityItem from '@/components/ActivityItem.vue';
import SearchBar from '@/components/SearchBar.vue';
import Spinner from '../components/Spinner/Spinner.vue';

const { activities, queryActivities, searchQuery, loading } = storeToRefs(useActivitiesStore())
const { fetchActivities } = useActivitiesStore();
// Rellenar actividades
fetchActivities()

</script>

<template>
  <div class="container">
    <SearchBar />
    <div class="containerPostits">
      <Spinner v-if="loading" />
      <p v-else-if="activities.length === 0">Aun no hay actividades</p>
      <ActivityItem v-else-if="searchQuery" v-for="activity in queryActivities" :activity="activity" :key="activity.id" />
      <ActivityItem v-else v-for="activity in activities" :activity="activity" :key="activity.title"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: var(--clr-dark-blue);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  color: var(--clr-dark-blue);
}
.containerPostits {
  margin-block: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;

  p{
    color: var(--clr-emphasis-light);
    font-size: 2rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
