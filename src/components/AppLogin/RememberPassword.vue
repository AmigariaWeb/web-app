
<script setup>
import { auth } from '../../services/firebase';
import { sendPasswordResetEmail } from '@firebase/auth';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { swal } from '@/utils/swal.js'

const router = useRouter();
const email = ref("")

const resetUserPassword = async () => {
  try {
    await sendPasswordResetEmail(auth, email.value)
    swal("success", "Email válido", "¡Te hemos enviado un correo! Ahora cambia tu contraseña e inicia sesión.")
    router.push('/login')
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      return swal("error", "Email incorrecto", "Este email de usuario no existe.")
    }
    if (error.code === "auth/missing-email") {
      return swal("error", "Email vacio", "Rellena el campo email.");
    }
  }
}
</script>
<template>
  <RouterLink to="/login">&lt- Volver a inicio de sesión</RouterLink>
  <form class="resetPasswordForm" @submit.prevent="resetUserPassword">
    <h1>¿Has olvidado la contraseña?</h1>
    <p>Introduce tu correo electrónico para obtener una nueva.</p>
    <div class="details">
      <label for="emailForResetPass">Email:</label>
      <input id="emailForResetPass" type="email" name="email" v-model="email" placeholder="email@email.com">
    </div>
    <button>Enviar</button>
    <img src="@/assets/images/forgot-password.svg" alt="recordar contraseña">
  </form>
</template>

<style lang="scss" scoped>
a {
  color: var(--clr-emphasis-light);
  display: block;
  width: min(100%, 15rem);
  padding: 1rem;
  text-decoration: none;
  font-weight: 600;

}

.resetPasswordForm {
  position: relative;
  color: var(--clr-dark-blue);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: var(--clr-yellow-light);
  border-radius: 20px;
  padding: 2rem 0.5rem;

  p {
    font-size: 1.2rem;
  }

  .details {
    display: flex;
    flex-direction: column;



    label {
      font-weight: 700;
      font-size: 1.5625rem;
    }

    input {
      font-family: "AtkinsonHyperlegible", sans-serif;
      color: var(--clr-dark-blue-shadow);
      min-height: 44px;
      min-width: 220px;
      border-radius: 20px;
      padding-inline: 1rem;
      background-color: var(--clr-emphasis-light);
      border: 3px solid var(--clr-dark-blue-shadow);
      font-size: 1rem;
      transition: border 0.2s ease;
      box-shadow: (10px 10px 0px rgba(0, 0, 0, 0.15));
      margin-bottom: 1rem;

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

  }

  button {
    font-style: normal;
    font-weight: 400;
    font-size: 1.5625rem;
    line-height: 2.34375rem;
    text-align: center;
    padding: 10px 10px;
    border-radius: 20px;
    background-color: var(--clr-dark-blue);
    border: none;
    transition: background-color 0.5s ease;
    color: var(--clr-yellow-light);

    &:hover,
    &:focus {
      background-color: var(--clr-dark-blue-shadow);
      color: var(--clr-yellow-light);
      cursor: pointer;
    }
  }

  img {
    position: relative;
    max-height: 100px;
    bottom: 0px;
    align-self: flex-start;
    margin-top: -100px;
    width: min(100%, 200px);
    transition: 0.3s ease-out;
  }
}

@media(max-width:640px) {
  .resetPasswordForm {

    h1 {
      font-size: 1.8rem;
    }
  }
}

@media(max-width:500px) {
  .resetPasswordForm {
    img {
      margin-top: 0px;
      align-self: center;
    }
  }
}
</style>
