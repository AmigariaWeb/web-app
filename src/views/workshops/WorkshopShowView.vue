<script setup>
import { useWorkshopsStore } from "@/stores/useWorkshopsStore.js";
import { storeToRefs } from "pinia";
import Spinner from "@/components/Spinner/Spinner.vue";

import { onBeforeMount, onMounted, ref, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const { selectedWorkshop } = storeToRefs(useWorkshopsStore());
const { fetchWorkshops, workshopBySlug } = useWorkshopsStore();
let workshop = reactive({});
let page = reactive({
  render:false
});


onMounted(async() => {
  workshop = selectedWorkshop.value;
});
onBeforeMount(async () => {
  await fetchWorkshops();
  workshop = await workshopBySlug(route.params.slug);
  if(!workshop){
    router.push("/404");
  }
  page.render= true;
});
</script>

<template>
  <main v-show="page.render">

    <div class="container">
      <h1 class="card-header__title">{{ selectedWorkshop.title }}</h1>
      <div class="card">
        <div class="card-header"></div>
        <div class="card-body">
          <img
            class="card-body__img"
            :src="selectedWorkshop.image"
            :alt="selectedWorkshop.title"
          />
          <div class="card-body__text">
            <div v-html="selectedWorkshop.description"></div>
            <div class="card-body__detall">
              <p><strong>Modalidad:</strong> {{ selectedWorkshop.type }}</p>
              <p><strong>Fecha:</strong> {{ selectedWorkshop.date }}</p>
              <p>
                <strong>Horario:</strong> {{ selectedWorkshop.from }} -
                {{ selectedWorkshop.to }}
              </p>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="card-footer__item">
            <h2 class="card-footer__title">cómo llegar</h2>
            <div class="card-footer__map" v-html="selectedWorkshop.map"></div>
          </div>
          <div class="card-footer__item">
            <p class="card-footer__title">Detalles del organizador</p>
            <div class="card-footer__wrap card-footer__wrap--detall">
              <img
                class="card-footer__img"
                :src="selectedWorkshop.imageLogo"
                :alt="workshop.title"
              />
              <div class="card-footer__detall">
                <p><strong>Nombre:</strong> {{ selectedWorkshop.asociationName }}</p>
                <p><strong>Dirección:</strong> {{ selectedWorkshop.direction }}</p>
                <p>
                  <a :href="`mailto:` + selectedWorkshop.email">
                    <strong>Email:</strong> {{ selectedWorkshop.email }}
                  </a>
                </p>
                <p>
                  <a :href="`tel:+` + selectedWorkshop.phone">
                    <strong>Teléfono:</strong> {{ selectedWorkshop.phone }}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          v-if="selectedWorkshop.link"
          class="card__btn"
          :href="selectedWorkshop.link"
          target="_blank"
          >Apuntate</a
        >
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.card-footer__map ::v-deep(iframe) {
  height: 100% !important;
  width: 100% !important;
}
::v-deep(h1),
::v-deep(h2),
::v-deep(h3) {
  word-wrap: break-word;
}
.container {
}
.card {
  border-radius: 20px;
  box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.15);
  background-color: var(--clr-green-light);
  max-width: 979px;
  text-decoration: none;
  border-radius: 20px;
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-flow: column;
  gap: 20px;
  color: var(--clr-dark-blue);
  margin: auto;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
  @media screen and (min-width: 1024px) {
    gap: 40px;
  }
  &-header,
  &-body {
    border-radius: 20px;
  }
  &-header {
    &__title {
      text-align: center;
      color: var(--clr-emphasis-light);
      line-height: 4.5rem;
    }
  }
  &-body {
    min-height: 300px;
    display: flex;
    flex-flow: column;
    gap: 20px;
    &__img {
      object-fit: cover;
      min-height: 200px;
      height: 100%;
      max-height: 245px;
      width: 100%;
      border-radius: 20px;
    }
    &__text {
      border-radius: 20px;
      background-color: var(--clr-emphasis-light);
      padding: 10px;
      ::v-deep(.ql-size-small) {
        font-size: 0.75rem;
      }
      ::v-deep(.ql-size-large) {
        font-size: 1.5rem;
      }
    }
    &__detall {
      margin: 10px 0px 0px 0px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      justify-content: space-evenly;
      gap: 20px;
      flex-wrap: wrap;
    }
  }
  &__link {
    font-weight: 900;
    cursor: pointer;
    text-decoration: underline;
  }
  &-footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 40px;
    &__item {
      font-size: 16px;
      line-height: 35px;
      width: 100%;
      flex: 100%;
      @media screen and (min-width: 768px) {
        flex: 1;
        width: auto;
      }
    }
    &__map {
      height: 163px;
      width: 100%;
      border-radius: 20px;
      overflow: hidden;
      margin: auto;
      @media screen and (min-width: 768px) {
        width: 265px;
      }
    }
    &__title {
      margin: 20px 0px;
      font-weight: 700;
      font-size: 16px;
      line-height: 35px;
      text-align: center;
    }
    &__img {
      height: 162px;
      width: 100%;
      border-radius: 20px;
      object-fit: contain;
      @media screen and (min-width: 768px) {
        width: 250px;
      }
    }
    &__wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      align-items: center;
      &--detall {
        @media screen and (min-width: 768px) {
          flex-flow: row;
        }
      }
    }
    &__detall {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      word-wrap: break-word;
      width: 100%;
      @media screen and (min-width: 768px) {
        width: auto;
      }
      ::v-deep(a) {
        color: var(--clr-dark-blue);
      }
      ::v-deep(p) {
        padding: 0px 10px;
      }
    }
  }
  &__btn {
    font-size: 1.5rem;
    width: min(100%, 150px);
    border-radius: 20px;
    padding: 0.5rem;
    background-color: var(--clr-dark-blue);
    color: var(--clr-yellow-light);
    transition: background-color 0.5s ease, color 0.5s ease;
    text-align: center;
    text-decoration: none;
    margin: 0 auto 0.5rem auto;

    &:hover {
      background-color: var(--clr-dark-blue-shadow);
    }
  }
}
</style>
