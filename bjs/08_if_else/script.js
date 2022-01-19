const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');
const title = document.querySelector('#title');
const minDefault = 0;
const maxDefault = 100;
let arrayOne = [
    [0,"0"],[1,"один"],[2,"два"],[3,"три"],[4,"четыре"],[5,"пять"],[6,"шесть"],[7,"семь"],[8,"восемь"],[9,"девять"],[10,"десять"],
     [11,"одиннадцать"],[12,"двенадцать"],[13,"тринадцать"],[14, "четырнадцать"],[15, "пятнадцать"],[16,"шестнадцать"],[17,"семнадцать"],
    [18,"восемнадцать"],[19,"девятнадцать"],
];

let arrayTwo = [
    [2,"двадцать"],[3,"тридцать"],[4,"сорок"],[5,"пятьдесят"],[6,"шестьдесят"],[7,"семьдесят"],[8,"восемьдесят"],[9,"девяносто"],
];

let arrayThree = [
    [1,"сто"],[2,"двести"],[3,"триста"],[4,"четыреста"],[5,"пятьсот"],[6,"шестьсот"],[7,"семьсот"],[8,"восемьсот"],[9,"девятьсот"],
];

let minValue;
let maxValue;
let minCheck;
let maxCheck;
let answerNumber;
let answerNumber1;
let answerNumber2;
let letterAnswer = "";
let num1;
let num2;
let num3;
let num4;
let num5;

let forIt = function (array,test) {
    for ( let i = 0; i < array.length; i++) {
        if ( test == array[i][0]) {
        letterAnswer = letterAnswer + array[i][1] + " ";
        };
    };
};

function Timer() {
    window.setTimeout(Ask(answerNumber1), 3000);
};

function Ask(answerNumber1) {
    let randomAsk = Math.round(Math.random()*4);
    if (randomAsk === 1) {
        answerField.innerText = `Вы загадали число ${answerNumber1}?`; 
    } else if (randomAsk === 2) {
        answerField.innerText = `Да это легко! Ты загадал ${answerNumber1}!`;
    } else if ( randomAsk === 3) {
        answerField.innerText = `С первых секунд я знал, что это ${answerNumber1}!`;
    } else {
        answerField.innerText = `Возможно это ${answerNumber1}?`;
    };
};

function Timer() {
    window.setTimeout(function() { Ask(answerNumber1); },3000);
};



document.querySelector("#btnStart").addEventListener('click', function() {
    title.textContent = "Processing...";
    minValue = document.querySelector("#minValue").value;
    (Number(minValue) < -999) ? document.querySelector("#minValue").value = - 999: minValue;
    /*При моей реализации программы данная проверка не требуется
    minCheck = isNaN(minValue) || minDefault;
    minValue = minDefault;*/
    maxValue = document.querySelector("#maxValue").value;
    (Number(maxValue) > 999) ? document.querySelector("#maxValue").value = 999: maxValue;
    /*При моей реализации программы данная проверка не требуется
    maxCheck = isNaN(maxValue) || maxDefault;
    maxValue = maxDefault;*/
    minValue = document.querySelector("#minValue").value;
    maxValue = document.querySelector("#maxValue").value; 
    answerNumber1 = Math.floor((Number(minValue) + Number(maxValue)) / 2);
    answerNumber2 = (Number(String(answerNumber1).slice()));
    if ( answerNumber1 < 0) {
        letterAnswer =letterAnswer + "минус" + " ";
    };
    
    let answerNumber = Math.abs(answerNumber1);
    
    if ( 0 <= answerNumber && answerNumber < 20) {
        forIt(arrayOne,answerNumber);
    } else if (20 <= answerNumber && answerNumber < 99) {
        num1 = parseInt(String(answerNumber).charAt(0));
        forIt(arrayTwo,num1);
        num2 = answerNumber%10;
        forIt(arrayOne,num2);
    } else if ( 100 <= answerNumber && answerNumber <=999) {
        num3 = parseInt(String(answerNumber).charAt(0));
        forIt(arrayThree,num3);
        num4 = parseInt(String(answerNumber%100).charAt(0));
        forIt(arrayTwo,num4);
        num5 =parseInt(String(answerNumber%100).charAt(1));
        forIt(arrayOne,num5);
    };
    letterAnswer.length < 20 ? answerNumber1 = letterAnswer: answerNumber1;
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Загадайте число от ${minValue} до ${maxValue}!`; 
    Timer();
});


document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            title.textContent = "Oh, no\u{1F47F}"
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber2 + 1;
            answerNumber2  = Math.floor((Number(minValue) + Number(maxValue)) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            Ask(answerNumber2);
        };
    };
});

document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            title.textContent = "Oh, no\u{1F47F}"
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber2 - 1;
            answerNumber2  = Math.floor((Number(minValue) + Number(maxValue)) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            Ask(answerNumber2);
        }
    }
})

document.querySelector('#btnEqual').addEventListener('click', function () {
    title.textContent = "Yes, sir!\u{270A}"
    if (gameRun){
        const answerPhrase = Math.round(Math.random()*4);
        switch (answerPhrase) {
            case 1:
            answerField.innerText = `Я всегда угадываю!\n\u{1F60E}`;
            gameRun = false;
            break;
            case 2:
            answerField.innerText = `Это было слишком просто!\n\u{1F61C}`;
            gameRun = false;
            break;
            case 3:
            answerField.innerText = `Требую добавки!\n\u{1f60b}`;
            gameRun = false;
            break;
            case 4:
            answerField.innerText = `Я - гениален!\n\u{1F61D}`;
            gameRun = false;
            break; 
        };
    };
});

document.querySelector("#btnReset").addEventListener('click', function() {
    document.querySelector("#minValue").value = 0;
    document.querySelector("#maxValue").value = 0;
    orderNumber = 0;
    letterAnswer = "";
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Обнулен\u{1F62E}`;

});

document.querySelector('#home').addEventListener('click', function(event) {
    event.preventDefault();
        ask = confirm('Надеемся, вам понравилась игра?');
        if (ask) {
        alert('Отправляйте комментарии на нашу почту!');
        } else {
        alert("Бывает!В следующий  раз мы постараемся лучше!");
        };
});

