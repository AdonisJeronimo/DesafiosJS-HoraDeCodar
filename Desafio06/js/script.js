let ageInput = document.getElementById('age');
let btn = document.getElementById('submit');
let result = document.getElementById('result');

btn.addEventListener('click', ()=>{
    age = ageInput.value
    if(age == ""){
        result.innerText = "Inválido"
    }else if(age <= 12){
        result.innerText = "Criança"
        result.style.backgroundColor = '#02AE50'
    }else if(age >= 13 && age <= 17){
        result.innerText = "Adolescente"
        result.style.backgroundColor = '#FF0001'
    }else if(age >= 18 && age <= 59){
        result.innerText = "Adulto"
        result.style.backgroundColor = '#000'
        result.style.color = '#fff'
    }else if(age >= 60){
        result.innerText = "Idoso"
        result.style.backgroundColor = 'grey'
    }

    ageInput.value = ""
});