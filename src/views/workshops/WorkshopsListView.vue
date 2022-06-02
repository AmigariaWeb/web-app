<script setup>
import { onBeforeMount, onMounted, reactive } from 'vue';
import { useWorkshopsStore } from '@/stores/useWorkshopsStore.js';
import { storeToRefs } from 'pinia';
import WorkshopList from '@/components/AppWorkshop/WorkshopList.vue';
import Spinner from '@/components/Spinner/Spinner.vue';
import PageInfoModal from '@/components/PageInfoModal/PageInfoModal.vue'
import { deletenewWorkshopById } from '@/services/firebase/workshop/model.js';
import { useUserStore } from '@/stores/useUserStore'
import { swal } from '@/utils/swal.js'
import { useRouter } from 'vue-router'
const { workshops, loading} = storeToRefs(useWorkshopsStore())
const { fetchWorkshops } = useWorkshopsStore();
const { user, isAssociation} = storeToRefs(useUserStore())
const { setAssociation } = useUserStore()
const router = useRouter()

    let data = reactive({
        workshop:[],
        canUpdate:false,
        render:false
     });

// Rellenar actividades
    onBeforeMount( async () => {
      await fetchWorkshops()
      await setAssociation()

      data.workshop = workshops.value

      if(user.value.isAssociation){
        data.workshop = workshops.value.filter((workshop)=> workshop.userId === user.value.uid  )
      }
      data.render = true
    })

    onMounted(() => {
      if(user.value.isAssociation || user.value.isAdmin){
        data.canUpdate = true
      }
    })

const editWorkshop = (workshop) => {
    console.log('EDITANDOOO!!')
    const editWorkshops = () => {
    router.push({ name: 'Editar Taller', params: workshop })
    // console.log(workshop);
  }
  swal(
    'editWorkshops',
    '¿Estas seguro?',
    'Editar el taller publicado',
    editWorkshops
  )
  return false;
}

const removeWorkshop = (workshop) => {
    const confirmRemove = async () => {
      let element = document.querySelector('#'+workshop.id+workshop.slug)
      // element.classList.add("remove")
      let auxArray = []
      data.workshop.filter((item)=>{ 
        if(item.id !== workshop.id){
          auxArray.push(item)
        }
      })
      await deletenewWorkshopById(workshop.id)
      data.workshop = auxArray
  }
  swal(
    'confirmWorkshops',
    '¿Estas seguro?',
    'El taller publicado sera eliminado',
    confirmRemove
  )
  return false;
}
</script>

<template>
  <Spinner v-if="loading" />
  <main v-if="data.render">
    <div v-if="data.workshop.length === 0" >
      <h1 class="workshops-content__title">Aun no hay talleres registrados</h1>
      <div class="workshops-content__button">
        <img src="@/assets/images/create-activity-icon.svg" alt="ir actividades" />
        <RouterLink class="workshops-content__button--crearActividad" to="/workshops/form">
          Crear Taller
        </RouterLink>
      </div>
    </div>
    <div v-else-if="data.workshop.length > 0">
      <h1 class="workshops-content__title">Talleres</h1>
    </div>
    <div v-if="data.workshop.length > 0" class="workshops-content">
      <WorkshopList v-for="(workshop, index) in data.workshop" 
        :data="workshop" 
        :index="index" 
        :canUpdate="data.canUpdate" 
        :key="index"
        :removeWorkshop="removeWorkshop"
        :editWorkshop="editWorkshop"
      />
    </div>
    <PageInfoModal />
  </main>
</template>

<style lang="scss" scoped>
  .workshops{
    &-content{
      display: flex;
      flex-flow: column;
      gap:60px;
      transition: all 5s ease-in-out;
      &__title{
        text-align: center;
        color: var(--clr-emphasis-light);
      }
      &__button{
        margin:auto;
        display: flex;
        justify-content: center;
        gap: 5px;
        &--crearActividad{
          font-style: normal;
          font-weight: 400;
          font-size: 1.5625rem;
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
      }
    }
  }
</style>
