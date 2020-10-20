let formMinValue = document.querySelector("#formMinValue");
let formMaxValue = document.querySelector("#formMaxValue");

let minValue = +formMinValue.value;
let maxValue = +formMaxValue.value;




let ed;
let desEleven;
let des;
let sot;

let minus;
let ostatok;
let stringNumber;

let answerNumber;
let orderNumber;
let gameRun = false;
let on = true;
let discharge;

let phraseRandom;

const orderNumberField = document.getElementById("orderNumberField");
const answerField = document.getElementById("answerField");


/*Связываем riddle c выпадающем элементом с сообщением */
const riddle = document.querySelector("#riddle");
const start = document.querySelector("#start");

formMinValue.value = "0"; /* Минимальное значение */
formMaxValue.value = "100"; /* Минимальное значение */

start.addEventListener("click", NewGame);

function NewGame() {
  orderNumber = 1;
  orderNumberField.innerText = orderNumber;

  if (on) {
    start.textContent = "ЗАНОВО";
    start.className = "btn btn-danger btn-lg btn-block";
    minValue = +formMinValue.value; /* Минимальное значение */
    maxValue = +formMaxValue.value; /*Максимальное значение*/

    minValue = minValue >= 1000 ? 999 : minValue <= -1000 ? -999 : minValue;
    maxValue = maxValue >= 1000 ? 999 : maxValue <= -1000 ? -999 : maxValue;

    minValue = (minValue === 0 && "0") || (minValue !== 0 && minValue) || 20;
    maxValue = (maxValue === 0 && "0") || (maxValue !== 0 && maxValue) || 80;

    answerNumber = Math.floor((minValue + maxValue) / 2);
    

    gameRun = true;

    
    answerField.innerText = `Вы загадали число ${answerNumber}?`;
    
    /*Сообщение в выпадающем элементе*/
    riddle.innerText = `Загадайте любое целое число от ${minValue} 
    до ${maxValue}, а я его угадаю`;
    on = false;

  } else {
    on = true;
    start.textContent = "НАЧАТЬ ИГРУ";
    formMinValue.value = "0"; /* Минимальное значение */
    formMaxValue.value = "100"; /* Минимальное значение */
    start.className = "btn btn-success btn-lg btn-block";
    answerField.textContent = "Введите значения.";
  }
}

function messageError() {
  phraseRandom = Math.round(Math.random() * 3);
  const answerPhrase =
    phraseRandom == 0
      ? `Вы загадали неправильное число!`
      : phraseRandom == 1
      ? `Я сдаюсь..`
      : `Шутки шутить вздумал?`;
  answerField.innerText = answerPhrase;
  gameRun = false;
}

