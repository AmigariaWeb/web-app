<script setup>
import { onBeforeMount } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/useUserStore'
const { setAssociation } = useUserStore()
const { isAssociation, user } = storeToRefs(useUserStore())
onBeforeMount( async () => {
  await setAssociation()
});
</script>

<template>
  <main class="pageNotFound">
    <div id="container">
      <img id="svg" src="../assets/images/amigaria_404.svg" alt="404: página no encontrada">
      <div id="text">
        <h3>Página no encontrada</h3>
        <h4>porque ¡me la comí!</h4>
      </div>

    </div>
    <div class="links">
      <span>¿Qué tal si pruebas por aquí? </span>
      <div v-if="user.isAdmin" class="buttons">
        <RouterLink class="buttonsLink" to="/">
          Actividades
        </RouterLink>
        <RouterLink class="buttonsLink" to="/myactivities">
          Mis actividades
        </RouterLink>
        <RouterLink class="buttonsLink" to="/myactivities/form">
          Crear actividad
        </RouterLink>
        <RouterLink class="buttonsLink" to="/workshops/form">
          Nuevo Taller
        </RouterLink>
        <RouterLink class="buttonsLink" to="/workshops">
          Talleres
        </RouterLink>
      </div>
      <div v-else-if="isAssociation" class="buttons">
        <RouterLink class="buttonsLink" to="/workshops/form">
          Nuevo Taller
        </RouterLink>
        <RouterLink class="buttonsLink" to="/workshops">
          Talleres
        </RouterLink>
      </div>
      <div v-else class="buttons">
        <RouterLink class="buttonsLink" to="/">
          Actividades
        </RouterLink>
        <RouterLink class="buttonsLink" to="/myactivities">
          Mis actividades
        </RouterLink>
        <RouterLink class="buttonsLink" to="/myactivities/form">
          Crear actividad
        </RouterLink>
        <RouterLink class="buttonsLink" to="/workshops">
          Talleres
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.pageNotFound {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 3rem;


  #container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }

  .buttonsLink {
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

  img {
    width: 60vw;
    max-width: 300px;
  }

  h3 {
    font-family: Pacifico;
    color: white;
    text-align: center;
  }

  h4 {
    font-family: Pacifico;
    color: white;
    text-align: center;
  }

  span {
    font-size: 2rem;
    color: white;
    text-align: center;
  }

  button {
    font-style: normal;
    font-weight: 400;
    font-size: 1.5625rem;
    line-height: 2.34375rem;
    text-align: center;
    padding: 10px 10px;
    border-radius: 20px;
    background-color: var(--clr-yellow-light);
    border: none;
    transition: background-color 0.5s ease;
    color: var(--clr-dark-blue);
  }
}

@media (min-width: 1000px) {
  #container {
    flex-direction: row;
  }
}

@media (max-width: 999px) {
  #container {
    flex-direction: column;

    #text {
      order: 1;
    }

    #svg {
      order: 2;
    }
  }
}
</style>