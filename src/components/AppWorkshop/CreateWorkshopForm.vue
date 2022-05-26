<script setup>
import { ref, reactive } from 'vue';

// import { addNewWorkshop } from '@/services/firebase/crud'
import { addNewWorkshop ,addNewImageWorkshop, getImageWorkshop } from '@/services/firebase/workshop/model.js';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/useUserStore'
import { swal } from '@/utils/swal.js'

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';

let newWorkshop = reactive({ 
	title: '',
	slug: '', 
	descriptionShort: '', 
	description: '',
	type: '',
	date: '',
	from: '',
	to: '', 
	asociationName: '',
	direction: '',
	email: 'asd@asd.asd',
	phone: '',
	map: '',
	link: '',      
	image:'',
	renderImg:[], 
	imageLogo:'', 
	renderImgLogo:[] 
	})
function infoMap(){
	swal("infoMaps", "para insertar el mapa", '<p>Situado sobre el lugar de interés clicamos en "Compartir" y luego en "insertar un mapa", del "iframe" que nos dan a copiar solo usaremos la url (lo que está marcado en negrita) </p><p style="background: #003a70;border-radius: 20px;padding: 10px; color:white;">"<strong style="color: #20f37a;">&lt;iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d449581.6911820676!2d-16.778972358006236!3d28.317801550662995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a8398062de729%3A0x67633a63c20a292d!2sParque%20Nacional%20del%20Teide!5e0!3m2!1ses!2ses!4v1652379991909!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"&gt;&lt;/iframe&gt;</strong>"</p>')
} 

const router = useRouter();
newWorkshop = ref({ 
	description: '',
});
const userStore = useUserStore()

const sendForm = async (e) => {
	e.preventDefault();
	await fillForm().then(()=>{

		delete newWorkshop.value.renderImg;
		delete newWorkshop.value.renderImgLogo;
		addNewWorkshop(newWorkshop.value)
		router.push("/workshops")
	})
}

const fillForm = async () => {

	if( newWorkshop.value.image.length !==0 ){
		newWorkshop.value.slug = await convertToSlug(newWorkshop.value.title);
		let imageName = `${userStore.user.uid}/${newWorkshop.value.slug}-${newWorkshop.value.image.name}`;
		let urlImage = await addNewImageWorkshop(newWorkshop.value.image, imageName)
		newWorkshop.value.image = await getImageWorkshop(urlImage.metadata.fullPath)
	}
	if( newWorkshop.value.imageLogo.length !==0 ){
		newWorkshop.value.slug = await convertToSlug(newWorkshop.value.title);
		let imageNameLogo = `${userStore.user.uid}/${newWorkshop.value.slug}-${newWorkshop.value.imageLogo.name}`;
		let urlImage = await addNewImageWorkshop(newWorkshop.value.imageLogo, imageNameLogo)
		newWorkshop.value.imageLogo = await getImageWorkshop(urlImage.metadata.fullPath)
	}
}

function convertToSlug(value) {
	try{
		if(value){
			value=value.toLowerCase()
				.normalize('NFD')
				.replace(/[\u0300-\u036f]/g, "")
				.replace(/[^\w ]+/g, '')
				.replace(/ +/g, '-');
		}else{
			value='';
		}
		return value;
	} catch (error) {
		this.error = error;
	}
}

const previewImage = async (event, obj, image, render) =>{
	obj[render] = []
	let file = event.target.files;
	for (var i = 0; i < event.target.files.length; i++) {
		file = await event.target.files[i]
		obj[render].push(URL.createObjectURL(file) );
		obj[image] = file;
	}
}

</script>

