const month_btn = document.getElementById("month_btn");

const checkDay = function (day) {
  if (isNaN(day)) {
    console.error("Enter correct number!");
    return null;
  }
  let msg;
  console.log(day);
  switch (true) {
    case day >= 1 && day < 11: {
      msg = "Day is in first decade";
      break;
    }
    case day >= 11 && day < 21: {
      msg = "Day is in second decade";
      break;
    }
    case day >= 21 && day <= 31: {
      msg = "Day is in third decade";
      break;
    }
    default: {
      msg = "Day is out of range";
      break;
    }
  }
  return msg;
};

month_btn.addEventListener('click', () => {
  let month_input = +document.getElementById("month_input").value;
  console.log(month_input);
  alert(checkDay(month_input));
});

//Calculator task

const calc_button = document.getElementById("calc_btn");
const result = document.getElementById("result");

function calcResult (num1, num2, operation) {
  switch (true) {
    case operation === "plus":
      return num1 + num2;
    case operation === "minus":
      return num1 - num2;
    case operation === "mltply":
      return num1 * num2;
    case operation === "divide":
      return num1 / num2;
    case operation === "mod":
      return num1 % num2;
  }
};

function calculate() {
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let operation = document.getElementById("operation").value;
  console.log(num1, num2, operation);
  return calcResult(num1, num2, operation) ;
}

calc_button.addEventListener('click', () => {
  result.value = calculate();
});