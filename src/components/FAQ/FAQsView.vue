<script setup>
  // import Spinner from '../components/Spinner/Spinner.vue'
</script>

<template>
  <main>
    <div>

      <h1 class="title">Preguntas frecuentes</h1>
      <div class="container">
      <details>
        <summary class="question"><strong>¿Quiénes somos?</strong></summary>
        <p class="answer">Amigaria es una web accesible para la integración social.</p>
      </details>
      <details>
        <summary class="question"><strong>¿Por qué usar amigaria?</strong></summary>
        <p class="answer">Porque mola.</p>
      </details>
      <details>
        <summary class="question"><strong>¿Cómo me registro?</strong></summary>
        <p class="answer">En amigaria puedes crear una cuenta accediendo con tus datos o bien entrar con tu cuenta de Google. Tendrás que iniciar sesión para acceder a las actividades y talleres.</p>
      </details>
      <details>
        <summary class="question"><strong>¿Por qué no me deja entrar?</strong></summary>
        <p class="answer">Si tienes problemas para entrar ponte en contacto con nosotros.</p>
      </details>
      <details>
        <summary class="question"><strong>¿Qué es una actividad?</strong></summary>
        <p class="answer">Una actividad es una petición tanto de ayuda, como de transporte o de ocio que un usuario crea para que otro usuario le acompañe. Por ejemplo, un usuario puede pedir ayuda para llevar la compra hasta casa o que le lleven al aeropuerto.</p>
      </details>
      <details>
        <summary class="question"><strong>¿Cómo creo una actividad?</strong></summary>
        <p class="answer">En el apartado “crear actividad”. Tendrás que indicar un título para la actividad, una breve descripción, el tipo de actividad, la fecha y de que hora a qué hora sería.</p>
      </details>
      <details>
        <summary class="question"><strong>¿Cómo me apunto a una actividad?</strong></summary>
        <p class="answer">En la sección “Actividades” encontrarás las peticiones que los demás usuarios han creado, sólo tienes que pulsar el botón “saber más” y verás los detalles de la actividad. Si quieres apuntarte dale al botón “me apunto” y la actividad pasará a estar en la pestañas de “Mis actividades”, en la parte de “Participaciones”.</p>
      </details>
      <details>
        <summary class="question"><strong>Mi actividad ha desaparecido.</strong></summary>
        <p class="answer">Una vez otro usuario se ha apuntado a tu actividad, la misma desaparece de la parte de “actividades” para que nadie más pueda cogerla. Tu actividad seguirá apareciendo en la sección de “Mis actividades”, en la parte de “actividades creadas”.</p>
      </details>
      <details>
        <summary class="question"><strong>¿Cómo edito una actividad?</strong></summary>
        <p class="answer">Una vez hayas creado una actividad, puedes ir a la sección de “mis actividades” y en la parte de “actividades creadas” , pulsando el botón “editar” puedes cambiar cualquier elemento.</p>
      </details>
      <details>
        <summary class="question"><strong>¿Cómo elimino una actividad?</strong></summary>
        <p class="answer">Una vez te hayas apuntado a una actividad, puedes ir a la sección de “mis actividades” y en la parte de “peticiones”, pulsando el botón “borrar” puedes cancelar la actividad, la cual volverá al apartado de “actividades” a la espera de que otro usuario la coja.</p>
      </details>
      <details>
        <summary class="question"><strong>¿Por qué no me deja crear más actividades?</strong></summary>
        <p class="answer">Por razones de seguridad en amigaria no se pueden crear más de 3 actividades. Tendrás que eliminar una actividad para poder coger otra.</p>
      </details>
      <details>
        <summary class="question"><strong>¿Por qué no me deja coger más actividades?</strong></summary>
        <p class="answer">Por razones de seguridad en amigaria no se pueden coger más de 3 actividades. Tendrás que cancelar una actividad para poder coger otra.</p>
      </details>
      <details>
        <summary class="question"><strong>¿Qué es un taller?</strong></summary>
        <p class="answer">Los talleres son eventos creados por el equipo de amigaria en colaboración con asociaciones benéficas donde grupos de personas acuden a actividades programadas.</p>
      </details>
      <details>
        <summary class="question"><strong>¿Cómo me apunto a un taller?</strong></summary>
        <p class="answer">En la sección de “Talleres” tienes todos los eventos activos, si le das a saber mas entrarás en los detalles del taller y verás la asociación que lo organiza y los datos de contacto.</p>
      </details>
      <details>
        <summary class="question"><strong>Soy una organización, ¿cómo agrego un taller?</strong></summary>
        <p class="answer">Ponte en contacto con nosotros.</p>
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
  margin:auto

}

  .question{
    background-color: var(--clr-yellow-light);
    color:var(--clr-dark-blue-shadow);
    padding: 0.5rem 2rem;
    margin: 1rem;
    border-radius: 20px;
    box-shadow: 10px 10px 0 #00000033;
    font-size: 20px;
    cursor: pointer;
  }
  .answer{
    color:white;
    margin: -1.5rem 2rem 2rem 2rem;
    font-size: 16px;
    border: 3px solid var(--clr-yellow-light);
    padding: 2rem;
    border-radius: 0 0 20px 20px
  }
</style>
