minValue = 0;
maxValue = 100;
orderNumber = 0;
let answerNumber =0; 
let gameRun = true;
let numberSign = 0;

//повтор игры
addEventListener("DOMContentLoaded", (event) => {

let minValue = parseInt(prompt('Минимальное знание числа для игры','0')) || 0; //добавили присвоение по дефолту
console.log('Минимальное число '+ minValue); //Вывод в консоль для проверки
let maxValue = parseInt(prompt('Максимальное знание числа для игры', 100)) || 100; //добавили присвоение по дефолту//исправить надо
console.log('Максимальное число '+maxValue);//Вывод в консоль для проверки

//Сравнение по разрешенному максимальному и минимальному значению через тернарный оператор
minValue = (minValue < -999) ? -999 : minValue;
console.log('Минимальное число '+ minValue); //Вывод в консоль для проверки
maxValue = (maxValue > 999) ? 999 : maxValue;
console.log('Максимальное число '+maxValue);//Вывод в консоль для проверки


alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
let numberSign = 0;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

})


//повтор игры
document.getElementById('btnRetry').addEventListener('click', function () {
    /*minValue = 0;
    maxValue = 100;
    orderNumber = 0;*/
    //убрать надо let так как переменные уже объявили
    //Запрашиваем опять максимум и минимум*/
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    //Высчитываем ответ
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    // номер шага
    orderNumber = 1;
    //Статус игры
    gameRun = true;
    const orderNumberField = document.getElementById('orderNumberField');
    const answerField = document.getElementById('answerField');

    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;

})

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
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

//Кнопка меньше
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === (maxValue-1)){ //сравнивать надо на единицу меньше
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
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
       // answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
       const phraseRandom = Math.round( Math.random()*3);
       switch(phraseRandom){
        case 1: answerPhrase = '1++++';
        break;
        case 2: answerPhrase = '2+++';
        break;
        case 3: answerPhrase = '3+++';
        break;
       }
       answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

//определим длину числа
let str = answerNumber;
answerPhrase = '';
str=str.toString();
console.log('answerNumber' + answerNumber);
console.log('Строка значения' + str);
console.log('Длина значения' + str.length);

if (str.length == 3) {
    switch (Math.trunc(answerNumber/100)){
        case 1: answerPhrase = 'Сто ';
            str.length = 2;
            str = (str % 100);
            console.log('Остаток деления на 100  ' + str);
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
        };
        console.log(answerPhrase);  
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
                        break;
                    case 3: answerPhrase = answerPhrase + 'тридцать ';
                        str = (str % 10);
                        break;
                    case 4: answerPhrase = answerPhrase + 'сорок ';
                        break;
                    case 5: answerPhrase = answerPhrase + 'пятьдесят ';
                        break;
                    case 6: answerPhrase = answerPhrase + 'шестьдесят ';
                        break;
                    case 7: answerPhrase = answerPhrase + 'семьдесят ';
                        break;
                    case 8: answerPhrase = answerPhrase + 'восемьдесят ';
                        break;
                    case 9: answerPhrase = answerPhrase + 'девяносто ';
                    break;

                };

            };
        };
        console.log(answerPhrase);  
};

//Работаем по единицам
str=str.toString();
console.log('Строка значения ' + str);
console.log('Длина значения ' + str.length);

if (str.length == 1) {
    console.log('str ' + str);
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
    }
    console.log(answerPhrase); 
};

document.onclick = function() {
    // тело обработчика
    console.log('Это тот блок');

    //определим длину числа
let str = answerNumber;
answerPhrase = '';
str=str.toString();
console.log('answerNumber' + answerNumber);
console.log('Строка значения' + str);
console.log('Длина значения' + str.length);

if (str.length == 3) {
    switch (Math.trunc(answerNumber/100)){
        case 1: answerPhrase = 'Сто ';
            str.length = 2;
            str = (str % 100);
            console.log('Остаток деления на 100  ' + str);
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
        };
        console.log(answerPhrase);  
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
                        break;
                    case 3: answerPhrase = answerPhrase + 'тридцать ';
                        str = (str % 10);
                        break;
                    case 4: answerPhrase = answerPhrase + 'сорок ';
                    str = (str % 10);
                        break;
                    case 5: answerPhrase = answerPhrase + 'пятьдесят ';
                    str = (str % 10);
                        break;
                    case 6: answerPhrase = answerPhrase + 'шестьдесят ';
                    str = (str % 10);
                        break;
                    case 7: answerPhrase = answerPhrase + 'семьдесят ';
                    str = (str % 10);
                        break;
                    case 8: answerPhrase = answerPhrase + 'восемьдесят ';
                    str = (str % 10);
                        break;
                    case 9: answerPhrase = answerPhrase + 'девяносто ';
                    str = (str % 10);
                    break;

                };

            };
        };
        console.log(answerPhrase);  
};

//Работаем по единицам
str=str.toString();
console.log('Строка значения ' + str);
console.log('Длина значения ' + str.length);

if (str.length == 1) {
    console.log('str ' + str);
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
    }
    console.log(answerPhrase); 
};
    // конец тела обработчика
  }