function messageQuestion() {
if (gameRun) {

 discharge = answerNumber;

 if (String(discharge)[0] == "-") { 
      discharge = String(-discharge);
 }


/***************************/
/* Обработка и вывод сотен */ 
/***************************/
  if (String(discharge).length == "2") {
    ostatok = discharge / 10;
    ostatok = String(ostatok).substring(2, 3);


  } else if (String(discharge).length == "3") {
    ostatok = discharge / 100;
    
    if (String(ostatok).length == 4) {
      ostatok = String(ostatok).substring(2, 4);

    } else if (String(ostatok).length == 3) {
      ostatok = String(discharge).substring(1, 3) ;
    }
  }
  

/***************************/
/* Обработка и вывод десятков */ 
/***************************/
  
  if (String(discharge).length == "1") {
    ed = +(discharge);
    edinici();
    stringNumber = ed
     /*alert(stringNumber);*/
  
    
  } else if (discharge % 10 == "0"  &&  String(discharge).length == "2") {
    des = +(discharge);
    desyatki();
    stringNumber = des;
      /*alert(stringNumber);*/

    
  } else if (discharge >= 11 && discharge <= 19 && String(discharge).length == "2") {
    desEleven = +(discharge);
    desyatkiEleven();
    stringNumber = desEleven;
     /*alert(stringNumber);*/
    

  } else if (discharge % 10 != 0 && discharge > 19 && String(discharge).length == "2") {
    des = +(discharge - ostatok);
    desyatki();

    ed = +(ostatok);
    edinici();
    
    stringNumber = (des + " " + ed);
    console.log(stringNumber);
    /*alert(stringNumber);*/

  } 




/***************************/
/* Обработка и вывод сотен */ 
/***************************/

if (discharge % 100 == 0 && String(discharge).length == "3") {
  sot = +(discharge);
  sotni();
  stringNumber = sot
    /*alert(stringNumber);*/

/*******Сотни + еденици  (101, 102, 103)*****/
  
} else if (discharge % 100 != 0 && ostatok[0] == 0 && String(discharge).length == "3") {
  sot = +(discharge - ostatok[1]);
  sotni();

  ed = +(ostatok[1]);
  edinici();

  stringNumber = (sot + " " + ed);
    /*alert(stringNumber);*/

 /*******Сотни + десятки  (110, 120, 250, 360)*********/

} else if (discharge % 100 != 0 && String(discharge)[2] == 0 && String(discharge).length == "3") {
  sot = +(discharge - ostatok);
  sotni();
  
  des = +(ostatok);
  desyatki();

  stringNumber = (sot + " " + des);
    /*alert(stringNumber);*/

  /*******Сотни + десятки  (11, 12, 13)*********/

} else if (ostatok >= 11 && ostatok <= 19 && String(discharge).length == "3") {
  sot = +(discharge - ostatok);
  sotni();

  desEleven = +(ostatok);
  desyatkiEleven(); 

  stringNumber = (sot + " " + desEleven);
    /*alert(stringNumber);*/

/*******Сотни + десятки + единицы (121, 365, 249)*********/
  
} else if (discharge % 100 != 0 && discharge > 119 &&  String(discharge).length == "3") {
  sot = +(discharge - ostatok);
  sotni();

  des = +(ostatok - ostatok[1]);
  desyatki();

  ed = +(ostatok[1]);
  edinici();

  stringNumber = (sot + " " + des + " " + ed);
  /*alert(stringNumber);*/
}


/*answerPhrase =
  phraseRandom === 1
    ? `Вы загадали число ${answerNumber}?`
    : phraseRandom === 2
    ? `Я думаю, это оно ${answerNumber}?`
    : `Скажи что я прав ${answerNumber}?`;
answerField.innerText = answerPhrase;*/
phraseRandom = Math.round(Math.random() * 3);

console.log(phraseRandom)
switch(phraseRandom) { 
      case 0: 
      if (stringNumber.length < 20 && answerNumber > 0) {
        answerField.innerText = `Вы загадали число ${stringNumber}?`; 

      } else if (stringNumber.length > 20 && answerNumber > 0 ){
        answerField.innerText = `Вы загадали число ${answerNumber}?`;

      } else if (stringNumber.length < 20 && answerNumber < 0 ){
        answerField.innerText = `Вы загадали число минус ${stringNumber}?`;

      } else if (stringNumber.length > 20 && answerNumber < 0 ){
        answerField.innerText = `Вы загадали число минус ${answerNumber}?`;
      }
      break;


      case 1: 
      if (stringNumber.length < 20 && answerNumber > 0) {
        answerField.innerText = `Я думаю, это оно ${stringNumber}?`; 

      } else if (stringNumber.length > 20 && answerNumber > 0 ){
        answerField.innerText = `Я думаю, это оно ${answerNumber}?`;

      } else if (stringNumber.length < 20 && answerNumber < 0 ){
        answerField.innerText = `Я думаю, это оно минус ${stringNumber}?`;

      } else if (stringNumber.length > 20 && answerNumber < 0 ){
        answerField.innerText = `Я думаю, это оно минус ${answerNumber}?`;
      }
      break;


      case 2: 
      if (stringNumber.length < 20 && answerNumber > 0) {
        answerField.innerText = `Скажи что я прав ${stringNumber}?`; 

      } else if (stringNumber.length > 20 && answerNumber > 0 ){
        answerField.innerText = `Скажи что я прав ${answerNumber}?`;

      } else if (stringNumber.length < 20 && answerNumber < 0 ){
        answerField.innerText = `Скажи что я прав минус ${stringNumber}?`;

      } else if (stringNumber.length > 20 && answerNumber < 0 ){
        answerField.innerText = `Скажи что я прав минус ${answerNumber}?`;
      }
      break;

      default:
        if (stringNumber.length < 20 && answerNumber > 0) {
        answerField.innerText = `Скажи что я прав ${stringNumber}?`; 

      } else if (stringNumber.length > 20 && answerNumber > 0 ){
        answerField.innerText = `Скажи что я прав ${answerNumber}?`;

      } else if (stringNumber.length < 20 && answerNumber < 0 ){
        answerField.innerText = `Скажи что я прав минус ${stringNumber}?`;

      } else if (stringNumber.length > 20 && answerNumber < 0 ){
        answerField.innerText = `Скажи что я прав минус ${answerNumber}?`;
      }
  }
}
}


