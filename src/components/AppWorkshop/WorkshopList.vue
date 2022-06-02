<script setup>
import { RouterLink } from 'vue-router'
import Spinner from '@/components/Spinner/Spinner.vue';
import { onMounted, reactive } from 'vue';
    const props = defineProps({
        data:Object,
        index:Number,
        canUpdate:Boolean,
        removeWorkshop: Function,
        editWorkshop: Function
    })

    let objReactive = reactive({
        image: true,
        loading:true
     });
    onMounted(() => {
        const myTimeout = setTimeout(()=>{
            objReactive.loading = false;
            clearTimeout(myTimeout);
        }, 500);
    })


</script>
<template>

    <Spinner v-show="objReactive.loading" />
    <RouterLink v-if="!canUpdate" v-show="!objReactive.loading" :to="'/workshops/' + data.slug" class="card" :class="index % 2 ? 'card-right' : 'card-left'">
        <h2 class="card__title">{{data.title}}</h2>
        <img class="card-header" :src="data.image" :alt="data.title" loading="lazy">
        <div class="card-body">
            <p class="card-body__text">
                {{data.descriptionShort}}
            </p>
            <p class="card-btn card-btn__link">Ver mas</p>
        </div>
    </RouterLink>

    <div :id="data.id+data.slug" v-if="canUpdate" v-show="!objReactive.loading" class="card" :class="index % 2 ? 'card-right' : 'card-left'">
        <h2 class="card__title">{{data.title}}</h2>
        <img class="card-header" :src="data.image" :alt="data.title" loading="lazy">
        <div class="card-body">
            <p class="card-body__text">
                {{data.descriptionShort}}
            </p>
            <div class="card-panel-editor">
                <RouterLink  :to="'/workshops/' + data.slug" class="card-btn">Ver mas</RouterLink>
                <button @click="editWorkshop(data)" class="card-btn card-btn__update" type="submit">Actualizar</button>
                <button @click="removeWorkshop(data)" class="card-btn card-btn__delete"  >Eliminar</button>
            </div>
        </div>
    </div>


</template>

<style lang="scss" scoped>
    .card{
        text-decoration: none;
        background-color:var(--clr-green-light);
        border-radius: 20px;
        padding: 20px 0px 0px 0px;
        margin: 0px 0px;
        display: flex;
        flex-flow: column;
        gap:20px;
        box-shadow:10px 10px 0px rgba(0, 0, 0, 0.15);
        color:var(--clr-dark-blue);
        max-width: 918px;
        margin: auto;
        position:relative;
        overflow:hidden;
        transition: opacity 1s  ease-in-out, transform 0.5s ease-in-out;
        width: 100%;
        @media screen and (min-width: 768px) {
            padding: 20px;
        }
        &__title{
            font-weight: 700;
            font-size: 25px;
            line-height: 44px;
            text-align: center;
            letter-spacing: 0.0012em;
            flex: 100%;
            width: 100%;
            text-transform: capitalize;
        }
        @media screen and (min-width: 768px) {
            flex-flow: row wrap;
            &-right{

            }
        }
        &-header,&-body{
            background-color: var(--clr-emphasis-light);
            border-radius: 0px;
            @media screen and (min-width: 768px) {
                border-radius: 20px
            }
        }
        &-header{
            object-fit: cover;
            flex: 1;
            width:100%;
            @media screen and (min-width: 768px) {
                min-width: 245px;
            }
        }
        &-body{
            flex: 2;
            padding: 10px;
            display: flex;
            flex-flow: column;
            &__text{
                line-height: 35px;
                text-align: center;
                letter-spacing: 0.0012em;
            }
        }
        &-btn {
            font-weight: 500;
            font-size: 1.5625rem;
            line-height: 44px;
            text-align: center;
            padding: 5px 10px;
            border-radius: 20px;
            border: 3px solid transparent;
            transition: background-color 0.5s ease, color 0.5s ease;
            margin-top: auto;
            display: inline-block;
            background-color: var(--clr-yellow-light);
            color: var(--clr-dark-blue);
            text-decoration:none;
            &:hover,
            &:focus {
                cursor: pointer;
                background-color: var(--clr-yellow-shadow);
                color: var(--clr-emphasis-light);
            }
            &__link{
                background-color: var(--clr-dark-blue);
                color: var(--clr-yellow-light);
                width: min(100%, 12.5rem);
                margin: auto;
                &:hover,
                &:focus {
                    cursor: pointer;
                    background-color: var(--clr-dark-blue-shadow);
                }
            }
            &__delete {
                background-color: var(--clr-dark-blue);
                color: var(--clr-yellow-light);
                &:hover,
                &:focus {
                    cursor: pointer;
                    background-color: var(--clr-dark-blue-shadow);
                }
            }
        }
        &-panel{
            &-editor{
                font-size: 0.75rem;
                text-align: end;
                margin-top:auto;
                gap: 10px;
                display: inline-flex;
                flex-wrap: wrap;
                justify-content: end;
            }
        }
    }
    .remove{
        transform:translateY(-50%) scale(0) ;
        opacity:0;
        position:absolute;
    }
</style>
