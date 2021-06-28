export function Message(){
    const Msg = document.createElement("DIV")
    Msg.classList.add("msg-container")
    Msg.innerHTML = `
        <img src="./app/assets/oopsi.png" alt="oops" class="msg-img">
        <p class="msg-text">¡Cuidado! Para comenzar a jugar, primero debe ingresar su nombre.</p>
    `

    return Msg
}