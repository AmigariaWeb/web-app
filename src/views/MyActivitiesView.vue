<script setup>
import { useUserStore } from '../stores/useUserStore';
import { useActivitiesStore } from '../stores/useActivitiesStore.js';
import {onBeforeMount} from 'vue';

const userStore = useUserStore()
const activitiesStore = useActivitiesStore()

onBeforeMount(() => {
  activitiesStore.fetchActivities();
})

const deleteActivity = (activity) => {
  activitiesStore.deleteActivity(activity);
  userStore.user.userActivities = userStore.user.userActivities.filter(currentActivity => currentActivity.id !== activity.id);
  userStore.updateUser(userStore.user)
}

</script>

<template>
  <main class="container">
    <div class="created-activities">
      <h3 class="title">Actividades creadas</h3>
      <div
        v-if="userStore.user"
        class="created-activity"
        v-for="activity in userStore.user.userActivities"
        :key="activity.id"
      >
        <div class="details">
          <p class="activity-title">{{ activity.title }}</p>
          <p><strong>Tipo: </strong> {{ activity.type }}</p>
          <p><strong>Fecha: </strong> {{ activity.date }}</p>
        </div>
        <div class="buttons">
          <button>Editar</button>
          <button @click="deleteActivity(activity)">Borrar</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.container {
  .created-activities {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 45%;

    .title {
      color: var(--clr-emphasis-light);
    }

    .created-activity {
      background-color: var(--clr-yellow-light);
      padding: 1rem;
      border-radius: 20px;

      .details {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        .activity-title {
          width: 100%;
          text-align: center;
          font-weight: 700;
          overflow-wrap: break-word;
        }
      }
      .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        button {
          padding: 0.8rem 1rem;
          border: none;
          background-color: #fff;
          border-radius: 20px;

          &:hover{
            cursor:pointer;
          }
        }
      }
    }
  }

}
  @media (max-width: 1440px) {
    .container {
      .created-activities {
        max-width: 100%;
        .created-activity {
        }
      }
    }
  }
</style>
