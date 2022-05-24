<script setup>
import { RouterLink } from 'vue-router'
import PageInfoModal from '@/components/PageInfoModal/PageInfoModal.vue'

    const props = defineProps({
        data:Object,
        index:Number
    })
</script>
<template>
    <RouterLink :to="'/workshops/' + data.slug" class="card" :class="index % 2 ? 'card-right' : 'card-left'">
            <h2 class="card__title">{{data.title}}</h2>
        <img class="card-header" :src="data.image" :alt="data.title" loading="lazy">
        <div class="card-body">
            <p class="card-body__text">
                {{data.descriptionShort}}
            </p>
            <p class="card__link">ver mas</p>
        </div>
    </RouterLink>


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
        }
        @media screen and (min-width: 768px) {
            flex-flow: row wrap;
            &-right{

            }
        }
        &-header,&-body{
            background-color: var(--clr-emphasis-light);
            border-radius: 20px;
        }
        &-header{
            object-fit: cover;
            // min-width: 245px;
            flex: 1;
            width:100%;
            @media screen and (min-width: 768px) {
                min-width: 245px;
            }
        }
        &-body{
            flex: 2;
                padding: 10px;
            &__text{
                line-height: 35px;
                text-align: center;
                letter-spacing: 0.0012em;
            }
        }
        &__link{
            font-weight: 900;
            cursor: pointer;
            text-decoration: underline;
            text-align: right;
            margin: 10px;
        }
    }
</style>
