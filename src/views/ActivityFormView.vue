<template>
    <div class="pageActivity">
        <CreateActivityForm />
    </div>
</template>

<script setup>
import CreateActivityForm from '../components/AppActivity/CreateActivityForm.vue';

</script>

<style lang="scss" scoped>
.pageActivity {
    background-color: var(--clr-yellow-light);
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 10px;
    min-height: 100vh;
}
</style>