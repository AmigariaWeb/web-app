<script setup>
    import AppLoginGoogle from '@/components/AppLogin/AppLoginGoogle.vue'
</script>
<template>
    <div class="login-nav">
        <AppLoginGoogle/>
        <h4 class="login-nav__link">
            <RouterLink :to="{ path: '/login'}">Iniciar sesion</RouterLink>
        </h4>
        <h4 class="login-nav__link">
            <RouterLink :to="{ name: 'Registrarse'}">Registrase</RouterLink>
        </h4>
    </div>
</template>

<style lang="scss" scoped>
.login{
        &-wrap{
            margin-top:32px;
        }
        &-block{
            display: flex;
            flex-flow: column;
        }
        &-submit{
            margin: auto;
            display: block;
        }
        &-nav{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            
            a{
                color: var(--clr-dark-blue-shadow);
                text-decoration: none;
                padding: 0px 16px ;
                background-color: var(--clr-green-light); 
                border-bottom-left-radius: 15px;
                border-bottom-right-radius: 15px;
                height: 44px;
                display: flex;
                flex: 1;
            }
            &__link{
                & a.router-link-exact-active{
                    background-color: var(--clr-yellow-light);
                }
            }
        }
    }
</style>