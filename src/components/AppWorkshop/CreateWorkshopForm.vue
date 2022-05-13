<script setup>
import { ref } from 'vue';
// import { addNewWorkshop } from '@/services/firebase/crud'
import { addNewWorkshop } from '@/services/firebase/workshop/model.js';
import { useRouter } from 'vue-router';

import { swal } from '@/utils/swal.js'

function infoMap(){
	swal("infoMaps", "para insertar el mapa", '<p>Situado sobre el lugar de interés clicamos en "Compartir" y luego en "insertar un mapa", del "iframe" que nos dan a copiar solo usaremos la url (lo que está marcado en negrita) </p><p style="background: #003a70;border-radius: 20px;padding: 10px; color:white;">"&lt;iframe&gt; <strong style="color: #20f37a;">src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d449581.6911820676!2d-16.778972358006236!3d28.317801550662995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a8398062de729%3A0x67633a63c20a292d!2sParque%20Nacional%20del%20Teide!5e0!3m2!1ses!2ses!4v1652379991909!5m2!1ses!2ses"</strong> width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"&gt;/iframe&gt;"</p>')
} 

const router = useRouter();
const newWorkshop = ref({});

const sendForm = (e) => {
	e.preventDefault();
	addNewWorkshop(newWorkshop.value);
	router.push("/workshops")
};

const previewFiles = (event) =>{
	console.log(event.target.files);
	// console.log(localStorage)
}
</script>

<template>
	<div class="form-container">

		<h3 class="form-title">Crear Nuevo Taller</h3>
		<form @submit="sendForm" id="activity-form">
			<div class="title form-content">
				<label for="titleForm">Título</label>
				<input type="text" id="titleForm" placeholder="Título..." required v-model="newWorkshop.title">
			</div>
			<div class="description form-content">
				<label for="descriptionForm">Descripción corta</label>
				<textarea name="descriptionForm" id="descriptionForm" rows="4"
					placeholder="Introduzca una descripción..." required v-model="newWorkshop.descriptionShort"></textarea>
			</div>
			<div class="description form-content">
				<label for="descriptionShortForm">Descripción detallada</label>
				<textarea name="descriptionShortForm" id="descriptionShortForm" rows="4"
					placeholder="Introduzca una descripción..." required v-model="newWorkshop.description"></textarea>
			</div>
			<div class="time form-content">
				<div class="type form-content">
					<label for="typeForm">Tipo</label>
					<select id="typeForm" required v-model="newWorkshop.type">
						<option selected disabled value="undefined">Selecciona un tipo</option>
						<option value="social">Taller presencial</option>
						<option value="entretenimiento">Taller virtual</option>
					</select>
				</div>
				<div class="date form-content">
					<label for="dateForm">Fecha</label>
					<input class="" type="date" name="dateForm" id="dateForm" required v-model="newWorkshop.date">
				</div>
			</div>

			<div class="time form-content">
				<div class="from">
					<label for="fromTimeForm">Desde</label>
					<input type="time" name="fromTimeForm" id="fromTimeForm" min="06:00:AM" required
						v-model="newWorkshop.from">
				</div>
				<div class="to">
					<label for="toTimeForm">Hasta</label>
					<input type="time" name="toTimeForm" id="toTimeForm" required :min="newWorkshop.from" max="23:59:PM"
						:disabled="newWorkshop.from === undefined" v-model="newWorkshop.to">
				</div>
			</div>
			<div class="title form-content">
				<label for="nameForm">Nombre organización</label>
				<input type="text" id="nameForm" placeholder="Nombre organización..." required v-model="newWorkshop.name">
			</div>
			<div class="title form-content">
				<label for="directionForm">Dirección</label>
				<input type="text" id="directionForm" placeholder="Dirección..." required v-model="newWorkshop.direction">
			</div>
			<div class="title form-content">
				<label for="emailForm">Email</label>
				<input type="email" id="emailForm" placeholder="Email..." required v-model="newWorkshop.email">
			</div>
			<div class="title form-content">
				<label for="phoneForm">Teléfono</label>
				<input type="text" id="phoneForm" placeholder="Teléfono..." required v-model="newWorkshop.phone">
			</div>
			<div class="title form-content">
				<label for="mapForm">
					<p>mapa de <a class="titleForm__link" href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiWy-X5wdr3AhWMr6QKHdJBAq0QFnoECBMQAQ&url=https%3A%2F%2Fwww.google.es%2Fmaps%2Fpreview&usg=AOvVaw0o1hAAdos9liAIbMdBCeaK" target="_blank">google maps</a>
					</p>
					<a class="form-content__tooltip" v-on:click="infoMap">
					<small> ->clica para ver como insertar el mapa*</small>
					</a>
				</label>
				<input type="text" id="mapForm" placeholder="https://www.google.com/maps/embed?..."  v-model="newWorkshop.map">
			</div>
			<div class="title form-content">
				<label for="linkForm">Enlace para mas detalles en una web externa</label>
				<input type="text" id="linkForm" placeholder="https:// ..."  v-model="newWorkshop.link">
			</div>
			<div class="title form-content">
				<label for="logoForm">
					Enlace para mas detalles en una web externa
					<input type="file" id="logoForm" name="logo">
				</label>
			</div>
			<div class="buttons">
				<button form="activity-form" type="submit">Enviar</button>
			</div>
		</form>
		<input type="file" @change="previewFiles" multiple>


	</div>
