<script setup>
import { useActivitiesStore } from '../stores/useActivitiesStore';

const activitiesStore = useActivitiesStore();
const { addLastActivityDetail } = activitiesStore;

const props = defineProps({
  activity: Object
})

const saveActivity = () => {
  addLastActivityDetail(props.activity)
  localStorage.setItem('lastActivity', JSON.stringify(props.activity));
}

</script>

<template>
  <div class="postit">
    <h3>{{ activity.title }}</h3>
    <p class="postItContent">{{ activity.description }}</p>
    <div class="postItData">
      <p><strong>Tipo: </strong>{{ activity.type }}</p>
      <p><strong>Cuándo: </strong>{{ activity.date }}</p>
      <p><strong>Desde: </strong>{{ activity.from }}</p>
      <p><strong>Hasta: </strong>{{ activity.to }}</p>
    </div>
    <RouterLink :to="'/activityDetail/' + activity.id" @click="saveActivity()" class="card">Saber más
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.postit {
  align-items: center;
  background-color: var(--clr-yellow-light);
  border-radius: 15px;
  border: 15px solid white;
  box-shadow: var(--shadow);
  color: var(--clr-blue-dark);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 450px;
  overflow: hidden;
  padding: 1rem;
  position: relative;
  width: min(100%, 300px);
  transition: transform 0.5s ease;

h3{
  font-size: 1.5rem;
  text-align: center;
}
  &::before {
    background-color: white;
    bottom: -2px;
    content: '';
    display: flex;
    height: 15%;
    position: absolute;
    right: -1px;
    width: 50%;
    clip-path: polygon(100% 44%,
        100% 100%,
        0% 100%,
        43% 95.5%,
        63% 84.5%,
        77% 73%,
        90% 60%);
  }

  &::after {
    background-color: #00000033;
    bottom: -2px;
    content: '';
    display: flex;
    height: 15%;
    mix-blend-mode: multiply;
    position: absolute;
    right: -1px;
    width: 50%;
    clip-path: polygon(88% 0%,
        93% 11%,
        97.5% 27%,
        100% 44%,
        90% 60%,
        77% 73%,
        63% 84.5%,
        43% 95.5%,
        0% 100%,
        31% 91%,
        50% 75.5%,
        63.5% 58%,
        76% 35.5%,
        84% 15.5%);
  }

  &:hover {
    transform: scale(1.015);
  }

  & .postItContent {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  & .postItData {
    background-color: var(--clr-emphasis-light);
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin: 0.5rem;
    width: 100%;
  }

  & a {
    font-size: 1.5rem;
    width: min(100%, 150px);
    border-radius: 50px;
    border: 1px solid transparent;
    padding: 0.5rem;
    background-color: var(--clr-emphasis-light);
    color: var(--clr-green-dark);
    transition: background-color 0.5s ease, color 0.5s ease;
    text-align: center;
    text-decoration: none;

    &:hover {
      cursor: pointer;
      background-color: var(--clr-green-light);
      color: var(--clr-emphasis-light);
    }
  }
}
</style>