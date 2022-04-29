<script setup>

</script>
<template>
        <RouterLink :to="{ path: '/'}">
                <img
                        className='google-icon'
                        src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                        alt='google button'
                    /> Entra con Google
        </RouterLink>
</template>

<style lang="scss" scoped>
    .google-btn{
        margin:auto;
        display:inline-flex;
        align-items: center;
        justify-content: center;
        background-color: inherit;
        border:none;
        text-decoration: none;
    }
    .google-icon{
        height: 18px;
    }
</style>