import { cpuColorSequence, check, playerPlay} from "../helpers.js/gamePlay.js"

export function Game(){
    
    let player = {
        name: JSON.parse(sessionStorage.getItem('player')),
        points: 0,
        date: new Date().toLocaleDateString()
    }
    localStorage.setItem(`${player.name}`, JSON.stringify(player))
    
    const Game = document.createElement("DIV")
    Game.classList.add("circle")
    Game.innerHTML = `
        <div class="green" id="green" title="green"></div>
        <div class="red" id="red" title="red"></div>
        <div class="blue" id="blue" title="blue"></div>
        <div class="yellow" id="yellow" title="yellow"></div>
    `
    
    const PowerBtn = document.createElement('DIV')
    PowerBtn.classList.add("power")
    PowerBtn.setAttribute("id","power-btn")
    const PowerIcon = document.createElement('I')
    PowerIcon.classList.add("fas")
    PowerIcon.classList.add("fa-power-off")
    PowerIcon.setAttribute("id","power-icon")
    
    PowerBtn.appendChild(PowerIcon)
    Game.appendChild(PowerBtn)
    
    const PlayerData = document.createElement("P")
    PlayerData.classList.add("player-score-item")
    PlayerData.textContent = `Nombre: ${(player.name).toUpperCase()} - Puntos: ${player.points}`
    Game.appendChild(PlayerData)
    
    const colors = ['green', 'red', 'blue', 'yellow']
    let cpuSequence = []
    let playerSequence = []
    
    PowerIcon.addEventListener('click',(e)=>{
        let button = e.target.id
        if(button === "power-btn"||button === "power-icon"){
            const powerBtn = document.getElementById('power-btn')   
            powerBtn.classList.add('power-on')
        }
        
        const colorsId = {
            green : document.getElementById('green'),
            red : document.getElementById('red'),
            blue : document.getElementById('blue'),
            yellow : document.getElementById('yellow')
        }
        cpuColorSequence(colors,cpuSequence,check,{colorsId})
        playerPlay(Game,player,PlayerData,playerSequence,cpuSequence,check,colors,{colorsId})
 
    })
    
    return Game
}
