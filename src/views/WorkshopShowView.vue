<script setup>
    import { useWorkshopsStore } from '../stores/workShops';
    import { ref } from 'vue';
    import {useRoute, RouterView} from 'vue-router'

    const route= useRoute();
    const currentSection = ref(route.params);
    const storeWorkshops = useWorkshopsStore()
    const data =storeWorkshops.workshopBySlug(currentSection.value.slug)[0]

</script>

<template>
    <main>
        <div class="card">
            <div class="card__map" v-html="data.map"></div>
            <div class="card-body">
                <small>{{data.date}}</small> - <small>{{data.direction}}</small>
                <h2>{{data.index}} {{data.title}}</h2> 
                <p>
                    {{data.description}}
                </p>
            </div>
            <img class="card-header" :src="data.img" :alt="data.title">
        </div>
    </main>
</template>

<style lang="scss" scoped>
    main{
        background-color: var(--clr-yellow-light);
        min-height: 100vh;
        padding-top: 60px;
        padding-bottom: 60px;
    }
    .card{
        text-decoration: none;
        background-color:var(--clr-green-light);
        border-radius: 20px;
        padding: 15px;
        margin: 0px 60px 0px 60px;
        display: flex;
        flex-flow: column;
        gap:15px;
        box-shadow:10px 10px 0px rgba(0, 0, 0, 0.15);
        color:var(--clr-dark-blue);
        &-header,&-body{
            background-color: var(--clr-emphasis-light);
            padding: 15px;
            border-radius: 20px;
        }
        &-header{
            object-fit: cover;
            min-height: 300px;
            height: 100%;
            max-height: 50vh;
        }
        &-body{
            min-height: 300px;
        }
        &__link{
            font-weight: 900;
            cursor: pointer;
            text-decoration: underline;
        }
        &__map{
            min-height: 300px;
            height: 100%;
            max-height: 50vh;
            & iframe{
            }
        }
    }
</style>