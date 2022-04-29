<script setup>
    import AppLoginGoogle from '@/components/AppLogin/AppLoginGoogle.vue';
</script>
<template>
    <div class="login-google" style="border-bottom: 3px solid var(--clr-yellow-light);">
        <button class="login-google__btn">
            <AppLoginGoogle></AppLoginGoogle>    
        </button>
        <h4 class="login-title">o</h4>
    </div>
    <h3 class="login-title">{{$route.name}}</h3>
    <form>
        <div class="login-block">
            <label class="login-block__label" for="">Email</label>
            <input type="email" placeholder="Email" autocomplete="off" required>
        </div>
        <div class="login-block">
            <label class="login-block__label" for="">Contraseña</label>
            <input type="password" placeholder="Contraseña" autocomplete="off" required>
        </div>
        <input class="login-submit" type="button" value="Enviar">
        <p class="login-text">¿Aun no te has "<RouterLink :to="{ name: 'Registrarse'}">registrado</RouterLink>"?</p>
    </form>
</template>

<style lang="scss" scoped>
    .container{
        max-width: 800px;
        margin: auto;
        padding: 0px;
        color: var(--clr-emphasis-light);
    }

    .login{
        &-google{
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            &__btn{
                font-style: normal;
                font-weight: 400;
                font-size: 25px;
                line-height: 44px;
                text-align: center;
                letter-spacing: 0.0012em;
                min-height: 44px;
                margin:  16px auto 16px auto;
                width: 100%;
                max-width: 300px;
                border-radius: 0px;
                background-color: var(--clr-yellow-light);
                border: none;
                transition: background-color 0.5s ease;
                color: var(--clr-dark-blue-shadow);
                a{
                    color: var(--clr-dark-blue-shadow);
                    text-decoration: none;
                }
                &:hover,
                &:focus {
                    background-color: var(--clr-yellow-shadow);
                    cursor: pointer;
                }
            }
        }
        &-title{
            text-align: center;
        }
        &-text{
            text-align: center;
            margin: 8px 0px;
            a{
                color: inherit;
            }
        }
        &-block{
            display: flex;
            flex-flow: column;
            margin: 0px 15px 0px 15px;
            &__label{
                font-style: normal;
                font-weight: 700;
                font-size: 36px;
                line-height: 63px;
                letter-spacing: 0.0012em;

                font-weight: 400;
                font-size: 25px;
                line-height: 44px;

            }
            input{
                min-width: 300px;
                min-height: 44px;
                border-radius: 50px;
                padding:0px 15px;
                margin-bottom: 18px;
                border-width: 3px;
                outline: none;
                border-style: solid;
                &:hover, &:focus, &:focus-visible, &:focus-within {
                    border-color: var(--clr-green-light);
                }
            }

            input{
                color: var(--clr-dark-blue-shadow);
                min-height: 44px;
                border-radius: 20px;
                padding-inline: 1rem;
                background-color: var(--clr-emphasis-light);
                border: 3px solid var(--clr-dark-blue-shadow);
                font-size: 1rem;
                transition: border 0.2s ease;
                box-shadow: (10px 10px 0px rgba(0, 0, 0, 0.15));
                margin-bottom: 16PX;
                &:hover,
                &:focus {
                    outline: none;
                    border: 3px solid var(--clr-green-light);
                }

                &::placeholder {
                    color: var(--clr-dark-blue-shadow);
                    font-size: 1rem;
                }

                &:disabled {
                    background-color: #ffffffd1;
                }
            }

        }
        &-submit{
            font-style: normal;
            font-weight: 400;
            font-size: 25px;
            line-height: 44px;
            text-align: center;
            letter-spacing: 0.0012em;
            min-height: 44px;
            margin:  32px auto 32px auto;
            width: 100%;
            border-radius: 0px;
            background-color: var(--clr-yellow-light);
            border: none;
            transition: background-color 0.5s ease;
            color: var(--clr-dark-blue-shadow);
            &:hover,
            &:focus {
                background-color: var(--clr-yellow-shadow);
                cursor: pointer;
            }

        }
        &-nav{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            
            a{
                color: var(--clr-dark-blue-shadow);
                text-decoration: none;
                padding: 0px 16px ;
                background-color: var(--clr-yellow-light); 
                border-radius: 15px;
                height: 44px;
                display: block;
            }
        }
    }
</style>