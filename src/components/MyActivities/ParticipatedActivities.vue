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
    <div
      v-if="activities.length !== 0"
      class="card-activity"
      v-for="activity in activities"
      :key="activity.id"
    >
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
    <p class="no-activities" v-else>No te has apuntado a ninguna actividad.</p>
  </div>
</template>

<style lang="scss" scoped>
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
</style>
