<script setup>
import { useUserStore } from '../stores/useUserStore'
import PageInfoModal from '../components/PageInfoModal/PageInfoModal.vue'
import { onBeforeMount, ref } from 'vue'
import { swal } from '../utils/swal'

const userStore = useUserStore()
const editMode = ref(false)

const initialValues = ref({})

const addInitialValues = (newValues) => {
  initialValues.value.name = newValues.name
  initialValues.value.description = newValues.description
  initialValues.value.image = newValues.image
  initialValues.value.email = newValues.email
}

if (userStore.user) {
  addInitialValues(userStore.user)
  localStorage.setItem('userInfo', JSON.stringify(initialValues.value))
}

onBeforeMount(() => {
  if (userStore.user === null) {
    const localValues = JSON.parse(localStorage.getItem('userInfo'))
    addInitialValues(localValues)
  }
})

const sendNewValues = () => {
  userStore.updateUser(userStore.user)
  swal(
    'success',
    'Perfil actualizado',
    'Se han actualizado tus datos correctamente.'
  )
  addInitialValues(userStore.user)
  localStorage.setItem('userInfo', JSON.stringify(initialValues.value))
  editMode.value = false
}

const cancelEditMode = () => {
  userStore.user.name = initialValues.value.name
  userStore.user.description = initialValues.value.description
  editMode.value = false
}
</script>

<template>
  <main>
    <div class="container">
      <div class="user-details">
        <div class="user-image">
          <img
            :class=" { 'user-image-google': userStore.user.image }"
            v-if="initialValues.image"
            :src="initialValues.image"
            alt="imagen de usuario"
          />
          <img
            v-else
            src="../assets/images/amigaria-logo.svg"
            alt="imagen de usuario"
          />
        </div>
        <div class="user-email">
          <label for="userEmail">Email: </label>
          <span>{{ initialValues.email }}</span>
        </div>
        <div class="user-password">
          <label for="userPassword">Contraseña: </label>
          <button class="password-btn" @click="userStore.resetPassword()">
            Cambiar contraseña
          </button>
        </div>
        <div class="user-name">
          <label for="editName">Usuario: </label>
          <span v-if="editMode === false">
            {{ initialValues.name || 'Anónimo' }}
          </span>
          <input
            v-else
            type="text"
            name="editName"
            v-model="userStore.user.name"
            maxlength="30"
          />
        </div>
        <div class="user-description">
          <label for="editDescription">Descripción: </label>
          <span v-if="editMode === false">
            {{ initialValues.description || 'Vacío' }}
          </span>
          <textarea
            v-else
            name="editDescription"
            v-model="userStore.user.description"
            rows="4"
            maxlength="100"
          ></textarea>
        </div>

        <div class="buttons">
          <button v-if="editMode === false" @click="editMode = true">
            Editar
          </button>
          <div v-else class="editMode-btns">
            <button @click="sendNewValues()">Enviar</button>
            <button class="cancel-btn" @click="cancelEditMode()">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
    <PageInfoModal />
  </main>
</template>

<style lang="scss" scoped>
.container {
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top:1rem;

  .user-details {
    background-color: var(--clr-yellow-light);
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    justify-content: center;
    color: var(--clr-dark-blue);
    padding: 1rem;
    border-radius: 20px;
    width: min(100%, 25rem);
    min-height: 24rem;

    .user-description,
    .user-name,
    .user-email,
    .user-password {
      display: flex;
      flex-direction: column;
    }

    .user-image {
      align-self: center;
      display: flex;
      justify-content: center;
      background-color: var(--clr-emphasis-light);
      border-radius: 50%;
      width: min(100%, 8rem);
      padding: 0.5rem;
      overflow: hidden;
      img {
        padding: 0.5rem;
        width: min(100%, 8rem);
      }
      .user-image-google {
        border-radius: 50%;
      }
    }

    .password-btn {
      background-color: transparent;
      border: none;
      font-size: 1rem;
      text-decoration: underline;
      width: min(100%, 9rem);
      font-family: 'AtkinsonHyperlegible', sans-serif;
      color: var(--clr-dark-blue);

      &:hover{
        cursor: pointer;
      }
    }

    span,
    label,
    input {
      font-size: 1.1rem;
      word-break: break-all;
    }
    label {
      font-weight: 700;
    }
    input,
    textarea {
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
      border: 3px solid var(--clr-dark-blue);
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
    }
    textarea {
      padding-top: 0.5rem;
    }

    .user-description {
      min-height: 7rem;
    }

    .buttons {
      display: flex;
      justify-content: center;

      .editMode-btns {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1rem;
        justify-content: center;
      }

      button {
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
      }

      .cancel-btn {
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
</style>
