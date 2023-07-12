let dividendInput = document.getElementById('dividend');
let dividerInput = document.getElementById('divider');
let btn = document.getElementById('btn');
let result = document.getElementById('result')



function VerficationDivision(){
    btn.addEventListener('click', () =>{
        let dividend = dividendInput.value;
        let divider = dividerInput.value;

        if(dividend % divider === 0){
            result.innerText = "VERDADEIRO"
            result.style.backgroundColor = 'green'
        }else{
            result.innerText = "FALSO"
            result.style.backgroundColor = 'red'
        }
    })
}

VerficationDivision()

