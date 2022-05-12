<script setup>
const props = defineProps({
  activities: Object,
  editActivity: Function,
  deleteActivity:Function
})

</script>
<template>
  <div class="created-activities">
      <h3 class="title">Actividades creadas</h3>
      <div
        v-if="activities.length !== 0"
        class="created-activity"
        v-for="activity in activities"
        :key="activity.id"
      >
        <div class="details">
          <p class="activity-title">{{ activity.title }}</p>
          <p><strong>Tipo: </strong> {{ activity.type }}</p>
          <p><strong>Fecha: </strong> {{ activity.date }}</p>
        </div>
        <div class="buttons">
          <button @click="editActivity(activity)">Editar</button>
          <button @click="deleteActivity(activity)">Borrar</button>
        </div>
      </div>
      <p class="no-activities" v-else>No hay actividades creadas.</p>
    </div>
</template>


<style lang="scss" scoped>

</style>