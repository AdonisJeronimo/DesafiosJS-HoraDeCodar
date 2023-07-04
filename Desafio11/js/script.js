let numberInput = document.getElementById('number');
let submitInput = document.getElementById('submit');
let result = document.getElementById('result');

submitInput.addEventListener('click', () => {
  let number = parseInt(numberInput.value);
  let tabuada = '';

  for (let i = 1; i <= 10; i++) {
    let resultado = number * i;
    tabuada += `${i} x ${number} = ${resultado}<br>`;
  }

  result.innerHTML = tabuada;
});
