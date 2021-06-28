export function Modal(action,data){
    const ModalMsg = document.createElement("DIV")
    ModalMsg.classList.add("modal")
    
    const msg = document.createElement('P')
    msg.classList.add("msg")
    msg.textContent = data
    const yesBtn = document.createElement('BUTTON')
    yesBtn.classList.add("modal-yes-button")
    yesBtn.textContent = "OK"
    const noBtn = document.createElement('BUTTON')
    noBtn.classList.add("modal-no-button")
    noBtn.textContent = "CANCELAR"
    
    ModalMsg.appendChild(msg)
    ModalMsg.appendChild(yesBtn)
    ModalMsg.appendChild(noBtn)
    
    
    ModalMsg.addEventListener('click',(e)=>{
        if(e.target.innerText == "CANCELAR") {
            if(location.hash === "#/ranking") location.reload()
            else location.hash = "#/"
        }
        else if (e.target.innerText == "OK") action()
    })
    
    return ModalMsg
}

