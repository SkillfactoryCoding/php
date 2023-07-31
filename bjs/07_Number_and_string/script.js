let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');

document.querySelector('#btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

document.querySelector('#btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
})
document.querySelector('#btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
})
document.querySelector('#btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
})
document.querySelector('#btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
})
document.querySelector('#btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
})
document.querySelector('#btn_6').addEventListener('click', function () {
    inputWindow.value += '6';
})
document.querySelector('#btn_7').addEventListener('click', function () {
    inputWindow.value += '7';
})
document.querySelector('#btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
})
document.querySelector('#btn_9').addEventListener('click', function () {
    inputWindow.value += '9';
})
document.querySelector('#btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
})
document.querySelector('#btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
})
document.querySelector('#btn_dif').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'dif';
    inputWindow.value = '';
})
document.querySelector('#btn_mult').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'mult';
    inputWindow.value = '';
})
document.querySelector('#btn_div').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'div';
    inputWindow.value = '';
})
document.querySelector('#btn_sqrt').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sqrt';
    inputWindow.value = '';
})

document.querySelector('#btn_calc').addEventListener('click', function () {
   if (operation === 'sum'){
        const result = lastOperand + parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
   }
   if (operation === 'dif'){
        const result = lastOperand - parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation === 'mult'){
        const result = lastOperand * parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
        }
    if (operation === 'div'){
        const result = lastOperand / parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
        }
    if (operation === 'sqrt'){
        const result = Math.sqrt(lastOperand);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
        }
})