let inputField = document.getElementById('inputNumberField')
let resultBtn = document.getElementById('result')
let clear = document.getElementById('clear')
let operations = ['+', '-', '*', '/']
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
let firstValue = ''
let secondValue = ''
let currentOperation = ''
let result = 0

function numberClick(param) {
    numbers.forEach(element => {
        if (element == param) {
            if (firstValue == secondValue) { firstValue = '' }
            firstValue += param
            inputField.value = firstValue
        }
    })
}

function operationClick(param) {
    operations.forEach(element => {
        if (element == param) {
            currentOperation = param
            if (firstValue == '' && currentOperation == '-') {
                firstValue += currentOperation
                currentOperation = ''
                inputField.value += firstValue
            }
            else if (firstValue !== '') {
                inputField.value = currentOperation
                if (result == 0 && firstValue != '-') {
                    secondValue = firstValue
                }
                else {
                    secondValue = result
                    firstValue = ''
                }
            }
        }
    })
}

function resultFunc() {
    switch (currentOperation) {
        case '+':
            result = (+secondValue + +firstValue)
            break
        case '-':
            result = +secondValue - +firstValue
            break
        case '/':
            result = +secondValue / +firstValue
            break
        case '*':
            result = +secondValue * +firstValue
            break
        case '':
            result = +firstValue
            break
    }
    inputField.value = result
}

resultBtn.addEventListener('click', resultFunc)

clear.addEventListener('click', clearField)

function clearField() {
    firstValue = ''
    secondValue = ''
    currentOperation = ''
    inputField.value = ''
    result = ''
}