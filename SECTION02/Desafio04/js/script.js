let lengthAreaInput = document.getElementById('lengthArea');
let widthAreaInput = document.getElementById('widthArea');
let lengthPrimeterInput = document.getElementById('lengthPrimeter');
let widthPrimeterInput = document.getElementById('widthPrimeter');
let submitAreaBnt =document.getElementById('submitArea');
let submitPerimeterBnt =document.getElementById('submitPerimeter')
let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');

function Area(){
    submitAreaBnt.addEventListener('click', () =>{
        let lengthArea = lengthAreaInput.value;
        let widthArea = widthAreaInput.value;
        let area = (lengthArea * widthArea)

        if(lengthArea != "" && widthArea != ""){
            result1.innerText = `${area}²`
        }else{
            result1.innerText = `Preencha os campos necessários.`
        }
    });

};

function Perimeter(){
    submitPerimeterBnt.addEventListener('click', () =>{
        lengthPrimeter = parseFloat(lengthPrimeterInput.value);
        widthPrimeter = parseFloat(widthPrimeterInput.value);
        let primeter = 2 * (lengthPrimeter + widthPrimeter)

        if(lengthPrimeter != "" && widthPrimeter != ""){
            result2.innerText = `${primeter}²`
        }else{
            result2.innerText = `Preencha os campos necessários.`
            return
        }
    });
};

Area();
Perimeter();