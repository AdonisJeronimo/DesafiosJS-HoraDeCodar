function Conversion() {
  let select = document.getElementById("temperatura-principal");
  let select2 = document.getElementById("temperatura-final");
  let calcular = document.getElementById("calcular");
  let resultado = document.getElementById("resultado");
  //Seleção da temperatura inicial
  select.addEventListener("change", function () {});
  //Seleção da temperatura final (conversao)
  select2.addEventListener("change", function () {});

  //Capturar valor do campo input
  calcular.addEventListener("click", function () {
    var valueInput1 = document.getElementById("valueInput1").value;
    console.log(valueInput1);

    //Calculo de conversão de Celsius para Fahrenheit
    if (select.value === "Celsius" && select2.value === "Fahrenheit") {
      let Celsius = (valueInput1 * 9) / 5 + 32;
      resultado.innerText = `${Celsius} °F`;
      console.log(Celsius);
    } else if (select.value === "Fahrenheit" && select2.value === "Celsius") {
      //Calculo de conversão de Fahrenheit para Celsius
      let Fahrenheit = ((valueInput1 - 32) * 5) / 9;
      resultado.innerText = `${Fahrenheit.toFixed(2)} °C`;
    } else {
      resultado.innerText = `Inválido`;
    }
  });
}
Conversion();
