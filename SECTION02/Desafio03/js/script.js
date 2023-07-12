let nameInput = document.getElementById('name');
let ageInput = document.getElementById('age') ;
let cityInput = document.getElementById('city');
let result = document.getElementById('result');
let submit = document.getElementById('submit');

function concatenar(){
    submit.addEventListener('click', ()=>{
        nameUser = nameInput.value;
        ageUser = ageInput.value;
        cityUser = cityInput.value;

        if(nameUser != "" && ageUser != "" && cityUser != ""){
            result.innerText = `Olá, me chamo ${nameUser}, tenho ${ageUser} anos e moro na cidade de ${cityUser}.`
        }else{
            result.innerText = `Por favor, preencha todos os campos acima..`
        }
    });
    
};
concatenar();