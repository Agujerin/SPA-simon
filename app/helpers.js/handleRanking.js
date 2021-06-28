const rankingUpdate =(RankList)=>{ 
    let rank = []
        for (let i = 0; i < localStorage.length; i++) {
            const element = localStorage.getItem(localStorage.key(i))
            rank.push(JSON.parse(element))
        }
        
        rank.sort(function (a, b) {
            return b.points - a.points
        })
    
    if (rank.length>10) rank.pop()
    
    const fragment = document.createDocumentFragment()
        for (let i = 0; i < rank.length; i++) {
            const listItem = document.createElement('LI')
            listItem.textContent = `${rank[i].name} - ${rank[i].points} puntos - ${rank[i].date}`;
            fragment.appendChild(listItem)
        }
    RankList.appendChild(fragment)
}

const clearRanking =()=>{
    localStorage.clear()
    location.reload()
}

export {rankingUpdate, clearRanking}