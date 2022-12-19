let inputField = document.getElementById('inputNumberField')
let stroka = ''
let result = document.getElementById('result')
let clear = document.getElementById('clear')

function clickFunc(param) {
    stroka += String(param)   
    inputField.value = stroka 
}   

result.addEventListener('click', resultFunc)

function resultFunc(){
    inputField.value = eval(inputField.value)
    stroka = ''
}

clear.addEventListener('click', clearField)

function clearField(){
    stroka = inputField.value = ''
}