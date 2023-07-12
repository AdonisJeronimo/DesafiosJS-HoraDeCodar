let operand1 = parseFloat(prompt("Digite o primeiro número:"));
let operand2 = parseFloat(prompt("Digite o segundo número:"));
let operator = prompt("Digite o operador (+, -, *, /):");
let result;

switch (operator) {
  case "+":
    result = operand1 + operand2;
    break;
  case "-":
    result = operand1 - operand2;
    break;
  case "*":
    result = operand1 * operand2;
    break;
  case "/":
    result = operand1 / operand2;
    break;
  default:
    console.log("Operador inválido");
}

console.log(`Resultado: ${result}`);

