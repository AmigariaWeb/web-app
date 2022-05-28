<script setup>
import { useUserStore } from "../stores/useUserStore";
import { useActivitiesStore } from "../stores/useActivitiesStore.js";
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import ParticipatedActivities from "@/components/MyActivities/ParticipatedActivities.vue";
import CreatedActivities from "@/components/MyActivities/CreatedActivities.vue";
import { updateActivity } from "@/services/firebase/crud.js";
import { swal } from "@/utils/swal.js";
import PageInfoModal from "../components/PageInfoModal/PageInfoModal.vue";

const userStore = useUserStore();
const activitiesStore = useActivitiesStore();
const router = useRouter();

onBeforeMount(() => {
  activitiesStore.fetchActivities();
});

const deleteActivity = (activity) => {
  activitiesStore.deleteActivity(activity);
  userStore.user.userActivities = userStore.user.userActivities.filter(
    (currentActivity) => currentActivity.id !== activity.id
  );
  userStore.updateUser(userStore.user);
};

const editActivity = (activity) => {
  router.push({ name: "Editar Actividad", params: activity });
};

const showActivity = (activity) => {
  router.push({ name: "Actividad", params: activity });
  localStorage.setItem("lastActivity", JSON.stringify(activity));
};

const removeParticipation = (activity) => {
  activity.isAssigned = false;
  updateActivity(activity);
  activitiesStore.updateActivities(activity);

  userStore.user.joinedActivities = userStore.user.joinedActivities.filter(
    (currentActivity) => currentActivity.id !== activity.id
  );
  userStore.updateUser(userStore.user);
  localStorage.setItem("lastActivity", JSON.stringify(activity));

  swal(
    "success",
    "Participación eliminada",
    "La actividad quedará disponible en mis actividades."
  );
};
</script>

<template>
  <main class="main-container" v-if="userStore.user">
    <h1 class="main-title">Mis actividades</h1>
    <div class="my-activities-container">
      <CreatedActivities
        :activities="userStore.user.userActivities"
        :editActivity="editActivity"
        :showActivity="showActivity"
        :deleteActivity="deleteActivity"
      />
      <ParticipatedActivities
        :activities="userStore.user.joinedActivities"
        :showActivity="showActivity"
        :removeParticipation="removeParticipation"
      />
      <PageInfoModal />
    </div>
  </main>
</template>

<style lang="scss">
h1 {
  text-align: center;
  color: var(--clr-emphasis-light);
}

.my-activities-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .main-title {
    width: 100%;
  }

  .card-activities {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: min(100%, 40rem);

    .title {
      color: var(--clr-emphasis-light);
      text-align: center;
    }

    .card-activity {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      background-color: var(--clr-yellow-light);
      padding: 1rem;
      border-radius: 20px;
      width: 100%;
      min-height: 10.5rem;
      gap: 2rem;

      .details {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: min(100%, 19rem);
        gap: 0.8rem;
        overflow: hidden;

        .activity-title {
          font-size: 1.563rem;
          font-weight: 700;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-align: center;
        }
        .description {
          background-color: var(--clr-emphasis-light);
          border-radius: 20px;
          width: 100%;
          height: 6.625rem;
          text-align: center;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 2rem;
          padding: 0.5rem;
        }
      }
      .info-and-btns {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        width: min(100%, 12.5rem);
        text-align: center;

        .buttons {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          justify-content: center;

          button {
            font-weight: 500;
            font-size: 1.5625rem;
            line-height: 44px;
            text-align: center;
            padding: 5px 10px;
            border-radius: 20px;
            background-color: var(--clr-dark-blue);
            border: 3px solid transparent;
            transition: background-color 0.5s ease, color 0.5s ease;
            color: var(--clr-yellow-light);

            &:hover,
            &:focus {
              cursor: pointer;
              background-color: var(--clr-dark-blue-shadow);
            }
            &.edit-btn {
              background-color: var(--clr-green-light);
              color: var(--clr-dark-blue);

              &:hover,
              &:focus {
                cursor: pointer;
                background-color: var(--clr-green-dark);
                color: var(--clr-emphasis-light);
              }
            }
          }
        }
      }
    }
  }
}
.no-activities {
  margin-top: 1rem;
  color: var(--clr-emphasis-light);
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
}
@media (max-width: 1440px) {
  .my-activities-container {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
  }
}
</style>
