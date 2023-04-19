//обрабатываем новую форму ввода
const  minValueInput = document.querySelector('#InputTextField1');
const  maxValueInput = document.querySelector('#InputTextField2');
//const  duplicateField1 = document.querySelector('#duplicateField1');
//const  duplicateField2 = document.querySelector('#duplicateField2');

// поле для вывода информации о правилах игры
const  outputField = document.querySelector('#outputField');



minValue = 0;
maxValue = 100;
InputTextField1.value = minValue;
InputTextField2.value = maxValue;
let orderNumber = 1;
let answerNumber =0; 
let gameRun = true;
let numberSign = 0;
let str = answerNumber;



const  button = document.querySelector('#ButtonInput');

//кнопка подтверждения 
button.addEventListener('click', (event) => {
    //event.preventDefault();
    console.log(InputTextField1.value);
    console.log(InputTextField2.value);
    //InputTextField.value = "";
    //duplicateField1.textContent = InputTextField1.value;
    //duplicateField2.textContent = InputTextField2.value;
    minValue=parseInt(InputTextField1.value);
    maxValue=parseInt(InputTextField2.value);

    console.log('Введеное MinValue ' + minValue);
    console.log('Введеное MaxValue ' + maxValue);
    startGame();
})

//document.addEventListener('DOMContentLoaded', function() {
     // получим кнопку id="btn" с помощью которой будем открывать модальное окно
  //const btn = document.querySelector('#btn1');
  //// активируем контент id="modal" как модальное окно
  //const modal = new bootstrap.Modal(document.querySelector('#modal'));
  // при нажатии на кнопку
  //btn.addEventListener('click', function() {
    
    // открываем модальное окно
    //modal.show();
//});
//});

//document.getElementById('btn').addEventListener('click', function () {
    //getElementById('#btn').addEventListener('click', function() {
    //    document.getElementById('btn1').addEventListener('click', function () {
    //modal.show()
//});

//начало игры после заргузки страницы
addEventListener("DOMContentLoaded", (event) => {
    startGame();

   

})

// создадим через функцию старт игры, пока как получилось
function startGame() {
    //minValue = parseInt(prompt('Минимальное знание числа для игры', '0')) || '0'; //добавили присвоение по дефолту
    //Надо подумать как сравнивать знаячени через ИЛИ
    if (isNaN(minValue)) {
       minValue = 0
    };
    console.log('Минимальное число '+ minValue); //Вывод в консоль для проверки
    //maxValue = parseInt(prompt('Максимальное знание числа для игры', '100')); //добавили присвоение по дефолту//исправить надо не реагирует на ноль
    console.log('Максимальное число '+ maxValue);//Вывод в консоль для проверки
    //Надо подумать как сравнивать знаячени через ИЛИ
    if (isNaN(maxValue)) {
       maxValue = 100
    };
    console.log('Максимальное число '+ maxValue);//Вывод в консоль для проверки

    //Сравнение по разрешенному максимальному и минимальному значению через тернарный оператор
    minValue = (minValue < -999) ? -999 : minValue;
    minValue = (minValue > 999) ? 999 : minValue;
    console.log('Минимальное число для проверки границ '+ minValue); //Вывод в консоль для проверки
    maxValue = (maxValue > 999) ? 999 : maxValue;
    maxValue = (maxValue < -999) ? -999 : maxValue;
    //if (maxValue == 0)  maxValue = 0; // поменяли условие проверки и исправления на дефолт
    console.log('Максимальное число для проверки границ '+ maxValue);//Вывод в консоль для проверки

    if (minValue > maxValue) { // смена если меньшее больше больщего через промежуточную переменную. Знаю что некрасиво, но пока врменное решение
       minValueError = minValue;
       minValue = maxValue;
       maxValue = minValueError;
       console.log('обменное число'+ minValueError); //Вывод в консоль для проверки
       console.log('Минимальное число '+ minValue); //Вывод в консоль для проверки
       console.log('Максимальное число '+maxValue);//Вывод в консоль для проверки
    }

    //duplicateField1.textContent = minValue;
    //duplicateField2.textContent = maxValue;
    InputTextField1.value = minValue;
    InputTextField2.value = maxValue;

    //alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    outputField.textContent=(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    numberSign = 0;

    const orderNumberField = document.getElementById('orderNumberField');
    const answerField = document.getElementById('answerField');
    orderNumberField.innerText = orderNumber;
    //answerField.innerText = `Вы загадали число ${answerNumber }?`;
    console.log(parceNumber(answerNumber));
    answerField.textContent = "Вы загадали число " + parceNumber(answerNumber);

    //проверка на равенсто максимума и минимума, можно попробовать через тернанрный, при изменении попробую сменить
    if (minValue == maxValue) {
       answerField.innerText = `Легко.Вы загадали число ${answerNumber }?`;
       gameRun = false;
    }


};

