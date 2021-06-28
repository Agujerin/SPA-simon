export function Rules(){
    const Rules = document.createElement("ARTICLE")
    Rules.classList.add("rules-container")
    Rules.innerHTML = `
        <h3 class="rules-title">Reglas:</h3>
        <img src="./app/assets/favicon.png" alt="logo">
        <p class="rules-text">Para comenzar escriba su nombre y presione "Jugar". Una vez en la pantalla del juego deberá presionar el botón de encendido del centro del SIMÓN para comenzar. Observe y memorice la secuencia de colores de la máquina y repítala. Cada acierto sumará 10 puntos y la máquina le agregará un nuevo color a la secuencia. El juego termina al cometer el primer error. En el ránking podrá ver su posición final. </p>
    `

    return Rules
}
