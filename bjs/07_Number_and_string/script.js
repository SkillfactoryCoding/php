let lastOperand = 0;
let operation = null;
let buffer = null;

let numbers = document.querySelectorAll('button[data-type="number"]');
let operations = document.querySelectorAll('button[data-type="operation"]');
let $calc = document.querySelector('button[data-type="calc"]')

const inputWindow = document.getElementById('inputWindow');

numbers.forEach( e => {
   e.addEventListener('click', () => {
       if (parseInt(inputWindow.value) === 0)
           inputWindow.value = e.textContent;
       else
           inputWindow.value += e.textContent;
   })
});

operations.forEach( e => {
    let action = e.dataset.action;

    e.addEventListener('click', () => {
        lastOperand = parseFloat(inputWindow.value);
        inputWindow.value = '';
        operation = action;
    })
});

$calc.addEventListener('click', () => {
    let result = null;

    switch (operation)
    {
        case 'sum':
            result = lastOperand + parseInt(inputWindow.value);
            break;
        case 'def':
            result = lastOperand - parseInt(inputWindow.value);
            break;
        case 'prod':
            result = lastOperand * parseInt(inputWindow.value);
            break;
        case 'div':
            result = lastOperand / parseInt(inputWindow.value);
            break;
    }

    operation = null;
    lastOperand = 0;
    inputWindow.value = result;
})

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

