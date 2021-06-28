export function NavMenu(){
    const Nav = document.createElement("NAV")
    Nav.classList.add("nav-menu")
    Nav.setAttribute('id','menu')
    Nav.innerHTML =`
        <a href="#/" class="nav-item" id="home"><i class="fas fa-home"></i>Inicio</a>
        <a href="#/play" class="nav-item" id="play"><i class="fas fa-gamepad"></i>Jugar</a>
        <a href="#/ranking" class="nav-item" id="ranking"><i class="fas fa-list-ol"></i>Ranking</a>
        <a href="#/rules" class="nav-item" id="rules"><i class="fas fa-info-circle"></i>Reglas</a>
    `
    
    addEventListener('hashchange',()=>{
        const home = document.getElementById('home')
        const play = document.getElementById('play')
        const ranking = document.getElementById('ranking')
        const rules = document.getElementById('rules')
        
        home.classList.remove("nav-item-focus")
        home.classList.add("nav-item")
        
        let newUrl = location.hash
           
        if(!newUrl || newUrl === "#/") home.classList.add("nav-item-focus")
        else if(newUrl === "#/play") play.classList.add("nav-item-focus")
        else if(newUrl === "#/ranking") ranking.classList.add("nav-item-focus")
        else if(newUrl === "#/rules") rules.classList.add("nav-item-focus")
    })
  
    return Nav
}
