let lastOperand = 0;
let operation = null;

const info = document.querySelector("#info");
const inputWindow = document.getElementById("inputWindow");

document.getElementById("btn_clr").addEventListener("click", function () {
  lastOperand = 0;
  operation = null;
  inputWindow.value = "0";
});



document.querySelector("#btn_1").addEventListener("click", function () {
  if (inputWindow.value === "0"){inputWindow.value = "";}
  inputWindow.value += "1";
});

document.querySelector("#btn_2").addEventListener("click", function () {
  if (inputWindow.value === "0"){inputWindow.value = "";}
  inputWindow.value += "2";
});

document.querySelector("#btn_3").addEventListener("click", function () {
  if (inputWindow.value === "0"){inputWindow.value = "";}
  inputWindow.value += "3";
});

document.querySelector("#btn_4").addEventListener("click", function () {
  if (inputWindow.value === "0"){inputWindow.value = "";}
  inputWindow.value += "4";
});

document.querySelector("#btn_5").addEventListener("click", function () {
  if (inputWindow.value === "0"){inputWindow.value = "";}
  inputWindow.value += "5";
});

document.querySelector("#btn_6").addEventListener("click", function () {
  if (inputWindow.value === "0"){inputWindow.value = "";}
  inputWindow.value += "6";
});

document.querySelector("#btn_7").addEventListener("click", function () {
  if (inputWindow.value === "0"){inputWindow.value = "";}
  inputWindow.value += "7";
});

document.querySelector("#btn_8").addEventListener("click", function () {
  if (inputWindow.value === "0"){inputWindow.value = "";}
  inputWindow.value += "8";
});

document.querySelector("#btn_9").addEventListener("click", function () {
  if (inputWindow.value === "0"){inputWindow.value = "";}
  inputWindow.value += "9";
});

document.querySelector("#btn_0").addEventListener("click", function () {
  if (inputWindow.value === "0"){
    inputWindow.value = "0";
  } else {
  inputWindow.value += "0";};
});

/*вещественное число*/
document.querySelector("#btn_real").addEventListener("click", function () {
  inputWindow.value = inputWindow.value +  ".";
});

/*Сумма*/
document.querySelector("#btn_sum").addEventListener("click", function () {
  lastOperand = inputWindow.value;
  operation = "sum";
  inputWindow.value = "";
});

/*Разность*/
document.querySelector("#btn_def").addEventListener("click", function () {
  lastOperand = inputWindow.value;
  operation = "def";
  inputWindow.value = "";
});

/*умножение*/
document.querySelector("#btn_multi").addEventListener("click", function () {
  lastOperand = inputWindow.value;
  operation = "multi";
  inputWindow.value = "";
});

/*Деление*/
document.querySelector("#btn_divis").addEventListener("click", function () {
  lastOperand = inputWindow.value;
  operation = "divis";
  inputWindow.value = "";
});

/*квадратный корень*/
document.querySelector("#btn_sqr").addEventListener("click", function () {
  operation = "sqr";
});

/*унарный минус*/
document.querySelector("#btn_sum_def").addEventListener("click", function () { 
    inputWindow.value = (-inputWindow.value);
});


/*Равно*/
document.querySelector("#btn_calc").addEventListener("click", function () {
  if (operation === "sum") {
    const result = Number(lastOperand) + Number(inputWindow.value);
    info.value += `${lastOperand} + ${inputWindow.value} = ${result} \n`;
    operation = "null";
    lastOperand = 0;
    inputWindow.value = result;
  }

  if (operation === "sqr") {
    const result = Math.sqrt(Number(inputWindow.value));
    info.value += `√${inputWindow.value} = ${result} \n`;
    operation = "null";
    inputWindow.value = result;
  }

  if (operation === "def") {
    const result = Number(lastOperand) - Number(inputWindow.value);
    info.value += `${lastOperand} - ${inputWindow.value} = ${result} \n`;
    operation = "null";
    lastOperand = 0;
    inputWindow.value = result;
  }

  if (operation === "multi") {
    const result = Number(lastOperand) * Number(inputWindow.value);
    info.value += `${lastOperand} * ${inputWindow.value} = ${result} \n`;
    operation = "null";
    lastOperand = 0;
    inputWindow.value = result;
  }

  if (operation === "divis") {
    const result = Number(lastOperand) / Number(inputWindow.value);
    info.value += `${lastOperand} / ${inputWindow.value} = ${result} \n`;
    operation = "null";
    lastOperand = 0;
    inputWindow.value = result;
  }

});