//повтор игры
document.getElementById('btnRetry').addEventListener('click', function () {
    // зададим начальные условия
    minValue = 0;
    maxValue = 100;
    InputTextField1.value = minValue;
    InputTextField2.value = maxValue;
    startGame();
})

//Кнопка больше
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            //answerField.innerText = `Вы загадали число ${answerNumber }?`;
            console.log(parceNumber(answerNumber));
            answerField.textContent = "Вы загадали число " + parceNumber(answerNumber);
        }
    }
})

//Кнопка меньше
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue == (maxValue-1)){ //сравнивать надо на единицу меньше
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber -1;
            console.log(maxValue);
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            //answerField.innerText = `Вы загадали число ${answerNumber }?`;
            console.log(parceNumber(answerNumber));
            answerField.textContent = "Вы загадали число " + parceNumber(answerNumber);
        }
    }
})

//Кнопка Правильный ответ
document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
       // answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
       const phraseRandom = Math.round( Math.random()*3);
       switch(phraseRandom){
        case 1: answerPhrase = 'Кто чемпион?! Я ЧЕМПИОН!!!';
        break;
        case 2: answerPhrase = 'Надо начинать играть на деньги\n\u{1F60E}';
        break;
        case 3: answerPhrase = 'Ну а то...Я всегда прав';
        break;
       }
       answerField.innerText = answerPhrase;
        gameRun = false;
    }
})


//закроем времено
//document.onclick = function() {
//    document.submit = function() {


