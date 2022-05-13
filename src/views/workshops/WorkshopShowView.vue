<script setup>
    import { useWorkshopsStore } from '@/stores/workShops';
    import { ref } from 'vue';
    import {useRoute, RouterView, RouterLink} from 'vue-router'

    const route= useRoute();
    const currentSection = ref(route.params);
    const storeWorkshops = useWorkshopsStore()
    const data =storeWorkshops.workshopBySlug(currentSection.value.slug)[0]

</script>

<template>
    <main>
        <div class="container">
            <div class="card">
                <div class="card-header">
                    <h1 class="card-header__title">{{data.title}}</h1>            
                </div>
                <div class="card-body">
                    <img class="card-body__img" :src="data.img" :alt="data.title">
                    <div class="card-body__text">
                        <p>
                            {{data.description}}
                        </p>
                    <div class="card-body__detall">
                        <p><strong>Modalidad:</strong> {{"[insert text]"}}</p>
                        <p><strong>Fecha:</strong> {{"[00-00-000]"}}</p>
                        <p><strong>Horario:</strong> {{"[00 - 00]"}}</p>
                    </div>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="card-footer__item">
                        <h2 class="card-footer__title">cómo llegar</h2>
                        <div class="card-footer__map" v-html="data.map"></div>
                    </div>
                    <div class="card-footer__item">
                        <h2 class="card-footer__title">Detalles del organizador</h2>
                        <div class="card-footer__wrap">
                            <img class="card-footer__img" src="https://picsum.photos/250/162" :alt="data.title">
                            <div class="card-footer__detall">
                                <p><strong>Nombre:</strong> {{"[insert text]"}}</p>
                                <p><strong>Dirección:</strong> {{"c/ falsa 1 2 3, av. de la piruleta"}}</p>
                                <p><strong>Email:</strong> {{"xXamigariaXx@gmail.com"}}</p>
                                <p><strong>Teléfono:</strong> {{"[000 00 00 00]"}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <a class="card__btn" href="https://www.gooogle.es/">Apuntate</a> -->
            </div>
        </div>
    </main>




</template>

<style lang="scss" scoped>
    .container{
        background-color:var(--clr-green-light);
        border-radius: 20px;
        box-shadow:10px 10px 0px rgba(0, 0, 0, 0.15);
        padding:20px;
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
            }
            &__map{
                height: 163px;
                width: 265px;
                border-radius: 20px;
                overflow: hidden;
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
                width:250px;
                border-radius:20px;
            }
            &__wrap{
                display:flex;
                flex-wrap:wrap;
                gap:20px;
            }
            &__detall{
                display:flex;
                flex-direction:column;
                justify-content:space-evenly;
                justify-items:space-evenly;
                align-content:space-evenly;
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