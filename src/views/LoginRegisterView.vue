<script setup>

</script>
<template>
    <div class="container">

        <div class="login-wrap">

            <RouterView></RouterView>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .container{
        max-width: 800px;
        margin: auto;
        padding: 0px;
        color: var(--clr-emphasis-light);
    }

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