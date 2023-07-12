let weightInput = document.getElementById("weight");
let heightInput = document.getElementById("height");
let calculate = document.getElementById("calculate");
let result = document.getElementById("result");

function CalculateIMC() {
  calculate.addEventListener("click", function () {

    weight = weightInput.value
    height = heightInput.value / 100
    let IMC = (weight / (height * height)).toFixed(2)

    if(weight =! "" && height != ""){
      result.innerText = `Seu IMC é: ${IMC}`
    }else{
      result.innerText = `Preencha os campos acima`
    }
  });
  
}

CalculateIMC();
