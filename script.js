let numbersDrawArea = document.getElementById('numbers-draw-area')
let namesDrawArea = document.getElementById('names-draw-area')
let selectNumbersOption = document.getElementById('select-numbers-option')
let selectNamesOption = document.getElementById('select-names-option')

selectNumbersOption.addEventListener('click', () => {
    numbersDrawArea.style.display = 'inline-block'
    namesDrawArea.style.display = 'none'
    selectNumbersOption.style.display = 'none'
    selectNamesOption.style.display = 'inline-block'
})

selectNamesOption.addEventListener('click', () => {
    numbersDrawArea.style.display = 'none'
    namesDrawArea.style.display = 'inline-block'
    selectNumbersOption.style.display = 'inline-block'
    selectNamesOption.style.display = 'none'
})

let numbersRaffleButton = document.getElementById('numbers-raffle-button')
let displayResultsOfNumbers = document.getElementById('display-results-of-numbers')
numbersRaffleButton.addEventListener('click', () => {
    let numbersForDraw = document.getElementById('chosen-numbers').value
    if (numbersForDraw <= 0) {
        alert('Por favor insira um número positivo antes de iniciar o sorteio')
    }else {
        let result = Math.ceil(Math.random() * numbersForDraw)
        displayResultsOfNumbers.style.display = 'inline-block'
        displayResultsOfNumbers.innerHTML += '<li>' + result + '</li>'
    }
})

let removeNumbers = document.getElementById('remove-numbers')
removeNumbers.addEventListener('click', () => {
    let numbersForDraw = document.getElementById('chosen-numbers')
    displayResultsOfNumbers.innerHTML = ''
    numbersForDraw.value = ''
    displayResultsOfNumbers.style.display = 'none'
})

let insertedNames = document.getElementById('inserted-names')
let addName = document.getElementById('add-name')
const names = []
addName.addEventListener('click', () => {
    if (insertedNames.value.trim() == '') {
        alert('Por favor preencha o campo e depois clique no botão "+" para adicionar um nome ao sorteio')
    }
    else {
        names.push(insertedNames.value.trim())
        insertedNames.value = ''
    }
})

let namesRaffleButton = document.getElementById('names-raffle-button')
let displayResultsOfNames = document.getElementById('display-results-of-names')
namesRaffleButton.addEventListener('click', () => {
    let numberOfNames = names.length
    if (numberOfNames == 0) {
        alert('Adicione os nomes para iniciar o sorteio')
    }
    else {
        let resultIndex = Math.floor(Math.random() * numberOfNames)
        displayResultsOfNames.style.display = 'inline-block'
        displayResultsOfNames.innerHTML += '<li>' + names[resultIndex] + '</li>'
    }
})

let removeNames = document.getElementById('remove-names')
removeNames.addEventListener('click', () => {
    displayResultsOfNames.innerHTML = ''
    insertedNames.value = ''
    displayResultsOfNames.style.display = 'none'
    names.length = 0
})