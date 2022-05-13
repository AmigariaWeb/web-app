<script setup>
const props = defineProps({
  activities: Object,
  editActivity: Function,
  deleteActivity: Function,
})
</script>
<template>
  <div class="card-activities">
    <h3 class="title">Actividades creadas</h3>
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
          <button class="edit-btn" @click="editActivity(activity)">
            Editar
          </button>
          <button class="delete-btn" @click="deleteActivity(activity)">
            Borrar
          </button>
        </div>
      </div>
    </div>
    <p class="no-activities" v-else>No hay actividades creadas.</p>
  </div>
</template>

<style lang="scss" scoped></style>
