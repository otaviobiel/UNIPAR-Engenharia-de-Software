let resultado = document.querySelector('#resultado')
let clas = document.querySelector('#clas')
let altura = document.querySelector('#altura')
let peso = document.querySelector('#peso')

function calcIMC(){
    let valPeso = parseFloat(peso.value);
    let valAltura = parseFloat(altura.value);
    let formula = valPeso/(valAltura*valAltura).toFixed(2);

    if (formula < 18.5){
        resultado.textContent = formula;
        clas.textContent = "Abaixo do peso";
    }else if(formula > 18.5 && formula < 24.9){
        resultado.textContent = formula;
        clas.textContent = "Peso normal";
    }else if(formula > 25 && formula < 29.9){
        resultado.textContent = formula;
        clas.textContent = "Sobrepeso";
    }else if(formula > 30 && formula < 34.9){
        resultado.textContent = formula;
        clas.textContent = "Obesidade grau 1";
    }else if(formula > 35 && formula < 39.9){
        resultado.textContent = formula;
        clas.textContent = "Obesidade grau 2";
    }else{
        resultado.textContent = formula;
        clas.textContent = "Obesidade grau 3";
    };
}