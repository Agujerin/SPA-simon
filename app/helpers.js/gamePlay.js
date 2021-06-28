import { Modal } from "../components/Modal.js";
import { lostGame } from "./lostGame.js";

//Creación y funcionamiento de la secuencia de colores del CPU
const cpuColorSequence =(colors,cpuSequence,check,{colorsId})=>{
    
    let color = colors[Math.round(Math.random()*3)]
    cpuSequence.push(color)
    
    if (cpuSequence.length < 7) {
        cpuSequence.forEach((el,index) => {
            setTimeout(() => {    
                setTimeout(() => check(el,300,{colorsId}),index*450);
            },400);
        })     
    }else {
        cpuSequence.forEach((el,index) => {
            setTimeout(() => {    
                setTimeout(() => check(el,300,{colorsId}),index*400);
            },400);
        })  
    }
}

//Comprobar color apretado por player 1 y/o cpu
const check =(el,time,{colorsId})=>{
    let {green, red, blue, yellow} = colorsId
    
    if (el == "green") {
        green.classList.add('cpu-color')
        const noteC = new Audio("./app/assets/sonidos/c5.mp3")
        noteC.play()
        setTimeout(() => green.classList.remove('cpu-color'),time);
    }else if (el == "red") {
        red.classList.add('cpu-color')
        const noteD = new Audio("./app/assets/sonidos/d5.mp3")
        noteD.play()
        setTimeout(() => red.classList.remove('cpu-color'),time);
    }else if (el == "blue") {
        blue.classList.add('cpu-color')
        const noteE = new Audio("./app/assets/sonidos/e5.mp3")
        noteE.play()
        setTimeout(() => blue.classList.remove('cpu-color'),time);
    }else if (el == "yellow") {
        yellow.classList.add('cpu-color')
        const noteF = new Audio("./app/assets/sonidos/f5.mp3")
        noteF.play()
        setTimeout(() => yellow.classList.remove('cpu-color'),time);
    }
}

//Juego player 1
const playerPlay =(Game,player,PlayerData,playerSequence,cpuSequence,check,colors,{colorsId})=>{
    
    Game.addEventListener('click',(e)=>{
        let play = e.target.id
        playerSequence.push(play)
        check(play,300,{colorsId})
        if(playerSequence.includes("power-icon")) playerSequence.splice(0)
        
        let match = false
        for (const i in playerSequence) {
            if (playerSequence[i] != cpuSequence[i]) {
                match = false
                let data = `Perdiste ${player.name}. Tu puntaje final fue: ${player.points} puntos. ¿Quieres ver el ranking?`
                Game.appendChild(Modal(lostGame,data))
            }else if (playerSequence[i] === cpuSequence[i]) match = true
        }
        
        if (playerSequence.toString() === cpuSequence.toString() && match){
            player.points += 10
            localStorage.setItem(`${player.name}`, JSON.stringify(player))
            PlayerData.textContent = `Nombre: ${(player.name).toUpperCase()} - Puntos: ${player.points}`
            playerSequence = []
            setTimeout(() => cpuColorSequence(colors,cpuSequence,check,{colorsId}), 400)
        }
    })
}

export {cpuColorSequence, check, playerPlay}

