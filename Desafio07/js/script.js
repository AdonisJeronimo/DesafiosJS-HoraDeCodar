let number1 = document.getElementById('number1') 
let number2 = document.getElementById('number2') 
let btn = document.getElementById('bnt')
let result = document.getElementById('result')

btn.addEventListener('click',()=>{
    let input1 = parseInt(number1.value)
    let input2 = parseInt(number2.value)

    if(input1 == input2 && input1 != "" && input2 != ""){
        result.innerText = "Igual"
    }else if(input1 < input2){
        result.innerText = "Menor"
    }else if(input1 > input2){
        result.innerText = "Maior"
    }else{
        result.innerText = "Inválido"
        return
    }
});

