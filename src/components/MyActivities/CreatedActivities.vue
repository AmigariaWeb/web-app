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
    <div v-if="activities.length !== 0" class="card-activity" v-for="activity in activities" :key="activity.id">
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
    <div class="no-activities" v-else>
      <p>No has creado ninguna actividad, haz clic en el botón de abajo para crear una nueva actividad</p>
      <RouterLink class="navlink" to="/myactivities/form">
        <button class="crearActividad">Crear Actividad</button>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
p {
  font-weight: 700;
}

.crearActividad {
  font-style: normal;
  font-weight: 400;
  font-size: 1.5625rem;
  line-height: 2.34375rem;
  text-align: center;
  padding: 10px 10px;
  border-radius: 20px;
  margin-top: 10px;
  background-color: var(--clr-dark-blue);
  border: none;
  transition: background-color 0.5s ease;
  color: var(--clr-yellow-light);
  cursor: pointer;
}
</style>
