//Capturar um elemento de enviar do botão, exibindo em uma const
const botaoSubmit = document.getElementById("submit")

// Atrelar ao botato ["click"]
botaoSubmit.addEventListener("click", ()=> {
    const campos = document.querySelectorAll("input[type='text'],input[type='date'")

    for(let x = 0; x < campos.length ; x++){
        if(campos[x].value == ''){
            alert("O CAMPO: " + campos[x].name + 'nao foi preenchido!')
            return
        }
    }
})

document.querySelector(".cadastro").submit()