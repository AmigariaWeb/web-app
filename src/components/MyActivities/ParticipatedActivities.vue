<script setup>
const props = defineProps({
  activities: Object,
  removeParticipation: Function,
  showActivity: Function,
});
</script>

<template>
  <div class="card-activities">
    <div class="secondary-title">Participaciones</div>
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
    <div class="no-activities" v-else>
      <p>
        No te has apuntado a ninguna actividad, haz clic el botón de abajo para ver las
        actividades disponibles y asignarte una
      </p>
      <div class="button">
        <img src="@/assets/images/activities-icon.svg" alt="ir actividades" />
        <RouterLink class="irActividad" to="/"> Actividades </RouterLink>
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
  max-width: fit-content;
  font-style: normal;
  text-decoration: none;
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

@media (max-width: 680px) {
  .secondary-title {
    font-size: 1.25rem;
  }
}

@media (min-width: 400px) {
  img {
    display: inline-block;
  }

  .button {
    margin: 5px 40px 0px 0px;
  }

  .irActividad {
    font-size: 1.5625rem;
  }
}
</style>
