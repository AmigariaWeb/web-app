<script setup>
    import { useWorkshopsStore } from '@/stores/useworkShopsStore.js';
    import { storeToRefs } from 'pinia';
    import Spinner from '@/components/Spinner/Spinner.vue';

    import { onBeforeMount, onMounted, ref, reactive } from 'vue';
    import {useRoute, RouterView, RouterLink} from 'vue-router'

    const route = useRoute()

    const { workshops, loading,selectedWorkshop } = storeToRefs(useWorkshopsStore())
    const { fetchWorkshops,workshopBySlug } = useWorkshopsStore();
    let workshop = reactive({ 
        
    })

    // // Rellenar actividades
    onBeforeMount(async () => {
        await fetchWorkshops()

        workshop = await workshopBySlug(route.params.slug)
    })
    onMounted(() => {
      workshop = selectedWorkshop.value
    })
</script>

<template>
    <main>
        <div class="container">
            <div class="card">
                <div class="card-header">
                    <h1 class="card-header__title">{{selectedWorkshop.title}}</h1>            
                </div>
                <div class="card-body">
                    <img class="card-body__img" :src="selectedWorkshop.image" :alt="selectedWorkshop.title">
                    <div class="card-body__text" >
                            <div v-html="selectedWorkshop.description"></div>
                        <div class="card-body__detall">
                            <p><strong>Modalidad:</strong> {{selectedWorkshop.type}}</p>
                            <p><strong>Fecha:</strong> {{selectedWorkshop.date}}</p>
                            <p><strong>Horario:</strong> {{selectedWorkshop.from}} - {{selectedWorkshop.to}}</p>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="card-footer__item">
                        <h2 class="card-footer__title">cómo llegar</h2>
                        <div class="card-footer__map" v-html="selectedWorkshop.map"></div>
                    </div>
                    <div class="card-footer__item">
                        <h2 class="card-footer__title">Detalles del organizador</h2>
                        <div class="card-footer__wrap">
                            <img class="card-footer__img" :src="selectedWorkshop.imageLogo" :alt="workshop.title">
                            <div class="card-footer__detall">
                                <p><strong>Nombre:</strong> {{selectedWorkshop.asociationName}}</p>
                                <p><strong>Dirección:</strong> {{selectedWorkshop.direction}}</p>
                                <p>
                                    <a :href="`mailto:`+selectedWorkshop.email">
                                        <strong>Email:</strong> {{selectedWorkshop.email}}
                                    </a>
                                </p>
                                <p>
                                    <a :href="`tel:+`+selectedWorkshop.phone">
                                        <strong>Teléfono:</strong> {{selectedWorkshop.phone}}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <a v-if="selectedWorkshop.link" class="card__btn" :href="selectedWorkshop.link" target="_blank">Apuntate</a>
            </div>
        </div>
    </main>




</template>

<style lang="scss" scoped>
    .card-footer__map ::v-deep(iframe){
        height: 100%!important;
        width: 100%!important;
    }
    ::v-deep(h1),
    ::v-deep(h2),
    ::v-deep(h3){
        word-wrap: break-word;
    }
    .container{
        background-color:var(--clr-green-light);
        border-radius: 20px;
        box-shadow:10px 10px 0px rgba(0, 0, 0, 0.15);
        @media screen and (min-width: 768px) {
            padding:20px;
        }
    }
    .card{
        max-width: 979px;
        text-decoration: none;
        border-radius: 20px;
        margin: 0px 0px 0px 0px;
        display: flex;
        flex-flow: column;
        gap:20px;
        color:var(--clr-dark-blue);
        margin: auto;
        @media screen and (min-width: 1024px) {
            gap:40px;
        }
        &-header,&-body{
            // padding: 15px;
            border-radius: 20px;
        }
        &-header{
            &__title{

                font-style: normal;
                font-weight: 700;
                font-size: 25px;
                line-height: 44px;
                /* or 176% */

                text-align: center;
                

                @media screen and (min-width: 1024px) {
                    font-weight: 700;
                    font-size: 36px;
                    line-height: 63px;
                    text-align: center;
                    
                }

            }
        }
        &-body{
            min-height: 300px;
            display: flex;
            flex-flow: column;
            gap:20px;
            &__img{
                object-fit: cover;
                min-height: 200px;
                height: 100%;
                max-height: 245px;
                width: 100%;
                border-radius: 20px;
            }
            &__text{
                border-radius: 20px;
                background-color: var(--clr-emphasis-light);
                padding: 10px;
                text-align: center;
            }
            &__detall{
                margin: 10px 0px 0px 0px;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                justify-content: space-evenly;
                gap:20px;
                flex-wrap: wrap;
            }
        }
        &__link{
            font-weight: 900;
            cursor: pointer;
            text-decoration: underline;
        }
        &-footer{
            display:flex;
            flex-wrap:wrap;
            justify-content:space-evenly;
            gap:40px;
            &__item{
                font-size: 16px;
                line-height: 35px;
                width:100%;
                @media screen and (min-width: 768px) {
                    width:auto;
                }
            }
            &__map{
                height: 163px;
                width: 100%;
                border-radius: 20px;
                overflow: hidden;
                @media screen and (min-width: 768px) {
                    width:265px;
                }
            }
            &__title{
                margin:20px 0px;
                font-weight: 700;
                font-size: 16px;
                line-height: 35px;
                text-align: center;
            }
            &__img{
                height:162px;
                width:100%;
                border-radius:20px;
                object-fit: contain;
                @media screen and (min-width: 768px) {
                    width:250px;
                }
            }
            &__wrap{
                display:flex;
                flex-wrap:wrap;
                gap:20px;
                justify-content: center;
                align-items: center;
            }
            &__detall{
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-content:center;
                word-wrap: break-word;
                width:100%;
                @media screen and (min-width: 768px) {
                    width:auto;
                }
                ::v-deep(a){
                    color:var(--clr-dark-blue);

                }
                ::v-deep(p){
                    padding:0px 10px;
                }
                
            }
        }
        &__btn{
            font-size: 1.5rem;
            width: min(100%, 150px);
            border-radius: 20px;
            padding: 0.5rem;
            background-color: var(--clr-dark-blue);
            color: var(--clr-yellow-light);
            transition: background-color 0.5s ease, color 0.5s ease;
            text-align: center;
            text-decoration: none;
            margin:0 auto 0.5rem auto;

            &:hover {
                background-color: var(--clr-dark-blue-shadow);
            }
        }
    }
</style>