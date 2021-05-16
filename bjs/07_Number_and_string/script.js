let operations = { sum: "+", minus: "-", multi: "*", divide: "/" };
let history = [];
let allHistory = [];
const PRECISION = 2;

const inputWindow = document.getElementById("inputWindow");
const inputHistory = document.getElementById("history");
const selectHistory = document.getElementById("history_selector");

renderCalc();

/* Очистка калькулятора */
document.getElementById("btn_clr").addEventListener("click", function () {
  history = [];
  renderCalc();
});

/* Перерисовка калькулятора  */
function renderCalc() {
  inputWindow.value = history.length > 0 ? history[history.length - 1] : "0";
  selectHistory.options[0].text = history.length > 0 ? history.join("") : "0";
}

/* Проверка, что последней была введена операция */
function isLastOperation() {
  if (Object.values(operations).indexOf(history[history.length - 1]) >= 0)
    return true;
  else return false;
}

/* отмена последнего ввода */
document.getElementById("btn_clr_last").addEventListener("click", function () {
  let isLast = isLastOperation();
  if (history.length) {
    if (!isLast) {
      let item = history.pop();
      history.push(item.slice(0, item.length - 1));
    } else {
      history.pop();
    }
  }
  renderCalc();
});

/* Нажатие клавиши с операцией */
Object.keys(operations).forEach((oper) => {
  document.getElementById(`btn_${oper}`).addEventListener("click", function () {
    if (isLastOperation()) history.pop();
    history.push(operations[oper]);
    renderCalc();
  });
});

/* Квадратный корень */

document.getElementById("btn_sqrt").addEventListener("click", function () {
  if (history.length) {
    let isLast = isLastOperation();
    if (!isLast) {
      let item = history.pop();
      history.push(Math.sqrt(parseFloat(item)).toPrecision(PRECISION));
    }
  }
  renderCalc();
});

/* Нажатие цифры на клавиатуре - запись числа в массив history */
for (let i = 0; i < 10; i++) {
  document.querySelector(`#btn_${i}`).addEventListener("click", function (evt) {
    if (!history.length) history.push(i.toString());
    else if (isLastOperation()) history.push(i.toString());
    else history.push(history.pop() + i.toString());
    renderCalc();
  });
}

/* Нажатие точки */
document.getElementById("btn_point").addEventListener("click", function () {
  if (!isLastOperation() && !history[history.length - 1].match(/\./)) {
    history.push(history.pop() + ".");
  }
  renderCalc();
});

/* Изменение знака */
document.getElementById("btn_sign").addEventListener("click", function () {
  if (!isLastOperation() && history.length) {
    history.push((-1 * history.pop()).toString());
  }
  renderCalc();
});

/* Вычисление результата */
document.getElementById("btn_equal").addEventListener("click", function () {
  let result = history.reduce((result, current, index, array) => {
    if (index === 0) result = parseFloat(current);
    let currentIndex = Object.values(operations).indexOf(current);
    if (currentIndex >= 0) {
      let nextItem = parseFloat(array[index + 1]);
      switch (Object.keys(operations)[currentIndex]) {
        case "sum":
          result += nextItem;
          break;
        case "minus":
          result -= nextItem;
          break;
        case "multi":
          result *= nextItem;
          break;
        case "divide":
          result /= nextItem;
          break;
      }
    }
    return result;
  }, 0);
  history.push("=" + result.toFixed(PRECISION));
  allHistory.push(history);
  let newOption = new Option(history.join(""));
  selectHistory.append(newOption);
  history = [];
  history.push(result.toFixed(PRECISION));
  renderCalc();
});