<template>
	<div>
		<h3 class="form-title h3">Crear Nuevo Taller</h3>
		<form class="form-container" @submit="sendForm" id="activity-form">
			<div class="form-content form-content--half">
				<label class="form-content__label" for="titleForm">Título</label>
				<input class="form-content__input" type="text" id="titleForm" placeholder="Título..." required v-model="newWorkshop.title">			
			</div>
			<div class="form-content form-content--half">
				<label class="form-content__label" for="nameForm">Nombre organización</label>
				<input class="form-content__input" type="text" id="nameForm" placeholder="Nombre organización..." required v-model="newWorkshop.asociationName">
			</div>
			<div class="form-content form-content--tiny">
				<label class="form-content__label" for="typeForm">Tipo</label>
				<select class="form-content__input" id="typeForm" required v-model="newWorkshop.type">
					<option selected disabled value="undefined">Selecciona un tipo</option>
					<option value="social">Taller presencial</option>
					<option value="entretenimiento">Taller virtual</option>
				</select>
			</div>
			<div class="form-content form-content--tiny">
				<label class="form-content__label" for="dateForm">Fecha</label>
				<input class="form-content__input" type="date" name="dateForm" id="dateForm" required v-model="newWorkshop.date">
			</div>
			<div class="form-content form-content--tiny">
				<label class="form-content__label" for="fromTimeForm">Desde</label>
				<input class="form-content__input" type="time" name="fromTimeForm" id="fromTimeForm" min="06:00:AM" required
					v-model="newWorkshop.from">
			</div>
			<div class="form-content form-content--tiny">
				<label class="form-content__label" for="toTimeForm">Hasta</label>
				<input class="form-content__input" type="time" name="toTimeForm" id="toTimeForm" required :min="newWorkshop.from" max="23:59:PM"
					:disabled="newWorkshop.from === undefined" v-model="newWorkshop.to">
			</div>
			<div class="form-content">
				<label class="form-content__label" for="directionForm">Dirección</label>
				<input class="form-content__input" type="text" id="directionForm" placeholder="Dirección..." required v-model="newWorkshop.direction">
			</div>
			<div class="form-content">
				<label class="form-content__label" for="emailForm">Email</label>
				<input class="form-content__input" type="email" id="emailForm" placeholder="Email..." required v-model="newWorkshop.email">
			</div>
			<div class="form-content">
				<label class="form-content__label" for="phoneForm">Teléfono</label>
				<input class="form-content__input" type="text" id="phoneForm" placeholder="Teléfono..." v-model="newWorkshop.phone">
			</div>
			<div class="form-content">
				<label class="form-content__label" for="mapForm">
					<p>
						mapa 'iframe' de <a class="form-content__link" href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiWy-X5wdr3AhWMr6QKHdJBAq0QFnoECBMQAQ&url=https%3A%2F%2Fwww.google.es%2Fmaps%2Fpreview&usg=AOvVaw0o1hAAdos9liAIbMdBCeaK" target="_blank">google maps</a>
					</p>
					<a class="form-content__link form-content__link-popup" v-on:click="infoMap">
					<small> ->clica para ver como insertar el mapa*</small>
					</a>
				</label>
				<input class="form-content__input" type="text" id="mapForm" placeholder="https://www.google.com/maps/embed?..."  v-model="newWorkshop.map">
			</div>
			<div class="form-content">
				<label class="form-content__label" for="linkForm">Enlace para mas detalles en una web externa</label>
				<input class="form-content__input" type="text" id="linkForm" placeholder="https:// ..." v-model="newWorkshop.link">
			</div>
			<div class="form-content form-content--half">
				<label class="form-content__input form-content__label form-content__label--image" for="imageForm">
					<p class="form-content__label form-content__label--image">Imagen destacada del taller</p>

					<img class="form-content__image" :src="newWorkshop.renderImg[index]" v-for="(image, index) in newWorkshop.renderImg"  :index="index" :key="index" />
					<input class="" type="file" id="imageForm" name="logo" @input="previewImage($event, newWorkshop, 'image', 'renderImg')">
				</label>
			</div>
			<div class="form-content form-content--half">
				<label class="form-content__input form-content__label form-content__label--image" for="logoForm">
					<p class="form-content__label form-content__label--image">Logo de la Asociación</p>
					<img class="form-content__image" :src="newWorkshop.renderImgLogo[index]" v-for="(image, index) in newWorkshop.renderImgLogo"  :index="index" :key="index" />
					<input class="" type="file" id="logoForm" name="logo" @input="previewImage($event, newWorkshop, 'imageLogo', 'renderImgLogo')">
				</label>
			</div>
			<div class="form-content form-content--full">
				<label class="form-content__label" for="descriptionForm">Descripción corta</label>
				<textarea class="form-content__input form-content__textarea" name="descriptionForm" id="descriptionForm" rows="4"
					placeholder="Introduzca una descripción..." required v-model="newWorkshop.descriptionShort"></textarea>
			</div>
			<div class="form-content form-content--full">
				<label class="form-content__label" for="descriptionShortForm">Descripción detallada</label>
				<div class="form-content__input form-content__textarea form-content__textarea--ritcheditor">
					<QuillEditor id="descriptionShortForm" 
					contentType="html"
					v-model:content="newWorkshop.description"
					theme="snow" 
					:toolbar="[
					[{ 'size': [ 'small', false, 'large' ] }],
					[{ 'list': 'ordered'}, { 'list': 'bullet' }],
					['bold', 'italic', 'underline'],
					['blockquote', 'code-block'],
					[{ 'align': [] }],
					['clean']]" />
				</div>
			</div>
			<div class="form-content form-content--full form-content--center">
				<button class="form-content__btn" form="activity-form" type="submit">Enviar</button>
			</div>
		</form>
	</div>
