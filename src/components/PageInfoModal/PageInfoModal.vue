<script setup>
import { useRoute } from 'vue-router'
import { swal } from '../../utils/swal'

const route = useRoute()

const TEXTS_PAGES = {
  "Actividades":
    "Escoge entra las diferentes actividades que salen en pantalla. Si pulsas en 'Saber más', verás los detalles de la actividad y podrás apuntarte.",
  "Actividad":
    "Aquí verás los detalles de la actividad. Si pulsas en 'Me apunto' se te asignará esa actividad solo a ti.",
  "Talleres":
    'Listado de diferentes talleres grupales en colaboración con asociaciones. Si pulsas en alguno podrás ver más información.',
  'Mis Actividades':
    "Aquí podrás gestionar las actividades creadas y a las que te hayas apuntado. En el botón 'Borrar' eliminaras tus actividades y tus asignaciones. Si necesitas editar algún campo de tu actividad, pulsa en 'Editar'.",
  'Crear Actividad':
    'Rellena TODOS los campos para poder crear una actividad. Título: Máximo de 50 caracteres. Descripción: Máximo de 300 caracteres. Tipo: selecciona alguna de las opciones. Fecha: Una fecha posterior o igual al día actual. Desde: Hora a la que empieza tu actividad. Hasta: Hora a la que finaliza tu actividad.',
  'Editar Actividad':
    "Modifica cualquier campo que quieras cambiar y pulsa el botón 'Enviar'.",
  'Perfil de Usuario':
    "Aquí se muestran algunos datos de tu perfil. Pulsa en 'Editar' para modificar los campos modificables.",
}

const text = TEXTS_PAGES[route.name]

const showInfo = () => {
  swal('info', route.name, text)
}
</script>
<template>
  <div class="info-modal">
    <button @click="showInfo">
      <img src="../../assets/images/info-modal.svg" alt="" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.info-modal {
  position: fixed;
  bottom: 10%;
  right: 5%;

  button {
    border-radius: 50%;
    display: flex;

    background-color: transparent;
    border: none;
    box-shadow: 2px 2px 0px #00000030;
    transition: transform 0.3s ease-out;

    &:hover,
    &:focus {
      cursor: pointer;
      transform: scale(1.1);
    }

    img {
      width: min(100%, 2.5rem);
      border-radius: 50%;
      width: min(100%, 2.8em);
    }
  }
}
</style>
