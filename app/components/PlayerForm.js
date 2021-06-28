export function PlayerForm(){

    const Form = document.createElement("FORM")
    Form.classList.add("player-form")
    Form.innerHTML = `
        <label for="form-input" class="form-title">Introduce tu nombre y comienza a jugar</label>
        <input type="text" placeholder="Jugador" class="form-input" id="form-input">
        <button type="submit" id="submitBtn" class="submit-btn">JUGAR</button>
    `
    
    Form.addEventListener('click',(e)=>{
        e.preventDefault()
        if(e.target.id === "submitBtn"){
            let player = e.path[1][0].value
            if(!player) {
                document.getElementById('form-input').setAttribute('placeholder','Este campo no puede quedar vacío')
            }else {
                sessionStorage.clear()
                sessionStorage.setItem('player',JSON.stringify(player))
                location.hash = "#/play"
            }
            Form.reset()
        }
    })
    
    return Form
}

 
