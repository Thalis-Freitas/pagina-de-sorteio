/* função que será executada quando o usuário escolher a opção de sorteio com números, vai exibir na tela o campo de sorteio com números e esconder o campo de sorteio com nomes utilizando o display none*/

function opNumeros() {
    let sorteioNumeros = document.getElementById("sorteioNumeros")
    let sorteioNomes = document.getElementById("sorteioNomes")
    let btnopNumeros = document.getElementById("opNumeros")
    let btnopNomes = document.getElementById("opNomes")

    sorteioNumeros.style.display = "inline-block"
    sorteioNomes.style.display = "none"
    btnopNumeros.style.display = "none"
    btnopNomes.style.display = "inline-block"

}

/* função que será executada quando o usuário escolher a opção de sorteio com nomes, vai exibir na tela o campo de sorteio com nomes e esconder o campo de sorteio com numeros utilizando o display none*/

function opNomes() {
    let sorteioNumeros = document.getElementById("sorteioNumeros")
    let sorteioNomes = document.getElementById("sorteioNomes")
    let btnopNumeros = document.getElementById("opNumeros")
    let btnopNomes = document.getElementById("opNomes")

    sorteioNumeros.style.display = "none"
    sorteioNomes.style.display = "inline-block"
    btnopNumeros.style.display = "inline-block"
    btnopNomes.style.display = "none"
}

/* função que irá sortear um número de acordo com o numero máximo enviado pelo usuário no input */
function sortearNumeros() {

    let numerosParaSorteio = document.getElementById("numerosParaSorteio").value
    let exibeResultadoNumeros = document.getElementById("exibeResultadoNumeros")
    if (numerosParaSorteio == 0) {
        alert("Escolha um número máximo para iniciar o sorteio")
    }
    else {
        let numeroSorteado = Math.ceil(Math.random() * numerosParaSorteio)
        exibeResultadoNumeros.style.display = "inline-block"
        exibeResultadoNumeros.innerHTML += "<li>" + numeroSorteado + "</li>"
    }
}

function limparNumeros() {
    exibeResultadoNumeros.innerHTML = ""
    numerosParaSorteio.value = ""
    exibeResultadoNumeros.style.display = "none"
}
/*Área do sorteio com nomes, a constante NOMES_PARA_SORTEIO foi atribuída a um array vazio que irá receber os nomes inlcluídos pelo usuário através do input utilizando o método push*/

let nomesDosParticipantes = document.getElementById("nomesParaSorteio")
const NOMES_PARA_SORTEIO = []

function adicionarNome() {
    if (nomesDosParticipantes.value == "") {
        alert("Digite um nome para ser adicionado ao sorteio")
    }
    else {
        NOMES_PARA_SORTEIO.push(nomesDosParticipantes.value)
        nomesDosParticipantes.value = ""
    }
}

/*Para fazer o sorteio dos nomes foi utilizado como número o tamanho do array NOMES_PARA_SORTEIO, para que o número sorteado não seja maior que o tamanho do array foi utilizado o Math.floor para arredondar para o valor inferior e por fim o resultado foi passado como índice do array para ser exibido na tela */

function sortearNomes() {

    let numeroDeParticipantes = NOMES_PARA_SORTEIO.length
    if (numeroDeParticipantes == 0) {
        alert("Adicione os nomes para iniciar o sorteio")
    }
    else {
        let indiceSorteado = Math.floor(Math.random() * numeroDeParticipantes)
        let exibeResultadoNomes = document.getElementById("exibeResultadoNomes")
        exibeResultadoNomes.style.display = "inline-block"
        exibeResultadoNomes.innerHTML += "<li>" + NOMES_PARA_SORTEIO[indiceSorteado] + "</li>"

    }
}

function limparNomes() {
    exibeResultadoNomes.innerHTML = ""
    nomesDosParticipantes.value = ""
    exibeResultadoNomes.style.display = "none"
    NOMES_PARA_SORTEIO.length = 0
    console.log(NOMES_PARA_SORTEIO)
} 