//сделаем чеерз функцию
function parceNumber(answerNumber) {   
    // тело обработчика
    console.log('Это тот блок для проваерки наших действий');

    //опреедлим еще знак
    NumberZnak = (answerNumber<0) ? 'Минус' : '';
    console.log('NumberZnak ' + NumberZnak);

    //определим длину числа
    str = Math.abs(answerNumber);
    answerPhrase = '';
    str=str.toString();
    console.log('answerNumber' + answerNumber);
    console.log('Строка значения' + str);
    console.log('Длина значения' + str.length);
    
    //проверка на ноль
    if (answerNumber == 0) {
        answerPhrase = 'Ноль ';
        str.length = 0;
    }

    if (str.length == 3) {
       switch (Math.trunc(str/100)){
           case 1: answerPhrase = 'Сто ';
                str.length = 2;
                str = (str % 100);
                //console.log('Остаток деления на 100  ' + str);
                break;
            case 2: answerPhrase = 'Двести ';
                str.length = 2;
                str = (str % 100);
                break;
            case 3: answerPhrase = 'Триста ';
                str.length = 2;
                str = (str % 100);
                break;
            case 4: answerPhrase = 'Четыреста ';
                str.length = 2;
                str = (str % 100);
                break;
            case 5: answerPhrase = 'Пятьсот ';
                str.length = 2;
                str = (str % 100);
                break;
            case 6: answerPhrase = 'Шестьсот ';
                str.length = 2;
                str = (str % 100);
                break;
            case 7: answerPhrase = 'Семьсот ';
                str.length = 2;
                str = (str % 100);
                break;
            case 8: answerPhrase = 'Восемьсот ';
                str.length = 2;
                str = (str % 100);
                break;
            case 9: answerPhrase = 'Девятьсот ';
                str.length = 2;
                str = (str % 100);
                break;

            default: 
                str.length = 2;
                str = (str % 100);
        };
        //       console.log(answerPhrase);  
    };

    str=str.toString();
    console.log('Строка значения ' + str);
    console.log('Длина значения ' + str.length);

    //определяем десчтки
    if (str.length == 2) {
        console.log('str ' + str);
        switch (Math.trunc(str)){ //выбираем от 10 до 19
            case 10: answerPhrase = answerPhrase + 'десять';
                str.length = 0;
                break;
            case 11: answerPhrase = answerPhrase + 'одинадцать';
                str.length = 0;
                break;
            case 12: answerPhrase = answerPhrase + 'двенадцать';
                str.length = 0;
                break;
            case 13: answerPhrase = answerPhrase + 'тринадцать';
                str.length = 0;
                break;
            case 14: answerPhrase = answerPhrase + 'четырнадцать';
                str.length = 0;
                break;
            case 15: answerPhrase = answerPhrase + 'пятнадцать';
                str.length = 0;
                break;
            case 16: answerPhrase = answerPhrase + 'шестьнадцать';
                str.length = 0;
                break;
            case 17: answerPhrase = answerPhrase + 'семнадцать';
                str.length = 0;
                break;
            case 18: answerPhrase = answerPhrase + 'восемнадцать';
                str.length = 0;
                break;
            case 19: answerPhrase = answerPhrase + 'Девятнадцать';
                str.length = 0;
                break;
            default:{ // иначе ищем десятки с 2 по 9, числа с 20 по 99
                switch (Math.trunc(str/10)){
                    case 2: answerPhrase = answerPhrase + 'двадцать ';
                        str = (str % 10);
                        str.length = 1;
                        break;
                    case 3: answerPhrase = answerPhrase + 'тридцать ';
                        str = (str % 10);
                        str.length = 1;
                        break;
                    case 4: answerPhrase = answerPhrase + 'сорок ';
                        str = (str % 10);
                        str.length = 1;
                        break;
                    case 5: answerPhrase = answerPhrase + 'пятьдесят ';
                        str = (str % 10);
                        str.length = 1;
                        break;
                    case 6: answerPhrase = answerPhrase + 'шестьдесят ';
                        str = (str % 10);
                        str.length = 1;
                        break;
                    case 7: answerPhrase = answerPhrase + 'семьдесят ';
                        str = (str % 10);
                        str.length = 1;
                        break;
                    case 8: answerPhrase = answerPhrase + 'восемьдесят ';
                        str = (str % 10);
                        str.length = 1;
                        break;
                    case 9: answerPhrase = answerPhrase + 'девяносто ';
                        str = (str % 10);
                        str.length = 1;
                        break;
                    default:
                        str = (str % 10);
                        str.length = 1; 
                };

            };
        };
       console.log(answerPhrase);  
    };

    //Работаем по единицам
    str=str.toString();
    //console.log('Строка значения Работаем по единицам' + str);
    //console.log('Длина значения Работаем по единицам' + str.length);

    if (str.length == 1) {
        switch (Math.trunc(str)){ //выбираем от 1 до 9
            case 1: answerPhrase = answerPhrase + 'один';
                str.length = 0;
                break;
            case 2: answerPhrase = answerPhrase + 'два';
                str.length = 0;
                break;
            case 3: answerPhrase = answerPhrase + 'три';
                str.length = 0;
                break;
            case 4: answerPhrase = answerPhrase + 'четыре';
                str.length = 0;
                break;
            case 5: answerPhrase = answerPhrase + 'пять';
                str.length = 0;
                break;
            case 6: answerPhrase = answerPhrase + 'шесть';
                str.length = 0;
                break;
            case 7: answerPhrase = answerPhrase + 'семь';
                str.length = 0;
                break;
            case 8: answerPhrase = answerPhrase + 'восемь';
                str.length = 0;
                break;
            case 9: answerPhrase = answerPhrase + 'девять';
                str.length = 0;
                break;
            default:
                str.length = 0;
        }
    console.log(NumberZnak + answerPhrase); 
    //  console.log(answerPhrase);
    };

    //надо проверить на строку на длину
    console.log('длина строки ответа' + (NumberZnak + answerPhrase).length);
    // конец тела обработчика
    //console.log('передаем из функции '+NumberZnak + answerPhrase); 
    return ((NumberZnak + answerPhrase).length <20) ? (NumberZnak + answerPhrase) : answerNumber;
}


 