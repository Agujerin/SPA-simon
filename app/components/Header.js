export function Header(){
    const Header = document.createElement("HEADER")
    Header.classList.add("header")
    Header.innerHTML = `
        <h1 class="title">SIMÓN DICE</h1>
        <h3 class="subtitle">Juego de memoria</h3>
    `
    
    return Header
}