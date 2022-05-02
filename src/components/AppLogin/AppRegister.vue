<script setup>
import AppLoginGoogle from "@/components/AppLogin/AppLoginGoogle.vue";
import { useUserStore } from "@/stores/useUserStore";
import { ref } from "vue";

const register_form = ref({});
const userStore = useUserStore();

const register = async () => {
  console.log(register_form.value);
  userStore.register(register_form.value);
};
</script>
<template>
  <p class="login-text">
    ¿Ya estas registrado? <RouterLink :to="{ path: '/login' }">Inicia sesión</RouterLink>
  </p>
  <div class="login-google" style="border-bottom: 3px solid var(--clr-yellow-light)">
    <AppLoginGoogle></AppLoginGoogle>
    <h4 class="login-title">o</h4>
  </div>
  <h3 class="login-title">{{ $route.name }}</h3>
  <form @submit.prevent="register">
    <div class="login-block">
      <label class="login-block__label" for="">Email</label>
      <input v-model="register_form.email" autocomplete="off" placeholder="Introduce tu email" type="email" required />
    </div>
    <div class="login-block">
      <label class="login-block__label" for="">Contraseña</label>
      <input v-model="register_form.password" autocomplete="off" placeholder="Introduce tu contraseña" type="password"
        required />

      <input autocomplete="off" placeholder="Repite tu contraseña" type="password" required />
    </div>

    <div class="login-block">
      <label class="login-block__label" for="">Datos personales</label>
      <input autocomplete="off" placeholder="introduce tu nombre" type="text" required />
      <input autocomplete="off" placeholder="introduce tus apellidos" type="text" required />
      <input autocomplete="off" placeholder="introduce tu código postal" type="text" required />
    </div>
    <button class="login-submit">Enviar</button>
  </form>
</template>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 15px;
  color: var(--clr-emphasis-light);
}

.login {

  &-title {
    text-align: center;
  }

  &-text {
    text-align: center;
    margin: 8px 0px;

    a {
      color: inherit;
    }
  }

  &-block {
    display: flex;
    flex-flow: column;
    margin: 0px 15px 0px 15px;

    &__label {
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 63px;
      letter-spacing: 0.0012em;

      font-weight: 400;
      font-size: 25px;
      line-height: 44px;
    }

    input {
      color: var(--clr-dark-blue-shadow);
      min-height: 44px;
      border-radius: 20px;
      padding-inline: 1rem;
      background-color: var(--clr-emphasis-light);
      border: 3px solid var(--clr-dark-blue-shadow);
      font-size: 1rem;
      transition: border 0.2s ease;
      box-shadow: (10px 10px 0px rgba(0, 0, 0, 0.15));
      margin-bottom: 16px;

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

  &-submit {
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 44px;
    text-align: center;
    letter-spacing: 0.0012em;
    min-height: 44px;
    margin: 32px auto 32px auto;
    width: 100%;
    border-radius: 0px;
    background-color: var(--clr-yellow-light);
    border: none;
    transition: background-color 0.5s ease;
    color: var(--clr-dark-blue-shadow);

    &:hover,
    &:focus {
      background-color: var(--clr-yellow-shadow);
      cursor: pointer;
    }
  }

  &-nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    a {
      color: var(--clr-dark-blue-shadow);
      text-decoration: none;
      padding: 0px 16px;
      background-color: var(--clr-green-light);
      border-radius: 15px;
      height: 44px;
      display: block;
    }
  }
}
</style>
