const botao = document.getElementById("btnSend")

botao.addEventListener("click", ()=> {
    const campos = document.querySelectorAll("input[type='text'],input[type='date']")

    for(let x = 0; x < campos.length ; x++){
        if(campos[x].value == ''){
            alert("O CAMPO: " + campos[x].name + 'nao foi preenchido!')
            return
        }
    }

})

function redirect() {
    botao.addEventListener
}
document.querySelector(".cadastro").submit()