</template>

<style lang="scss" scoped>
.form-container {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: var(--clr-yellow-light);
	color: var(--clr-dark-blue);
	border-radius: 20px;
	width: 100%;
	max-width: 650px;
	min-height: 85vh;
}

.form-title {
	text-align: center;
}


form {
    padding: 1rem 0rem;
	width: 100%;
	display: flex;
	gap: 15px;
	flex-direction: column;
	@media screen and (min-width: 768px) {
		padding: 1rem 2rem;
    }

	.form-content {
		display: flex;
		flex-direction: column;
		&__tooltip{
			cursor: pointer;
			position:relative;
			&:hover .form-content__tooltip--render, &--render:hover{
				opacity:1;
				transform:scale(1);
			}
			&--render{
				width:300px;
				position:absolute;
				background:white;
				border:20px;
				border-radius:20px;
				padding:10px;
				transition: all 0.5s ease;
				content:attr(data-tooltip);
				overflow: hidden;
				text-overflow: ellipsis;
				opacity:0.5;
				transform:scale(0.2) translate(-50%, -50%);
			}
		}
	}

	.title,
	.description {
		padding: 0px 10px;
		@media screen and (min-width: 768px) {
			padding: 0px 40px;
		}
	}

	label {
		font-family: 'AtkinsonHyperlegible';
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 35px;
		text-align: center;
		letter-spacing: 0.0012em;

	}
	.titleForm__link{
		font-weight: 700;
		font-size: 16px;
		color: var(--clr-dark-blue);
	}
	input,
	textarea,
	select {
		font-family: "AtkinsonHyperlegible", sans-serif;
		color: var(--clr-dark-blue-shadow);
		min-width: 44px;
		min-height: 44px;
		padding: 0px 15px;
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
		min-height: 25vh;
	}

	.time {
		display: flex;
		gap: 15px;
		flex-direction: row;
		justify-content: center;

		.type,
		.date {
			display: flex;
			flex-direction: column;
			min-width: 45%;
		}

		.from,
		.to,
			{
			display: flex;
			flex-direction: column;
			min-width: 25%;

		}
	}
}

.buttons {
	display: flex;
	justify-content: space-evenly;
}

button {

	font-style: normal;
	font-weight: 500;
	font-size: 25px;
	line-height: 44px;
	text-align: center;
	letter-spacing: 0.0012em;
	padding: 5px 10px;
	border-radius: 20px;
	background-color: var(--clr-dark-blue);
	border: 3px solid transparent;
	transition: background-color 0.5s ease;
	color: var(--clr-yellow-light);

	&:hover,
	&:focus {
		cursor: pointer;
		background-color: var(--clr-dark-blue-shadow);
	}
}

@media (min-width:640px) {
	main {
		max-width: 640px;
		margin: 0 auto;
	}
}
</style>