<script setup>
import { useUserStore } from '../stores/useUserStore'
import { useActivitiesStore } from '../stores/useActivitiesStore.js'
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import ParticipatedActivities from '@/components/MyActivities/ParticipatedActivities.vue'
import CreatedActivities from '@/components/MyActivities/CreatedActivities.vue'
import { updateActivity } from '@/services/firebase/crud.js'
import { swal } from '@/utils/swal.js'


const userStore = useUserStore()
const activitiesStore = useActivitiesStore()
const router = useRouter()

onBeforeMount(() => {
  activitiesStore.fetchActivities()
})

const deleteActivity = (activity) => {
  activitiesStore.deleteActivity(activity)
  userStore.user.userActivities = userStore.user.userActivities.filter(
    (currentActivity) => currentActivity.id !== activity.id
  )
  userStore.updateUser(userStore.user)
}

const editActivity = (activity) => {
  router.push({ name: 'Editar Actividad', params: activity })
}

const removeParticipation = (activity) => {
  activity.isAssigned = false;
  updateActivity(activity)
  userStore.user.joinedActivities = userStore.user.joinedActivities.filter(
    (currentActivity) => currentActivity.id !== activity.id
  )
  userStore.updateUser(userStore.user)
  swal("success", "Participación eliminada", "La actividad quedará disponible en mis actividades.")
}
</script>

<template>
  <main class="my-activities-container" v-if="userStore.user">
    <CreatedActivities
      :activities="userStore.user.userActivities"
      :editActivity="editActivity"
      :deleteActivity="deleteActivity"
    />
    <ParticipatedActivities
      :activities="userStore.user.joinedActivities"
      :removeParticipation="removeParticipation"
    />
  </main>
</template>

<style lang="scss">
.my-activities-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .created-activities {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: min(100%, 40rem);

    .title {
      color: var(--clr-emphasis-light);
      text-align: center;
    }

    .created-activity {
      background-color: var(--clr-yellow-light);
      padding: 1rem;
      border-radius: 20px;
      width: 100%;

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

          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
}
.no-activities {
  color: var(--clr-emphasis-light);
  text-align: center;
}
@media (max-width: 1440px) {
  .my-activities-container {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;

    .title {
      font-size: 1.5rem;
    }
  }
}
</style>
