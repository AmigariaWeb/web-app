
<script setup>
import { storeToRefs } from 'pinia';
import { useActivitiesStore } from '../stores/useActivitiesStore';

const { selectedActivity } = storeToRefs(useActivitiesStore());
const {addLastActivityDetail} = useActivitiesStore()

  if (Object.keys(selectedActivity.value).length === 0) {
    let lastActivity = JSON.parse(localStorage.getItem('lastActivity'));
    addLastActivityDetail(lastActivity)
  }

</script>
<template>
  <div class="details">

    <h3>{{ selectedActivity.title }}</h3>
    <div class="description">
      <h4>Descripción de la actividad:</h4>
      <p>{{ selectedActivity.description }}</p>
    </div>
    <div class="type">
      <h4>Tipo de actividad</h4>
      <p>{{ selectedActivity.type }}</p>
    </div>
    <div class="calendar">
      <p class="title-calendar">Calendario</p>
      <p>
        <strong>Fecha: </strong>
        <span>{{ selectedActivity.date }}</span>
      </p>
      <p>
        <strong>Desde las:</strong> <span>{{ selectedActivity.from }}</span>
      </p>
      <p>
        <strong>Hasta las:</strong> <span>{{ selectedActivity.to }}</span>
      </p>
    </div>
    <RouterLink to="/workinprogress">Me apunto</RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.details {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  color: var(--clr-emphasis-light);
  width: min(100%, 640px);
  gap: 1.5rem;

  // :(
  h3 {
    text-align: center;
  }

  h4 {
    font-weight: 700;
  }

  .description,
  .type {
    p {
      border-top: 3px solid var(--clr-yellow-light);
      padding-inline: 2rem;
      color: var(--clr-emphasis-light);
    }
  }

  .calendar {
    background-color: var(--clr-emphasis-light);
    width: min(100%, 200px);
    border-radius: 20px;
    color: var(--clr-dark-blue);
    padding: 1rem;
    align-self: center;
    box-shadow: var(--shadow);

    .title-calendar {
      text-align: center;
      border-bottom: 5px solid var(--clr-green-light);
    }

    strong {
      color: var(--clr-dark-blue-shadow);
    }
  }

  a {
    text-decoration: none;
    text-align: center;
    background-color: var(--clr-green-light);
    padding: 1rem;
    width: min(100%, 300px);
    align-self: center;
    background-color: var(--clr-yellow-light);
    border: 3px solid transparent;
    border-radius: 20px;
    font-size: 1.4rem;
    color: var(--clr-dark-blue-shadow);
    transition: background-color 0.5s ease;

    &:hover {
      background-color: var(--clr-yellow-shadow);
    }
  }
}

@media(min-width:640px) {
  .details {
    .calendar {
      align-self: flex-end;
    }

  }
}
</style>