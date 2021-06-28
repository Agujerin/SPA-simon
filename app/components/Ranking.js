import { clearRanking, rankingUpdate } from "../helpers.js/handleRanking.js"
import { Modal } from "./Modal.js"

export function Ranking(){
    
    const Rank = document.createElement("DIV")
    Rank.classList.add("rank-container")
    
    const RankTitle = document.createElement("H3")
    RankTitle.classList.add("rank-title")
    RankTitle.textContent = "Ranking:"
    
    const RankList = document.createElement("OL")
    RankList.classList.add("rank-list")
    rankingUpdate(RankList)
    
    const RankClearBtn = document.createElement("BUTTON")
    RankClearBtn.classList.add("rank-clear-btn")
    RankClearBtn.textContent = "BORRAR RANKING"
    
    Rank.appendChild(RankTitle)
    Rank.appendChild(RankList)
    
    if(localStorage.length > 0) Rank.appendChild(RankClearBtn)
    
    let data ="¿Está seguro de querer eliminar el ránking?"
    RankClearBtn.addEventListener('click',()=> Rank.appendChild(Modal(clearRanking,data)))
    
    return Rank
}