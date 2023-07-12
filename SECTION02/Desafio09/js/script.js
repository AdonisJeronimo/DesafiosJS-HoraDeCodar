let tax = 2.50;
let ageUser = document.getElementById('age');
let education = document.getElementById('education');
let submit = document.getElementById('btn');
let result = document.getElementById('result');

submit.addEventListener('click', ()=>{
    let age = parseInt(ageUser.value)
    let student = education.value

    if(isNaN(age) || student == 'selecione'){
        result.innerText = "Preencha os campos"
    }else if(age == 0  || age <= 6 ){
        result.innerText = "Grátis"
        console.log("Gratis")
    }else if(student == 'sim'){
        let desconto = tax - ((tax * 50) / 100)
        result.innerText = `50% de desconto = Total R$${desconto}`
    }else if(age >= 60){
        let desconto = tax - ((tax * 30) / 100)
        result.innerText = `30% de desconto = Total R$${desconto}`
        console.log(`Idoso ganha 30% de desconto, pagando um valor de: R$ ${desconto}`)
    }else{
        result.innerText = `Valor normal = Total R$${tax}`

    }
});




