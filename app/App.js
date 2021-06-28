import { Game } from "./components/Game.js"
import { Header } from "./components/Header.js"
import { Message } from "./components/Message.js"
import { NavMenu } from "./components/NavMenu.js"
import { PlayerForm } from "./components/PlayerForm.js"
import { Ranking } from "./components/Ranking.js"
import { Rules } from "./components/Rules.js"

export function App(){
    const root = document.getElementById('root')
    
    root.innerHTML = null
    root.appendChild(Header())
    root.appendChild(NavMenu())
    
    let newUrl = location.hash
    
    if(!newUrl || newUrl === "#/") {
        sessionStorage.clear()
        root.appendChild(PlayerForm())
    }else if(newUrl === "#/play" && sessionStorage.getItem('player')) {
        root.appendChild(Game()) 
    }else if(newUrl === "#/play") root.appendChild(Message())
    
    else if(newUrl === "#/ranking") root.appendChild(Ranking())
    else if(newUrl === "#/rules") root.appendChild(Rules()) 
}

