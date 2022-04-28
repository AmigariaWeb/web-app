<script setup>

</script>
<template>
    <form>
        <div class="login-block">
            <label class="login-block__label" for="">Email</label>
            <input type="email" placeholder="Introduce tu email" autocomplete="off">
        </div>
        <div class="login-block">
            <label class="login-block__label" for="">Contraseña</label>
            <input type="password" placeholder="Introduce tu contraseña" autocomplete="off">

            <input type="password" placeholder="Repite tu contraseña" autocomplete="off">
        </div>

        <div class="login-block">
            <label class="login-block__label" for="">Datos personales</label>
            <input type="password" placeholder="introduce tu nombre" autocomplete="off">
            <input type="password" placeholder="introduce tus apellidos" autocomplete="off">
            <input type="password" placeholder="introduce tu código postal" autocomplete="off">
        </div>
        <input class="login-submit" type="button" value="submit">
    </form>
</template>

<style lang="scss" scoped>
    .container{
        max-width: 800px;
        margin: auto;
        padding: 15px;
        color: var(--clr-emphasis-light);
    }

    .login{
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
        }
        &-submit{
            min-height: 44px;
            margin:  40px auto 40px auto;
            width: 100%;
            border-radius: 0px;
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
                border-radius: 15px;
                height: 44px;
                display: block;
            }
        }
    }
</style>