</template>

<style lang="scss" scoped>
.form{
	.h3{
		font-size: 2.25rem;
		line-height: 3.375rem;
	}
	&-title{
		width:100%;
		text-align:center;
		color:var(--clr-emphasis-light);
	}
	&-container {
		padding:20px;
		display: flex;
		align-items: center;
		justify-content: center;
		align-items: stretch;
		flex-wrap:wrap;
		background-color: var(--clr-yellow-light);
		color: var(--clr-dark-blue);
		border-radius: 20px;
		width: 100%;
		gap:20px;
		max-width: 918px;
		margin:auto;
	}
	&-content{
		display:flex;
		flex-flow: wrap;
		align-items: end;
		gap:10px;
		max-width:900px;
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: 30%;
		min-width: 250px;
		@media screen and (min-width: 768px) {
			min-width: auto;
		}
		&--tiny{
			flex-basis: 20%;
		}
		&--half{
			flex-basis: 40%;
		}
		&--full{
			flex-basis: 100%;
		}
		&--center{
			  justify-content: center;
		}
		&__label{
			font-family: "AtkinsonHyperlegible", sans-serif;
			font-style: normal;
			font-weight: 700;
			font-size: 16px;
			line-height: 35px;
			text-align: center;
			letter-spacing: 0.0012em;
		}
		&__input{
			font-family: "AtkinsonHyperlegible", sans-serif;
			color: var(--clr-dark-blue);
			min-width: 44px;
			min-height: 44px;
			width:100%;
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
		&__textarea{
			width:100%;
			min-height:200px;
			padding:15px;
			overflow:hidden;
			&--ritcheditor{
				padding:0px;
			}
			::v-deep(#descriptionShortForm){
				font-family: "AtkinsonHyperlegible", sans-serif;
				& .ql-editor{
					height: 100%;
					min-height: 150px;
				}
			}
		}
		&__link{
			font-weight: 700;
			font-size: 16px;
			color: var(--clr-dark-blue);
			text-decoration:underline;
			cursor:pointer;
			&-popup{

			}
		}
		&__image{
			width:200px;
		}
		&__btn{
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
			box-shadow: (10px 10px 0px rgba(0, 0, 0, 0.15));
			&:hover,
			&:focus {
				cursor: pointer;
				background-color: var(--clr-dark-blue-shadow);
			}
		}
	}
}
</style>