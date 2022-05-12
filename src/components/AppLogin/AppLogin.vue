<script setup>
import AppLoginGoogle from '@/components/AppLogin/AppLoginGoogle.vue';
import { useUserStore } from '@/stores/useUserStore';
import { ref } from 'vue';

const login_form = ref({})
const userStore = useUserStore()

const login = async () => {
	userStore.login(login_form.value)
}

</script>
<template>
	<main class="login-container">
		<h3 class="login-title">{{ $route.name }}</h3>
		<form @submit.prevent="login">
			<div class="login-block">
				<label class="login-block__label" for="">Email</label>
				<input v-model="login_form.email" autocomplete="off" placeholder="Email" type="email" required>
			</div>
			<div class="login-block">
				<label class="login-block__label" for="">Contraseña</label>
				<input v-model="login_form.password" autocomplete="off" placeholder="Contraseña" type="password"
					required>
			</div>
			<p class="login-text">¿Has olvidado la <RouterLink :to="{ name: 'Recuperar contraseña' }">contraseña
				</RouterLink>?</p>
			<div class="login-buttons">
				<button class="login-submit">Iniciar Sesión</button>
			</div>
		</form>
		<div class="google-container">
			<div class="login-google">
				<AppLoginGoogle></AppLoginGoogle>
			</div>
			<p class="login-text">¿Aun no te has <RouterLink :to="{ name: 'Registrarse' }">registrado</RouterLink>?</p>
		</div>
	</main>
</template>

<style lang="scss" scoped>
#app {
	min-height: 50vh;

	main {
		min-height: 50vh;
		flex: 1 1 0;
		padding: 1rem;
		padding-left: 5rem;
	}
}

form {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
}

.container {
	max-width: 800px;
	margin: auto;
	padding: 0px;
	color: var(--clr-emphasis-light);
}

.login {

	&-container {
		display: flex;
		align-items: center;
		flex-direction: column;
		background-color: var(--clr-yellow-light);
		color: var(--clr-dark-blue);
		border-radius: 20px;
	}

	&-title {
		text-align: center;
	}

	&-text {
		text-align: center;

		a {
			color: inherit;
		}
	}

	&-block {
		display: flex;
		flex-flow: column;


		&__label {
			font-style: normal;
			letter-spacing: 0.0012em;
			font-weight: 550;
			font-size: 25px;
			line-height: 44px;
			text-align: center;

		}

		input {
			min-width: 44px;
			min-height: 44px;
			padding: 0px 15px;
			border-width: 3px;
			outline: none;
			border-style: solid;
			color: var(--clr-dark-blue-shadow);
			border-radius: 20px;
			padding-inline: 1rem;
			background-color: var(--clr-emphasis-light);
			border: 3px solid var(--clr-dark-blue-shadow);
			font-size: 1rem;
			transition: border 0.2s ease;
			box-shadow: (10px 10px 0px rgba(0, 0, 0, 0.15));

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

	&-buttons {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		padding: 0px;
		gap: 1.5rem;
	}

	&-submit {
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

	&-nav {
		display: flex;
		justify-content: space-evenly;
		align-items: center;

		a {
			color: var(--clr-dark-blue-shadow);
			text-decoration: none;
			padding: 0px 16px;
			background-color: var(--clr-yellow-light);
			border-radius: 15px;
			height: 44px;
		}
	}
}

.google-container{
 	display: flex;
	margin-top: 1.5rem;
	flex-direction: column;
	gap: 1.5rem;
}

@media (min-width:1440px) {
	main {
		max-width: 1440px;
		margin: 0 auto;
	}
}
</style>