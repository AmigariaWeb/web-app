<template>
    <form class="formActivities">
        <input type="text" class="titulo" placeholder="Introduce aquí el título" required>
        <textarea class="desc" rows=7
            placeholder="Introduce aquí la descripción de la actividad. Sé tan preciso como puedas."
            required></textarea>
        <div class="wrapper">
            <div class="bloqueIzq">
                <p>Cuándo</p>
                <p>Dónde</p>
                <p>Tiempo</p>
            </div>
            <div class="linea"></div>
            <div class="bloqueDcho">
                <input type="date" class="date" required>
                <input type="text" class="lugar" placeholder="Lugar" required>
                <input type="time" class="horas" required>
            </div>
        </div>
        <button class="botonCrearTicket">Crear Ticket</button>
    </form>
</template>
<style lang="scss" scoped>
::placeholder {
    color: var(--clr-dark-blue);
}

.formActivities {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.titulo {
    padding: 10px;
    border: 4px solid var(--clr-yellow-shadow);
    background-color: var(--clr-yellow-light);
    border-radius: 20px;
    font-family: var(--font-default);
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 44px;
    letter-spacing: 0.0012em;
    color: var(--clr-dark-blue);
    text-align: center;
    margin: 10px 0px;
    width: min(100%, 1200px);
}

.desc {
    padding: 15px;
    border: 4px solid var(--clr-yellow-shadow);
    border-radius: 20px;
    width: min(100%, 1200px);
    background-color: var(--clr-yellow-light);
    margin: 10px 0px;
    color: var(--clr-dark-blue);
}

.wrapper {
    display: grid;
    grid-template-columns: 60px 5px 120px;
    padding: 10px;
    background: var(--clr-emphasis-light);
    color: var(--clr-dark-blue);
    border-radius: 30px;
    width: min(100%, 300px);
}

.bloqueDcho {
    display: flex;
    flex-direction: column;
}

.bloqueDcho>input {
    border: none;
    color: var(--clr-dark-blue);
    width: min(100%, 800px);
    font-size: 1rem;
    line-height: 2.188rem;
}

.linea {
    position: relative;
    overflow: hidden;
}

.linea::after {
    content: "";
    display: block;
    background: linear-gradient(0deg, var(--clr-green-dark) 80% 50%, var(--clr-emphasis-light) 80% 80%);
    background-size: 100% 35px;
    background-repeat: repeat-y;
    width: 3px;
    height: 100%;
    position: absolute;
    top: 0px;

}

.botonCrearTicket {
    background-color: var(--clr-emphasis-light);
    border: none;
    padding: 10px;
    border-radius: 20px;
    margin-top: 10px;
    font-size: 1.563rem;
    line-height: 2.75rem;
    color: var(--clr-green-dark);
}
</style>