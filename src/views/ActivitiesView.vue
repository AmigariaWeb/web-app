<script setup>
import { useActivitiesStore } from '@/stores/useActivitiesStore.js';
import { storeToRefs } from 'pinia';
import ActivityItem from '../components/ActivityItem.vue';
import SearchBar from '../components/SearchBar.vue';

const { activities, queryActivities, searchQuery } = storeToRefs(useActivitiesStore())
const { fetchActivities } = useActivitiesStore();
// Rellenar actividades
fetchActivities()
</script>

<template>
  <div class="container">
    <SearchBar />
    <div class="containerPostits">
    <TransitionGroup name="fade">
      <p v-if="!activities">Aun no hay actividades</p>
      <ActivityItem v-else-if="searchQuery" v-for="activity in queryActivities" :activity="activity" :key="activity.id" />
      <ActivityItem v-else v-for="activity in activities" :activity="activity" :key="activity.title"/>
    </TransitionGroup> 
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
}

.fade-enter-active{
  transition: opacity 0.1s ease;
}
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