function desyatkiEleven() {
  switch (desEleven) {
    case 11: desEleven = "одиннадцать"; break;
    case 12: desEleven = "двенадцать"; break;
    case 13: desEleven = "тринадцать"; break;
    case 14: desEleven = "четырнадцать"; break;
    case 15: desEleven = "пятнадцать"; break;
    case 16: desEleven = "шестнадцать"; break;
    case 17: desEleven = "семнадцать"; break;
    case 18: desEleven = "восемнадцать"; break;
    case 19: desEleven = "девятнадцать"; break;
  }
}

function edinici() {
  switch (ed) {
    case 0: ed = "ноль"; break;
    case 1: ed = "один"; break;
    case 2: ed = "два"; break;
    case 3: ed = "три"; break;
    case 4: ed = "четыри"; break;
    case 5: ed = "пять"; break;
    case 6: ed = "шесть"; break;
    case 7: ed = "семь"; break;
    case 8: ed = "восемь"; break;
    case 9: ed = "девять"; break;
  }
}



function desyatki() {
  switch (des) {
    case 10: des = "десять"; break;
    case 20: des = "двадцать"; break;
    case 30: des = "тридцать"; break;
    case 40: des = "сорок"; break;
    case 50: des = "пятьдесят"; break;
    case 60: des = "шестьдесят"; break;
    case 70: des = "семьдесят"; break;
    case 80: des = "восемьдесят"; break;
    case 90: des = "девяносто"; break;
  }
}

function sotni() {
  switch (sot) {
    case 100: sot = "сто"; break;
    case 200: sot = "двести"; break;
    case 300: sot = "триста"; break;
    case 400: sot = "четыреста"; break;
    case 500: sot = "пятьсот"; break;
    case 600: sot = "шестьсот"; break;
    case 700: sot = "семьсот"; break;
    case 800: sot = "восемьсот"; break;
    case 900: sot = "девятьсот"; break;
  }
}


/* Кнопка больше */
document.querySelector("#btnOver").addEventListener("click", function () {
  if (gameRun && on==false) {
    if (minValue === maxValue || minValue > maxValue) {
      messageError();
      
    } else {
      minValue = answerNumber + 1;
      answerNumber = Math.floor((minValue + maxValue) / 2);
      console.log(`minValue ${minValue}, maxValue ${maxValue}`);
      orderNumber++;
      orderNumberField.innerText = orderNumber;
      messageQuestion();
    }
  }
});

/* Кнопка меньше */
document.querySelector("#btnLess").addEventListener("click", function () {
  if (gameRun && on==false) {
    if (minValue >= maxValue) {
      messageError();

    } else {      
      maxValue = answerNumber - 1;
      answerNumber = Math.ceil((minValue + maxValue) / 2);
      console.log(`maxValue ${maxValue}, minValue ${minValue}`);
      orderNumber++;
      orderNumberField.innerText = orderNumber;
      messageQuestion();
    }
  }
});

/* Кнопка верно */
document.getElementById("btnEqual").addEventListener("click", function () {
  if (gameRun) {
    phraseRandom = Math.round(Math.random() * 3);
    const answerPhrase =
      phraseRandom == 0
        ? `Я всегда угадываю :)`
        : phraseRandom == 1
        ? `Я говорил, говорил что угадаю :)`
        : `Прорицатель, мое второе имя :)`;

    answerField.innerText = answerPhrase;
    gameRun = false;
  }
});
