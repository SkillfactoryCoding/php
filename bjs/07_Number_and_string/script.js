let lastOperand = 0; //последний операнд
let operation = null;//выбранная операция

const inputWindow = document.getElementById('inputWindow'); //окно, где отображается число


// Кнопка 1. Добовляет к inputWindow 1 по клику
document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
})
// Кнопка 2. Добовляет к inputWindow 1 по клику
document.getElementById('btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
})
// Кнопка 3. Добовляет к inputWindow 1 по клику
document.getElementById('btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
})
// Кнопка 4. Добовляет к inputWindow 1 по клику
document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
})
// Кнопка 5. Добовляет к inputWindow 1 по клику
document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
})
// Кнопка 6. Добовляет к inputWindow 1 по клику
document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.value += '6';
})
// Кнопка 7. Добовляет к inputWindow 1 по клику
document.getElementById('btn_7').addEventListener('click', function () {
    inputWindow.value += '7';
})
// Кнопка 8. Добовляет к inputWindow 1 по клику
document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
})
// Кнопка 9. Добовляет к inputWindow 1 по клику
document.getElementById('btn_9').addEventListener('click', function () {
    inputWindow.value += '9';
})
// Кнопка 0. Добовляет к inputWindow 1 по клику
document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
})


// Кнопка суммы запоминает введенное число lastOperand, запоминается операция operation, очищается поле ввода
document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value); //чтобы исключить конкотенацию операнды переводим в числовой вид с помощью parseInt();
    operation = 'sum';
    inputWindow.value = '';
})

// Кнопка разности запоминает введенное число lastOperand, запоминается операция operation, очищается поле ввода
document.getElementById('btn_def').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'def';
    inputWindow.value = '';
})


// Кнопка умножения запоминает введенное число lastOperand, запоминается операция operation, очищается поле ввода
document.getElementById('btn_multiply').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'btn_multiply';
    inputWindow.value = '';
})

// Кнопка деления запоминает введенное число lastOperand, запоминается операция operation, очищается поле ввода
document.getElementById('btn_divide').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'btn_divide';
    inputWindow.value = '';
})

// Кнопка квадратного корня запоминает введенное число lastOperand, запоминается операция operation, очищается поле ввода
document.getElementById('btn_sqrt').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'btn_sqrt';
    inputWindow.value = '';
})

// Находим элемент по ID слушаем по клику если действие соответствует необходимому, а затем(ниже) применяем операцию к числу которое в памяти от числа котороое введено. Затем все очищаем и выводим результат
document.getElementById('btn_calc').addEventListener('click', function () {
    if(operation==='sum'){
        const result = lastOperand + parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if(operation==='def'){
        const result = lastOperand - parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }   
    if(operation==='btn_multiply'){
        const result = lastOperand * parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if(operation==='btn_divide'){
        const result = lastOperand / parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if(operation==='btn_sqrt'){
        const result =  Math.sqrt(parseInt(inputWindow.value));
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    
    
})
// Очистка экрана с навесом на кнопку клик события
document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    // Ниже очищение поля
    inputWindow.value = '';
})

