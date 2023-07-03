let submit = document.getElementById('submit');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let result = document.getElementById('result');

submit.addEventListener('click', ()=>{
    let value1 = parseInt(input1.value);
    let value2 = parseInt(input2.value);
    let soma = 0

    for(let value1 = 1 ; value1 <= value2; value1++){
        soma += value1
    }
    result.innerText = `${soma}`
});