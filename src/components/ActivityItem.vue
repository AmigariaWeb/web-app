<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  activity: Object,
})

const saveActivity = () => {
  router.push({ name: 'Actividad', params: props.activity });
  localStorage.setItem('lastActivity', JSON.stringify(props.activity))
}
</script>

<template>
  <div class="box">
    <div class="postit">
      <p class="title">{{ activity.title }}</p>
      <p class="postItContent">{{ activity.description }}</p>
      <div class="postItData">
        <p>{{ activity.date }}</p>
        <p><strong>Creado por:</strong> {{activity.userName || "anónimo"}}</p>
      </div>
      <button @click="saveActivity()" class="card"
        >Saber más
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: min(100%, 300px);
  filter: drop-shadow(var(--shadow));
  display: flex;
}
.postit {
  align-items: center;
  background-color: var(--clr-yellow-light);
  border-radius: 15px;
  box-shadow: var(--shadow);
  color: var(--clr-blue-dark);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 450px;
  min-height: 320px;
  overflow: hidden;
  padding: 1rem;
  position: relative;
  width: min(100%, 300px);
  transition: transform 0.5s ease;
  clip-path: polygon(0% 0%, 0% 100%, 85% 100%, 100% 85%, 100% 0%);

  .title {
    font-size: 1.5rem;
    line-height: 2.25rem;
    text-align: center;
    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &::after {
    background-color: var(--clr-yellow-shadow);
    border-radius: 15px 0 0 0;
    bottom: 0;
    content: '';
    display: flex;
    mix-blend-mode: multiply;
    position: absolute;
    right: 0;
    width: 15%;
    height: 15%;
  }

  &:hover {
    transform: scale(1.05);
  }

  & .postItContent {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    background-color: var(--clr-emphasis-light);
    border-radius: 0.5rem;
    padding: 0.4rem;
    margin: 0.5rem;
    width: 100%;
    text-align: center;
  }

  & .postItData {
    text-align: center;
  }

  & button {
    font-size: 1.5rem;
    width: min(100%, 150px);
    border-radius: 20px;
    padding: 0.5rem;
    background-color: var(--clr-dark-blue);
    color: var(--clr-yellow-light);
    transition: background-color 0.5s ease, color 0.5s ease;
    text-align: center;
    text-decoration: none;
    margin-top: 0.5rem;
    border: 3px solid transparent;

    &:hover {
      cursor: pointer;
      background-color: var(--clr-dark-blue-shadow);
      color: var(--clr-yellow-light);
    }
  }
}
</style>
