let input = document.getElementById('input');
let answer = document.getElementById('answer');

function display(q) {
    input.value += q;
}

function clearDisplay() {
    input.value = '';
    answer.value = '';
}

function deleteInput() {
    const currentValue = input.value;
  
    if (currentValue.length > 0) {
        input.value = currentValue.slice(0, -1);
    }
  }

function calculate() {
    try {
        answer.value = eval(input.value);
    } catch (error) {
        answer.value = 'Error';
    }
}
let changeSign = '+';

function operator(value) {
    if (input.value !== "") {
      if (
        !input.value.endsWith("+") &&
        !input.value.endsWith("-") &&
        !input.value.endsWith("*") &&
        !input.value.endsWith("/")
      ) {
        changeSign = "+";
        input.value += value; // Append the value
      } else {
        changeSign = "+";
        input.value = input.value.slice(0, -1) + value; // Replace the last operator
      }
    }
}