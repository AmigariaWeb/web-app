<script setup>
import { useActivitiesStore } from '@/stores/useActivitiesStore.js';
import { storeToRefs } from 'pinia';
import ActivityItem from '@/components/ActivityItem.vue';
import SearchBar from '@/components/SearchBar.vue';
import Spinner from '../components/Spinner/Spinner.vue';
import { onBeforeMount } from 'vue';
import PageInfoModal from '../components/PageInfoModal/PageInfoModal.vue';


const { activities, queryActivities, searchQuery, loading } = storeToRefs(useActivitiesStore())
const activitiesStore = useActivitiesStore();

onBeforeMount(() => {
  activitiesStore.fetchActivities();
})
</script>

<template>
  <main class="container">
    <h3 class="title">Actividades disponibles</h3>
    <SearchBar />
    <div class="containerPostits">
      <Spinner v-if="loading" />
      <div v-else-if="activities.length === 0">
        <p>No hay actividades creadas en este momento, haz clic en el botón de abajo para crear una nueva actividad</p>
        <div class="button">
          <img src="@/assets/images/create-activity-icon.svg" alt="ir actividades">
          <RouterLink class="crearActividad" to="/myactivities/form">
            Crear Actividad
          </RouterLink>
        </div>
      </div>
      <ActivityItem v-else-if="searchQuery" v-for="activity in queryActivities" v-show="activity.isAssigned === false"
        :activity="activity" :key="activity.id" />
      <ActivityItem v-else v-for="activity in activities" v-show="activity.isAssigned === false" :activity="activity"
        :key="activity.title" />
    </div>
    <PageInfoModal />
  </main>
</template>

<style lang="scss" scoped>
.container {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  color: var(--clr-dark-blue);

  h3 {
    text-align: center;
    color: var(--clr-emphasis-light);
  }
}

.containerPostits {
  margin-block: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;

  p {
    color: var(--clr-emphasis-light);
    font-size: 2rem;
    font-weight: 700;
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

p {
  font-weight: 700;
}

img {
  display: none;
  width: 35px;
}

.button {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin: 5px 0px 0px 0px;
}

.crearActividad {
  max-width: fit-content;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.34375rem;
  text-align: center;
  padding: 10px 10px;
  border-radius: 20px;
  background-color: var(--clr-yellow-light);
  border: none;
  color: var(--clr-dark-blue);
  cursor: pointer;
}

@media (min-width: 400px) {
  img {
    display: inline-block;
  }

  .button {
    margin: 5px 40px 0px 0px;
  }

  .crearActividad {
    font-size: 1.5625rem;
  }
}
</style>
