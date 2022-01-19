let lastOperand = 0;
let operation = null;

const inputWindow = document.querySelector('#inputWindow');


document.querySelector('#btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

const test = document.querySelectorAll('#btn_0, #btn_1, #btn_2, #btn_3, #btn_4, #btn_5, #btn_6, #btn_7, #btn_8, #btn_9');
for ( let i = 0; i<test.length; i++) {
    test[i].addEventListener('click', function() {
       if (test[i] === test[test.length-1]) {
           inputWindow.value += '0';
       } else {
       let add = i + 1;
       inputWindow.value += add;
       };
    });
}

document.querySelector('#btn_summ').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'summ';
    inputWindow.value = ''
})

document.querySelector('#btn_sub').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sub';
    inputWindow.value = ''
})

document.querySelector('#btn_mult').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'mult';
    inputWindow.value = ''
})

document.querySelector('#btn_div').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'div';
    inputWindow.value = ''
})

document.querySelector('#btn_sqrt').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sqrt';
    inputWindow.value = ''
})

document.querySelector('#btn_calc').addEventListener('click', function () {
    if ( operation === 'summ') {
        const result = lastOperand + parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    } else if ( operation === 'sub' ) {
        const result = lastOperand - parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    } else if ( operation === 'mult') {
        const result = lastOperand * parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result; 
    } else if ( operation === 'div') {
        const result = lastOperand / parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;  
    } else if ( operation === 'sqrt') {
        const result = Math.sqrt(parseInt(inputWindow.value));
        operation = null;
        inputWindow.value = result;
    }
})