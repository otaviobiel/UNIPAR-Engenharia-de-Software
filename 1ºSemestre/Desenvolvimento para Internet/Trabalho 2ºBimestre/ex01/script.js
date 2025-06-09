let lado1 = document.querySelector('#lado1');
let lado2 = document.querySelector('#lado2');
let lado3 = document.querySelector('#lado3');
let mensagem = document.querySelector('#mensagem')
let triangulo = document.querySelector('#triangulo')

function calcTriangulo(){
    let valLado1 = parseFloat(lado1.value);
    let valLado2 = parseFloat(lado2.value);
    let valLado3 = parseFloat(lado3.value);

        if (valLado1 + valLado2 > valLado3 && valLado1 + valLado3 > valLado2 && valLado2 + valLado3 > valLado1){
        mensagem.textContent = "é um triangulo!";

        if (valLado1 === valLado2 && valLado2 === valLado3){
            triangulo.textContent = "Equilátero";

        }else if (valLado1 === valLado2 || valLado2 === valLado3 || valLado1 === valLado3){
            triangulo.textContent = "Isósceles";
        }else{
            triangulo.textContent = "Escaleno";
        }
    }else{
        mensagem.textContent = "NÃO é um triangulo!";
    }
}

