<script setup>
import { ref } from 'vue';
import { addNewActivity } from '@/services/firebase/crud'
import { useRouter } from 'vue-router';

const router = useRouter();
const newActivity = ref({});

const sendForm = (e) => {
	e.preventDefault();
	newActivity.value.id = Date.now();
	addNewActivity(newActivity.value);
	router.push("/")
};
</script>

<template>
	<form @submit="sendForm" id="activity-form">
		<div class="title form-content">
			<label for="titleForm">Título</label>
			<input type="text" id="titleForm" placeholder="Título..." required v-model="newActivity.title">
		</div>
		<div class="description form-content">
			<label for="descriptionForm">Descripción</label>
			<textarea name="descriptionForm" id="descriptionForm" rows="4" placeholder="Introduzca una descripción..."
				required v-model="newActivity.description"></textarea>
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
				<input type="time" name="fromTimeForm" id="fromTimeForm" min="06:00:AM" required v-model="newActivity.from">
			</div>
			<div class="to">
				<label for="toTimeForm">Hasta</label>
				<input type="time" name="toTimeForm" id="toTimeForm" required :min="newActivity.from" max="23:59:PM"
					:disabled="newActivity.from === undefined" v-model="newActivity.to">
			</div>
		</div>
	</form>
	<button form="activity-form" type="submit">Enviar</button>
</template>

<style lang="scss" scoped>
form {
	padding: 1rem 2rem;
	width: min(100%, 640px);
	display: flex;
	flex-direction: column;
	gap: 5px;

	.form-content {
		display: flex;
		flex-direction: column;
	}

	label {
		color: var(--clr-emphasis-light);
		font-size: 1.563rem;
		line-height: 2.75rem;
	}

	input,
	textarea,
	select {
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

		&:hover,
		&:focus {
			outline: none;
			border: 3px solid var(--clr-green-light);
		}

		&::placeholder {
			color: var(--clr-green-dark);
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
		flex-wrap: wrap;

		.from,
		.to {
			display: flex;
			flex-direction: column;
			width: min(45%, 15rem);
		}
	}
}

button {
	font-family: "AtkinsonHyperlegible", sans-serif;
	font-size: 1.5rem;
	color: var(--clr-dark-blue-shadow);
	width: min(100%, 640px);
	height: 50px;
	background-color: var(--clr-yellow-light);
	border: none;
	transition: background-color 0.5s ease;

	&:hover,
	&:focus {
		background-color: var(--clr-yellow-shadow);
		cursor: pointer;
	}
}

@media(min-width:640px) {

	button {
		width: min(100%, 560px);
		height: 4.375rem;
		border-radius: 20px;
	}
}
</style>