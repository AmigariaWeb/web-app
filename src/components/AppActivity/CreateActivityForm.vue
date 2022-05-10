<script setup>
import { ref } from 'vue';
import { addNewActivity } from '@/services/firebase/crud'
import { useRouter } from 'vue-router';

const router = useRouter();
const newActivity = ref({});

const sendForm = (e) => {
	e.preventDefault();
	addNewActivity(newActivity.value);
	router.push("/")
};
</script>

<template>
	<div class="form-container">
		<h3 class="form-title">Crear Nueva Actividad</h3>
		<form @submit="sendForm" id="activity-form">
			<div class="title form-content">
				<label for="titleForm">Título</label>
				<input type="text" id="titleForm" placeholder="Título..." required v-model="newActivity.title">
			</div>
			<div class="description form-content">
				<label for="descriptionForm">Descripción</label>
				<textarea name="descriptionForm" id="descriptionForm" rows="4"
					placeholder="Introduzca una descripción..." required v-model="newActivity.description"></textarea>
			</div>
			<div class="type form-content">
				<label for="typeForm">Tipo</label>
				<select id="typeForm" required v-model="newActivity.type">
					<option selected disabled value="undefined">Selecciona un tipo</option>
					<option value="social">Social</option>
					<option value="entretenimiento">Entretenimiento</option>
					<option value="transporte">Transporte</option>
					<option value="ayuda">Ayuda</option>
					<option value="otros">Otros</option>
				</select>
			</div>
			<div class="date form-content">
				<label for="dateForm">Fecha</label>
				<input class="" type="date" name="dateForm" id="dateForm" required v-model="newActivity.date">
			</div>
			<div class="time form-content">
				<div class="from">
					<label for="fromTimeForm">Desde</label>
					<input type="time" name="fromTimeForm" id="fromTimeForm" min="06:00:AM" required
						v-model="newActivity.from">
				</div>
				<div class="to">
					<label for="toTimeForm">Hasta</label>
					<input type="time" name="toTimeForm" id="toTimeForm" required :min="newActivity.from" max="23:59:PM"
						:disabled="newActivity.from === undefined" v-model="newActivity.to">
				</div>
			</div>
			<button form="activity-form" type="submit">Enviar</button>
		</form>
	</div>
</template>

<style lang="scss" scoped>
.form-container {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	justify-content: center;
	background-color: var(--clr-yellow-light);
	color: var(--clr-dark-blue-shadow);
	border-radius: 20px;
	width: 100%;
	max-width: 650px;
	min-height: 100vh;
}

.form-title {
	text-align: center;
}

form {
	padding: 1rem 2rem;
	width: 100%;
	display: flex;
	flex-direction: column;


	.form-content {
		display: flex;
		flex-direction: column;
	}

	label {
		font-family: 'Atkinson Hyperlegible';
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 35px;
		text-align: center;
		letter-spacing: 0.0012em;

	}

	input,
	textarea,
	select {
		font-family: "AtkinsonHyperlegible", sans-serif;
		color: var(--clr-dark-blue-shadow);
		min-width: 44px;
		min-height: 44px;
		padding: 0px 15px;
		margin-bottom: 18px;
		margin-right: 15px;
		border-width: 3px;
		outline: none;
		border-radius: 20px;
		padding-inline: 1rem;
		background-color: var(--clr-emphasis-light);
		border: 3px solid var(--clr-dark-blue-shadow);
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

		&:disabled {
			background-color: #ffffffd1;
		}
	}

	textarea {
		padding-top: 0.5rem;
		resize: none;
	}

	.time {
		flex-direction: row;
		justify-content: space-between;

		.from,
		.to {
			display: flex;
			flex-direction: column;
			min-width: 50%;
			margin-right: 20px;

		}
	}
}

button {

	font-family: "AtkinsonHyperlegible", sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 25px;
	line-height: 44px;
	text-align: center;
	letter-spacing: 0.0012em;
	margin: 20px 0px;
	border-radius: 20px;
	font-size: 1.5rem;
	color: var(--clr-yellow-light);
	height: 50px;
	background-color: var(--clr-dark-blue-shadow);
	cursor: pointer;
}

@media (min-width:640px) {
	main {
		max-width: 640px;
		margin: 0 auto;
	}
}
</style>