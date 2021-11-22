let a = ""; // First number
let b = ""; // Second num
let sign = "";
let finish = false; //

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "X", "/"];

// Dysplay
const out = document.querySelector(".calc-screen p");

/*function clearAll ()
{
    a = '';
    b = '';
    sign = '';
    finish = false; 
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;*/

document.querySelector(".buttons").onclick = (event) => {
  if (!event.target.classList.contains("btn")) return;

  if (event.target.classList.contains("ac")) {
    a = "";
    b = "";
    sign = "";
    finish = false;
    out.textContent = 0;
    return;
  }

  out.textContent = "";
  const key = event.target.textContent;

  // 0-9 .
  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      out.textContent = a;
    } else if (a != "" && b != "" && finish) {
    } else {
      b += key;
      out.textContent = b;
    }
    console.log(a, b, sign);
    return;
  }

  // + - / X
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.log(a, b, sign);
    return;
  }

  // =
  if (key === "=") {
    if (b === "") b = a;
    switch (sign) {
      case "+":
        a = +a + +b;
        break;

      case "-":
        a = a - b;
        break;

      case "X":
        a = a * b;
        break;

      case "/":
        a = a / b;
        break;
    }
    finish = true;
    out.textContent = a;
    console.log(a, b, sign);
  }
};
