<script setup>
import { onMounted, onBeforeMount, ref } from "vue";
import { useUserStore } from "../stores/useUserStore";
import { swal } from "@/utils/swal.js";
import { useRouter } from "vue-router";
import { updateActivity } from "@/services/firebase/crud.js";
import { useActivitiesStore } from "../stores/useActivitiesStore";
import PageInfoModal from "../components/PageInfoModal/PageInfoModal.vue";
import Chat from "../components/Chat/Chat.vue";
import ImgTypeHelp from "@/components/Images/ImgTypeHelp.vue";
import ImgTypeSocial from "../components/Images/ImgTypeSocial.vue";
import ImgTypeTransport from "../components/Images/ImgTypeTransport.vue";
import ImgTypeEntertaiment from "../components/Images/ImgTypeEntertaiment.vue";
import ImgTypeOthers from "../components/Images/ImgTypeOthers.vue";

const activitiesStore = useActivitiesStore();

const userStore = useUserStore();
const router = useRouter();
const activity = ref(router.currentRoute.value.params);

onBeforeMount(() => {
  if (Object.keys(activity.value).length === 0) {
    activity.value = JSON.parse(localStorage.getItem("lastActivity"));
  }
});

onMounted(() => {
  if (userStore.user !== null) {
    userStore.user.userActivities.forEach((element) => {
      if (element.userId === activity.value.userId) {
        activity.value.activityIsMine = true;
        localStorage.setItem("lastActivity", JSON.stringify(activity.value));
      }
    });
  }
});

const addParticipation = async () => {
  if (userStore.user.joinedActivities.length <= 2 || userStore.user.isAdmin === true) {
    activity.value.isAssigned = true;
    updateActivity(activity.value);
    activitiesStore.updateActivities(activity.value);
    userStore.user.joinedActivities.push(activity.value);
    userStore.updateUser(userStore.user);
    localStorage.setItem("lastActivity", JSON.stringify(activity.value));

    swal(
      "success",
      "¡Actividad aceptada!",
      "Se te ha asignado la actividad correctamente."
    );
    router.push("/myactivities");
  } else {
    return swal(
      "error",
      "Has llegado al límite",
      "Solo puedes apuntarte a tres actividades al mismo tiempo."
    );
  }
};
</script>

<template>
  <main>
    <div class="container">
      <div class="details">
        <h1>{{ activity.title }}</h1>
        <div class="description">
          <p>{{ activity.description }}</p>
        </div>
        <div class="info-box">
          <div class="info">
            <div class="type">
              <p><strong>Tipo:</strong> {{ activity.type }}</p>
            </div>
            <div class="date">
              <strong>Fecha: </strong> <span>{{ activity.date }}</span>
            </div>
            <div class="from">
              <strong>Desde</strong> <span>{{ activity.from }}</span>
            </div>
            <div class="to">
              <strong>Hasta</strong> <span>{{ activity.to }}</span>
            </div>
            <button
              @click="addParticipation()"
              :disabled="
                activity.activityIsMine ||
                activity.isAssigned === 'true' ||
                activity.isAssigned === true
              "
            >
              Me apunto
            </button>
          </div>
          <ImgTypeHelp v-if="activity.type === 'ayuda'" class="type-img" />
          <ImgTypeSocial v-if="activity.type === 'social'" class="type-img" />
          <ImgTypeTransport v-if="activity.type === 'transporte'" class="type-img" />
          <ImgTypeEntertaiment
            v-if="activity.type === 'entretenimiento'"
            class="type-img"
          />
          <ImgTypeOthers v-if="activity.type === 'otros'" class="type-img" />
        </div>
      </div>
      <Chat
        class="chat"
        v-if="
          activity.isAssigned === 'true' ||
          activity.isAssigned === true ||
          activity.activityIsMine
        "
        :activity="activity"
      />
    </div>
    <PageInfoModal />
  </main>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 1rem;
  max-width: 700px;
  justify-content: center;
  gap: 1rem;
}

.details {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  color: var(--clr-dark-blue);
  width: 100%;
  background-color: var(--clr-yellow-light);
  border-radius: 15px;
  box-shadow: var(--shadow);
  position: relative;

  h1 {
    font-weight: bold;
    text-align: center;
    color: var(--clr-dark-blue);
    font-size: 2rem;
  }

  h4 {
    font-weight: 700;
  }

  .description {
    color: var(--clr-dark-blue);
    background-color: white;
    border-radius: 15px;
    margin: 1rem;
    margin-bottom: 2rem;
    padding: 1rem;
    text-align: center;
  }

  .info-box {
    display: flex;
    justify-content: space-around;
    gap: 1rem;
    flex-wrap: wrap;
    .info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .type{
        text-transform: capitalize;
      }

      button {
        margin-top: 1rem;
        font-size: 1.5rem;
        text-decoration: none;
        text-align: center;
        background-color: var(--clr-dark-blue);
        padding: 10px 20px;
        max-width: 200px;
        border: 3px solid transparent;
        border-radius: 20px;
        color: var(--clr-yellow-light);
        transition: background-color 0.5s ease;

        &:hover {
          background-color: var(--clr-dark-blue-shadow);
          cursor: pointer;
        }

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      }
    }
    .type-img {
      border-radius: 20px;
      width: min(100%, 15rem);
    }
  }
}
</style>
