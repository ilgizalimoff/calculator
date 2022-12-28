let inputField = document.getElementById('inputNumberField')
let resultBtn = document.getElementById('result')
let clear = document.getElementById('clear')
let operations = ['+', '-', '*', '/']
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
let currentValue1 = ''
let currentValue2 = ''
let currentOperation = ''
let result = 0

function clickFunc(param) {
    operations.forEach(element => {
        if (element == param) {
            currentOperation = param

            if (currentValue1 == '' && currentOperation == '-') {
                currentValue1 += currentOperation
                currentOperation = ''
                inputField.value += currentValue1
            }
            else {
                inputField.value = currentOperation
                if (result == 0 && currentValue1 != '-') {
                    currentValue2 = currentValue1

                }
                else {
                    currentValue2 = result
                    currentValue1 = ''
                }
            }

        }
    })
    numbers.forEach(element => {
        if (element == param) {
            if (currentValue1 == currentValue2) { currentValue1 = '' }
            currentValue1 += param
            inputField.value = currentValue1
        }
    })
}


function resultFunc() {
    switch (currentOperation) {
        case '+':
            result = +currentValue2 + +currentValue1
            break
        case '-':
            result = +currentValue2 - +currentValue1
            break
        case '/':
            result = +currentValue2 / +currentValue1
            break
        case '*':
            result = +currentValue2 * +currentValue1
            break
    }
    inputField.value = result
}
resultBtn.addEventListener('click', resultFunc)

clear.addEventListener('click', clearField)

function clearField() {
    currentValue1 = ''
    currentValue2 = ''
    currentOperation = ''
    inputField.value = ''
    result = ''
}