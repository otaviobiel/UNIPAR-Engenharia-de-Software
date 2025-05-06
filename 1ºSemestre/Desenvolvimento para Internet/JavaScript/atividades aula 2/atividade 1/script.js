let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let result = document.querySelector("#result");

function soma(){
    let valnum1 = parseFloat(num1.value);
    let valnum2 = parseFloat(num2.value);
    let soma = valnum1+valnum2;

    result.textContent = soma;
}

function subtrair(){
    let valnum1 = parseFloat(num1.value);
    let valnum2 = parseFloat(num2.value);
    let subtrair = valnum1-valnum2;

    result.textContent = subtrair;
}

function dividir(){
    let valnum1 = parseFloat(num1.value);
    let valnum2 = parseFloat(num2.value);
    let dividir = valnum1/valnum2;

    result.textContent = dividir;
}

function multiplicar(){
    let valnum1 = parseFloat(num1.value);
    let valnum2 = parseFloat(num2.value);
    let multiplicar = valnum1*valnum2;

    result.textContent = multiplicar;
}