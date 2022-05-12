
<script setup>
const props = defineProps({
  activities: Object,
  removeParticipation: Function
})

</script>

<template>
  <div class="created-activities">
      <h3 class="title">Participaciones</h3>
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
          <button @click="removeParticipation(activity)">Borrar</button>
        </div>
      </div>
      <p class="no-activities" v-else>No te has apuntado a ninguna actividad.</p>
    </div>
</template>

<style lang="scss" scoped>

</style>