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
<div class="container">
  <div class="details">
    <h3>{{ selectedActivity.title }}</h3>
    <div class="description">
      <!-- <h4>Descripción de la actividad:</h4> -->
      <p>{{ selectedActivity.description }}</p>
    </div>
    <p class="type">
      <!-- <h4>Tipo de actividad</h4> -->
      <p> <strong>Tipo:</strong> {{ selectedActivity.type }}</p>
    </p>
    <!-- <div class="calendar"> -->
      <!-- <p class="title-calendar">Calendario</p> -->
      <p class="date">
        <strong>Fecha: </strong> <span>{{ selectedActivity.date }}</span>
      </p>
        <p class="from">
          <strong>Desde</strong> <span>{{ selectedActivity.from }}</span>
        </p>
        <p class="to">
          <strong>Hasta</strong> <span>{{ selectedActivity.to }}</span>
        </p>

    <!-- </div> -->
    <RouterLink to="/workinprogress">Me apunto</RouterLink>
      <img src="https://picsum.photos/250/200" alt="">
  </div>
</div>
</template>

<style lang="scss" scoped>

.container{
  display:flex;
  margin:1rem auto;
  max-width: 700px;
  justify-content: center;
    transition: transform 0.5s ease;

  &:hover{
    transform: scale(1.05);
  }
}
.details {
  margin: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  color: var(--clr-dark-blue);
  width: 100%;
  background-color: var(--clr-yellow-light);
  border-radius: 15px;
  box-shadow: var(--shadow);
  position:relative;

  h3 {
    font-weight: bold;
    text-align: center;
  }

  h4 {
    font-weight: 700;
  }

  .description{
    color: var(--clr-dark-blue);
    background-color: white;
    border-radius: 15px;
    margin: 1rem;
    padding: 1rem;
    text-align: center;
  }

  .date, .type, .from, .to{
    margin-left: 2rem;
  }


  a {
    font-size:1.5rem;
    text-decoration: none;
    text-align: center;
    background-color: var(--clr-green-light);
    padding: 1rem;
    width: min(100%, 200px);
    border: 3px solid transparent;
    border-radius: 20px;
    color: var(--clr-dark-blue-shadow);
    transition: background-color 0.5s ease, color 0.5s ease;
    margin:1rem;


    &:hover {
      background-color: var(--clr-dark-blue);
      color:white;
    }


  }
  img{
    position:absolute;
    bottom: 2rem;
    right: 2rem;
    border-radius: 15px;
  }
}

@media(min-width:640px) {
  .details {
    .calendar {
      //align-self: flex-end;
    }

  }
}
</style>
