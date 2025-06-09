let valor = document.querySelector("#valor")
let ano = document.querySelector("#ano")
let taxa = document.querySelector("#taxa")
let imposto = document.querySelector("#imposto")

function calcTaxa(){
    let valValor = parseFloat(valor.value);
    let valAno = parseFloat(ano.value);

    if (valAno < 1990){
        total = valValor*0.01
        taxa.textContent = "1%"
        imposto.textContent = total
    }else{
        total = valValor*0.015
        taxa.textContent = "1.5%"
        imposto.textContent = total
    }
}