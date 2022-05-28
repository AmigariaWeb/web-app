<script setup>
const props = defineProps({
  activities: Object,
  editActivity: Function,
  deleteActivity: Function,
  showActivity: Function,
});
</script>
<template>
  <div class="card-activities">
    <div class="secondary-title">Actividades creadas</div>
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
          <button class="edit-btn" @click="showActivity(activity)">Ver</button>
          <button class="edit-btn" @click="editActivity(activity)">Editar</button>
          <button class="delete-btn" @click="deleteActivity(activity)">Borrar</button>
        </div>
      </div>
    </div>
    <div class="no-activities" v-else>
      <p>
        No has creado ninguna actividad, haz clic en el botón de abajo para crear una
        nueva actividad
      </p>
      <div class="button">
        <img src="@/assets/images/create-activity-icon.svg" alt="ir actividades" />
        <RouterLink class="crearActividad" to="/myactivities/form">
          Crear Actividad
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
p {
  font-weight: 700;
}

.secondary-title {
  text-align: center;
  color: var(--clr-emphasis-light);
  font-size: 1.8rem;
  line-height: 4.5rem;
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
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.34375rem;
  text-align: center;
  text-decoration: none;
  padding: 10px 10px;
  border-radius: 20px;
  background-color: var(--clr-yellow-light);
  border: none;
  color: var(--clr-dark-blue);
  cursor: pointer;
}

@media (max-width: 680px) {
  .secondary-title {
    font-size: 1rem;
  }
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
