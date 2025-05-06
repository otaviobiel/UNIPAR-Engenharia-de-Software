let h1_txt = document.querySelector("#h1_txt");
let input_txt = document.querySelector("#input_txt");
let troca_txt = document.getElementById(troca_txt);

function trocatexto(){
    let textoDigitado = input_txt.value;
    h1_txt.textContent = textoDigitado;
}

function botao(){
    trocatexto();    
}