<script setup>
const props = defineProps({
  activities: Object,
  removeParticipation: Function,
  showActivity: Function
})
</script>

<template>
  <div class="card-activities">
    <h3 class="title">Participaciones</h3>
    <div v-if="activities.length !== 0" class="card-activity" v-for="activity in activities" :key="activity.id">
      <div class="details">
        <p class="activity-title">{{ activity.title }}</p>
        <p class="description">{{ activity.description }}</p>
      </div>
      <div class="info-and-btns">
        <p>{{ activity.date }}</p>
        <p>{{ activity.from }}h a {{ activity.to }}h</p>
        <div class="buttons">
          <button class="show-btn" @click="showActivity(activity)">Ver</button>
          <button class="delete-btn" @click="removeParticipation(activity)">
            Borrar
          </button>
        </div>
      </div>
    </div>
    <div class="no-activities" v-else>
      <p>No te has apuntado a ninguna actividad, haz clic en el botón de abajo para ver las actividades disponibles y
        asignarte una</p>
      <RouterLink class="navlink" to="/">
        <button class="irActividad">Actividades</button>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
p {
  font-weight: 700;
}

.my-activities-container {
  .card-activities {
    .card-activity {
      background-color: var(--clr-green-light);

      .buttons {
        .show-btn {
          background-color: var(--clr-yellow-light);
          color: var(--clr-dark-blue);

          &:hover,
          &:focus {
            background-color: var(--clr-yellow-shadow);
            color: var(--clr-emphasis-light);
          }
        }
      }
    }
  }
}

.irActividad {
  font-style: normal;
  font-weight: 400;
  font-size: 1.5625rem;
  line-height: 2.34375rem;
  text-align: center;
  padding: 10px 10px;
  border-radius: 20px;
  margin-top: 10px;
  background-color: var(--clr-yellow-light);
  border: none;
  transition: background-color 0.5s ease;
  color: var(--clr-dark-blue);
  cursor: pointer;
}
</style>
