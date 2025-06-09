let salario = document.querySelector("#salario");
let cargo = document.querySelector("#cargo");
let novoSalario = document.querySelector("#novoSalario");
let aumento = document.querySelector("#aumento");
let salarioAntigo = document.querySelector("#salarioAntigo");
let diferenca = document.querySelector("#diferenca");

function calcAumento(){
    let valSalario = parseFloat(salario.value);
    let strCargo = cargo.value;

    if (strCargo === "Gerente"){
        let calculo = (valSalario*0.1);

        novoSalario.textContent = calculo+valSalario;
        salarioAntigo.textContent = valSalario;
        diferenca.textContent = calculo;
        aumento.textContent = "10%";
    }else if(strCargo === "Engenheiro"){
        let calculo = (valSalario*0.2);

        novoSalario.textContent = calculo+valSalario;
        salarioAntigo.textContent = valSalario;
        diferenca.textContent = calculo;
        aumento.textContent = "20%"
    }else if(strCargo === "Técnico"){
        let calculo = (valSalario*0.3);

        novoSalario.textContent = calculo+valSalario;
        salarioAntigo.textContent = valSalario;
        diferenca.textContent = calculo;
        aumento.textContent = "30%"
    }else{
        let calculo = (valSalario*0.4);

        novoSalario.textContent = calculo+valSalario;
        salarioAntigo.textContent = valSalario;
        diferenca.textContent = calculo;
        aumento.textContent = "40%"
    }
}