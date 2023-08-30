const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtm = document.getElementById('submit')
const plusBtm = document.getElementById('plus')
const minusBtm = document.getElementById('minus')
const umnozBtm = document.getElementById('umnoz')
const delenBtm = document.getElementById('delen')
let action = '+'


plusBtm.onclick = function () {
    action = '+'
}

minusBtm.onclick = function () {
    action = '-'     
}

umnozBtm.onclick = function () {
    action = '*'
}

delenBtm.onclick = function () {
    action = '/'
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computerAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (actionSymbol == '+') {
        return num1 + num2
    }  
    if (actionSymbol == '-') {
        return num1 - num2
    }
    if (actionSymbol == '*') {
        return num1 * num2
    }
    if (actionSymbol == '/') {
        return num1 / num2
    }
}

submitBtm.onclick = function () {
    const result = computerAction(input1, input2, action)
    printResult(result)
}
