<script setup>
</script>

<template>
  <main>
    <div>

      <h1 class="title">Preguntas frecuentes</h1>
      <div class="container">
        <div class="contact">
          <p> Puedes ponerte en contacto con nosotros mediante nuestras redes sociales:</p>
          <a href="https://www.facebook.com/amigariaeoi/"  target="_blank"><img src="@/assets/images/facebook.svg" alt="Facebook">facebook.com/amigariaeoi/</a><br>
          <a href="https://www.twitter.com/amigaria_eoi" target="_blank"><img src="@/assets/images/twitter.svg" alt="Twitter">twitter.com/amigaria_eoi</a>
          <p>O mediante correo electrónico: <a href="mailto:info.amigaria@gmail.com"> info.amigaria@gmail.com</a></p>
          </div>

      <details>
        <summary class="question"><strong>¿Por qué usar amigaria?</strong></summary>
        <p class="answer">En amigaria puedes solicitar ayuda o compañía o bien presentarte voluntario para estas tareas. También puedes obtener información de nuestros talleres.</p>
      </details>
      <details>
        <summary class="question"><strong>¿Cómo me registro?</strong></summary>
        <p class="answer">Puedes crear una cuenta con tus datos (email y contraseña) o bien entrar con tu cuenta de Google. Tendrás que iniciar sesión para acceder a las actividades y talleres.</p>
      </details>
      <details>
        <summary class="question"><strong>¿Qué es una actividad?</strong></summary>
        <p class="answer">Una actividad es una petición tanto de ayuda, como de transporte o de ocio que un usuario crea para que otro usuario le acompañe. Por ejemplo, un usuario puede pedir ayuda para llevar la compra hasta casa o que le lleven al aeropuerto.</p>
      </details>
      <details>
        <summary class="question"><strong>¿Cómo creo una actividad?</strong></summary>
        <p class="answer">En el apartado “Crear actividad”. Tendrás que indicar un título para la actividad, una breve descripción, el tipo de actividad, la fecha y de que hora a qué hora sería.</p>
      </details>
      <details>
        <summary class="question"><strong>¿Cómo me apunto a una actividad?</strong></summary>
        <p class="answer">En el apartado “Actividades” encontrarás las peticiones que los demás usuarios han creado, sólo tienes que pulsar el botón “Saber más” y verás los detalles de la actividad. Si quieres apuntarte dale al botón “Me apunto” y la actividad pasará a estar en el apartado de “Mis actividades”, en la sección de “Participaciones”.</p>
      </details>
      <details>
        <summary class="question"><strong>Mi actividad ha desaparecido.</strong></summary>
        <p class="answer">Una vez otro usuario se ha apuntado a tu actividad, la misma desaparece del apartado de “Actividades” para que nadie más pueda cogerla. Tu actividad seguirá apareciendo en el apartado de “Mis actividades”, en la sección de “Actividades creadas”.</p>
      </details>
      <details>
        <summary class="question"><strong>¿Cómo edito una actividad?</strong></summary>
        <p class="answer">Una vez hayas creado una actividad, puedes ir al apartado de “Mis actividades” y en la sección de “Actividades creadas”, pulsando el botón “Editar” puedes modificar cualquier elemento.</p>
      </details>
      <details>
        <summary class="question"><strong>¿Cómo elimino una actividad?</strong></summary>
        <p class="answer">Una vez te hayas apuntado a una actividad, puedes ir al apartado de “Mis actividades” y en la sección de “Peticiones”, pulsando el botón “Borrar” puedes cancelar la actividad, la cual volverá al apartado de “Actividades” a la espera de que otro usuario se apunte.</p>
      </details>
      <details>
        <summary class="question"><strong>¿Por qué no me deja crear más actividades?</strong></summary>
        <p class="answer">Por razones de seguridad en amigaria no se pueden crear más de 3 actividades. Tendrás que eliminar una actividad para poder coger otra.</p>
      </details>
      <details>
        <summary class="question"><strong>¿Por qué no me deja apuntarme a más actividades?</strong></summary>
        <p class="answer">Por razones de seguridad en amigaria no se pueden elejir más de 3 actividades. Tendrás que cancelar una actividad para poder coger otra.</p>
      </details>
      <details>
        <summary class="question"><strong>¿Qué es un taller?</strong></summary>
        <p class="answer">Los talleres son eventos creados por el equipo de amigaria en colaboración con asociaciones benéficas donde grupos de personas acuden a actividades programadas o eventos.</p>
      </details>
      <details>
        <summary class="question"><strong>¿Cómo me apunto a un taller?</strong></summary>
        <p class="answer">En el apartado “Talleres” tienes todos los eventos activos, si le das a "Saber mas" entrarás en los detalles del taller y verás la asociación que lo organiza y los datos de contacto.</p>
      </details>

      <details>
        <summary class="question"><strong>Soy una organización, ¿cómo agrego un taller?</strong></summary>
        <p class="answer">Puedes ponerte en contacto con nosotros mediante correo electrónico <a href="mailto:info.amigaria@gmail.com">info.amigaria@gmail.com</a> y charlamos.</p>
      </details>

    </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  h1{
    color:white;
    text-align: center;
  }

.container{
  max-width: 900px;
  margin:auto;
}

.contact{
  border: 3px solid var(--clr-green-light);
  margin-top:1.5rem;
  border-radius: 20px;
  padding:0.5rem;
}

a{
  color:white
}

img{
  filter: invert(100);
  margin-left:1.5rem;
  margin-right: 0.5rem;
  width:1.2rem;
}

details{
  padding: 0.5em 0.5em 0;
  border-radius: 20px;
  margin:2rem;
  box-shadow: 10px 10px 0 #0005;

}
.question{
  background-color: var(--clr-yellow-light);
  color:var(--clr-dark-blue-shadow);
  padding: 0.5rem 2rem;
  margin: -0.5em -0.5em 0;
  border-radius: 20px;
  font-size: 20px;
  cursor: pointer;
}

details[open] {
  border: 3px solid var(--clr-yellow-light);
  padding: 0.5em;
}
p{
  color:white;
  font-size: 16px;
  background-color: var(--clr-dark-blue-shadow);
  padding: 1rem;
  padding-top:1.5rem;
  border-radius: 0 0 20px 20px
}
ul{
  color:white;
  padding-left: 3rem;
}
</style>
