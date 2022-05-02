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
	<div class="login-google" style="border-bottom: 3px solid var(--clr-yellow-light);">
			<AppLoginGoogle></AppLoginGoogle>
		<h4 class="login-title">o</h4>
	</div>
	<h3 class="login-title">{{ $route.name }}</h3>
	<form @submit.prevent="login">
		<div class="login-block">
			<label class="login-block__label" for="">Email</label>
			<input v-model="login_form.email" autocomplete="off" placeholder="Email" type="email" required>
		</div>
		<div class="login-block">
			<label class="login-block__label" for="">Contraseña</label>
			<input v-model="login_form.password" autocomplete="off" placeholder="Contraseña" type="password" required>
		</div>
		<button class="login-submit">Enviar</button>
		<p class="login-text">¿Aun no te has <RouterLink :to="{ name: 'Registrarse' }">registrado</RouterLink>?</p>
	</form>
</template>

<style lang="scss" scoped>
.container {
	max-width: 800px;
	margin: auto;
	padding: 0px;
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
			min-width: 300px;
			min-height: 44px;
			border-radius: 50px;
			padding: 0px 15px;
			margin-bottom: 18px;
			border-width: 3px;
			outline: none;
			border-style: solid;

			&:hover,
			&:focus,
			&:focus-visible,
			&:focus-within {
				border-color: var(--clr-green-light);
			}
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
			margin-bottom: 16PX;

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
			background-color: var(--clr-yellow-light);
			border-radius: 15px;
			height: 44px;
			display: block;
		}
	}
}
</style>