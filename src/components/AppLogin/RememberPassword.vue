
<script setup>
import { auth } from '../../services/firebase';
import { sendPasswordResetEmail } from '@firebase/auth';
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref("")

const resetUserPassword = async () => {
  try {
    await sendPasswordResetEmail(auth, email.value)
    alert("¡Te hemos enviado un correo! Cambía tu contraseña e inicia sesión");
    router.push('/login');
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      return alert("Este email de usuario no existe.")
    }
    if (error.code === "auth/missing-email") {
      return alert("Introduce un correo.")
    }
  }
}
</script>
<template>
  <RouterLink to="/login">&lt- Volver a inicio de sesión</RouterLink>
  <form class="resetPasswordForm" @submit.prevent="resetUserPassword">
    <h3>¿Has olvidado la contraseña?</h3>
    <p>Introduce tu correo electrónico para obtener una nueva.</p>
    <div class="details">
      <label for="emailForResetPass">Email:</label>
      <input id="emailForResetPass" type="email" name="email" v-model="email" placeholder="email@email.com">
      <button>Enviar</button>
    </div>
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
    width: min(100%, 15rem);



    label {
      font-weight: 700;
    }

    input {
      font-family: "AtkinsonHyperlegible", sans-serif;
      color: var(--clr-dark-blue-shadow);
      min-height: 44px;
      border-radius: 20px;
      padding-inline: 1rem;
      background-color: var(--clr-emphasis-light);
      border: 3px solid var(--clr-dark-blue-shadow);
      font-size: 1rem;
      transition: border 0.2s ease;
      box-shadow: (10px 10px 0px rgba(0, 0, 0, 0.15));
      margin-bottom: 1rem;
    }

    button {
      width: min(100%, 10rem);
      border-radius: 20px;
      padding: 1rem;
      border: 3px solid transparent;
      color: var(--clr-dark-blue);
      background-color: var(--clr-green-light);
      font-size: 1.5rem;
      align-self: center;

      &:hover {
        cursor: pointer;
        background-color: var(--clr-green-dark);
        color: var(--clr-emphasis-light);
      }
    }


  }

  img {
    position: relative;
    bottom: 0px;
    left: -100px;
    width: min(100%, 200px);
    transition: 0.3s ease-out;
  }
}

@media(max-width:640px) {
  .resetPasswordForm {

    h3 {
      font-size: 1.8rem;
    }

    img {
      left: 0px;
    }
  }
}
</style>