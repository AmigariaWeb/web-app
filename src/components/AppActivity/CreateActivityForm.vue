<script setup>
import { ref } from 'vue'
import { addNewActivity } from '@/services/firebase/crud'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/useUserStore.js'
import { swal } from '@/utils/swal.js'
import PageInfoModal from '../PageInfoModal/PageInfoModal.vue'

const router = useRouter()
const newActivity = ref({})
const userStore = useUserStore()
const todayDate = new Date().toISOString().split('T')[0];

const sendForm = async (e) => {
  e.preventDefault()
  if(userStore.user.userActivities.length <= 2 || userStore.user.isAdmin === true){
    fillNewActivity();
    const activityId = await addNewActivity(newActivity.value)
    const newActivityWithId = { ...newActivity.value, id: activityId }
    userStore.user.userActivities.push(newActivityWithId)
    userStore.updateUser(userStore.user)
    swal("success","Actividad creada","La actividad se ha creado correctamente.")
    router.push('/myactivities')
  }else{
    return swal("error", "Has llegado al límite", "Ya tienes 3 actividades creadas, borra alguna si quieres agregar nuevas.")
  }
}

const fillNewActivity =()=> {
    newActivity.value.userId = userStore.user.uid;
    newActivity.value.isAssigned = false;
    newActivity.value.messages = [];
    newActivity.value.userName = userStore.user.name || "Anónimo";
}
</script>

<template>
  <main class="container">
  <h1>Crear Actividad</h1>
    <div class="form-container">
      <form @submit="sendForm" id="activity-form">
        <div class="title form-content">
          <label for="titleForm">Título</label>
          <input
            type="text"
            id="titleForm"
            placeholder="Título..."
            required
            v-model="newActivity.title"
            maxlength="50"
          />
        </div>
        <div class="description form-content">
          <label for="descriptionForm">Descripción</label>
          <textarea
            name="descriptionForm"
            id="descriptionForm"
            rows="4"
            placeholder="Introduzca una descripción..."
            required
            v-model="newActivity.description"
            maxlength="300"
          ></textarea>
        </div>
        <div class="time form-content">
          <div class="type form-content">
            <label for="typeForm">Tipo</label>
            <select id="typeForm" required v-model="newActivity.type">
              <option selected disabled value="undefined">
                Selecciona un tipo
              </option>
              <option value="social">Social</option>
              <option value="entretenimiento">Entretenimiento</option>
              <option value="transporte">Transporte</option>
              <option value="ayuda">Ayuda</option>
              <option value="otros">Otros</option>
            </select>
          </div>
          <div class="date form-content">
            <label for="dateForm">Fecha</label>
            <input
              class=""
              type="date"
              name="dateForm"
              id="dateForm"
              required
              v-model="newActivity.date"
              :min="todayDate"
            />
          </div>
        </div>

        <div class="time form-content">
          <div class="from">
            <label for="fromTimeForm">Desde</label>
            <input
              type="time"
              name="fromTimeForm"
              id="fromTimeForm"
              min="06:00:AM"
              required
              v-model="newActivity.from"
            />
          </div>
          <div class="to">
            <label for="toTimeForm">Hasta</label>
            <input
              type="time"
              name="toTimeForm"
              id="toTimeForm"
              required
              :min="newActivity.from"
              max="23:59:PM"
              :disabled="newActivity.from === undefined"
              v-model="newActivity.to"
            />
          </div>
        </div>
        <div class="buttons">
          <button form="activity-form" type="submit">Enviar</button>
        </div>
      </form>
    </div>
    <PageInfoModal />
  </main>
</template>

<style lang="scss" scoped>

.container{
    h1{
    text-align: center;
    color: var(--clr-emphasis-light);
  }
}
.form-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--clr-yellow-light);
  color: var(--clr-dark-blue);
  border-radius: 20px;
  width: 100%;
  max-width: 650px;
  padding-block:1.5rem;
}

.form-title {
  text-align: center;
   &:h3{
    text-align: center;
    color: var(--clr-emphasis-light);
  }
}

form {
  padding: 1rem 0.5rem;
  width: 100%;
  display: flex;
  gap: 15px;
  flex-direction: column;

  .form-content {
    display: flex;
    flex-direction: column;
  }

  label {
    font-family: 'AtkinsonHyperlegible';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 0.0012em;
  }

  input,
  textarea,
  select {
    font-family: 'AtkinsonHyperlegible', sans-serif;
    color: var(--clr-dark-blue-shadow);
    min-width: 44px;
    min-height: 44px;
    padding: 0px 15px;
    border-width: 3px;
    outline: none;
    border-radius: 20px;
    padding-inline: 1rem;
    background-color: var(--clr-emphasis-light);
    border: 3px solid var(--clr-dark-blue-shadow);
    font-size: 1rem;
    transition: border 0.2s ease;
    box-shadow: (10px 10px 0px rgba(0, 0, 0, 0.15));
    margin-bottom: 15px;

    &:hover,
    &:focus {
      outline: none;
      border: 3px solid var(--clr-green-light);
    }

    &::placeholder {
      color: var(--clr-dark-blue-shadow);
      font-size: 1rem;
    }

    &:disabled {
      background-color: #ffffffd1;
    }
  }

  textarea {
    padding-top: 0.5rem;
    resize: none;
    min-height: 25vh;
  }

  .time {
    display: flex;
    gap: 15px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .type,
    .date {
      display: flex;
      flex-direction: column;
      min-width: 25%;
    }

    .from,
    .to {
      display: flex;
      flex-direction: column;
      min-width: 25%;
    }
  }
}

.buttons {
  display: flex;
  justify-content: space-evenly;
}

button {
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 44px;
  text-align: center;
  letter-spacing: 0.0012em;
  padding: 5px 10px;
  border-radius: 20px;
  background-color: var(--clr-dark-blue);
  border: 3px solid transparent;
  transition: background-color 0.5s ease;
  color: var(--clr-yellow-light);

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: var(--clr-dark-blue-shadow);
  }
}

@media (min-width: 640px) {
  main {
    max-width: 640px;
    margin: 0 auto;
  }
  form{
    padding-inline: 2rem;
  }
}
</style>
