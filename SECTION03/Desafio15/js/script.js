let numberInput = document.getElementById('number')
let submit = document.getElementById('submit')
let result = document.getElementById('result')

submit.addEventListener('click', ()=>{
        number = parseInt(numberInput.value)

        if(number % 2 === 0){
            result.innerText = `O número ${number} é par.`
        }else{
            result.innerText = `O número ${number} é ímpar.`
        }

        numberInput.value = ""
    
});

