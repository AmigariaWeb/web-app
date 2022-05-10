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
  <main>
    <div class="container">
      <div class="details">
        <h3>{{ selectedActivity.title }}</h3>
        <div class="description">
          <p>{{ selectedActivity.description }}</p>
        </div>
        <p class="type">
          <p> <strong>Tipo:</strong> {{ selectedActivity.type }}</p>
        </p>
        <p class="date">
          <strong>Fecha: </strong> <span>{{ selectedActivity.date }}</span>
        </p>
        <p class="from">
          <strong>Desde</strong> <span>{{ selectedActivity.from }}</span>
        </p>
        <p class="to">
          <strong>Hasta</strong> <span>{{ selectedActivity.to }}</span>
        </p>
        <img src="https://picsum.photos/250/200" alt="">
        <RouterLink to="/workinprogress">Me apunto</RouterLink>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>

.container{
  display:flex;
  margin:1rem auto;
  max-width: 700px;
  justify-content: center;

  // &:hover{
  //   transform: scale(1.05);
  // }
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
    margin-bottom: 2rem;
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
    background-color: var(--clr-dark-blue);
    padding: 1rem;
    max-width: 200px;
    border: 3px solid transparent;
    border-radius: 20px;
    color: var(--clr-yellow-light);
    transition: background-color 0.5s ease;
    margin:1rem;


    &:hover {
      background-color: var(--clr-dark-blue-shadow);
    }


  }
  img{
    position:absolute;
    bottom: 2rem;
    right: 2rem;
    border-radius: 15px;
  }
}

@media(max-width:640px) {
  a{
    height: auto;
    width: auto;
    margin: auto;
  }
  img{
    visibility: hidden;
  }
}
</style>
