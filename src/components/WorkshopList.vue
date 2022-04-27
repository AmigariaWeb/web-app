<script setup>
    import { RouterLink } from 'vue-router';

    const props = defineProps({
        data:Object,
        index:Number
    })
    console.log('Lista Talleres')
</script>
<template>

    <RouterLink :to="'/workshops/' + data.slug" class="card" :class="index % 2 ? 'card-right' : 'card-left'">
        <img class="card-header" :src="data.img" :alt="data.title" loading="lazy">
        <div class="card-body">
            <h2>{{data.index}} {{data.title}}</h2>
            <p>
                {{data.description}}
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
        padding: 15px;
        margin: 0px 60px;
        display: flex;
        flex-flow: column;
        gap:15px;
        box-shadow:10px 10px 0px rgba(0, 0, 0, 0.15);
        color:var(--clr-dark-blue);

        @media screen and (min-width: 1024px) {
            flex-flow: row;
            &-right{
                // flex-flow: row-reverse;
            }
        }
        &-header,&-body{
            background-color: var(--clr-emphasis-light);
            padding: 15px;
            border-radius: 20px;
        }
        &-header{
            object-fit: cover;
            max-height: 300px;
            min-width: 300px;
            width: 100%;
        }
        &-body{
        }
        &__link{
            font-weight: 900;
            cursor: pointer;
            text-decoration: underline;
        }
    }
</style>