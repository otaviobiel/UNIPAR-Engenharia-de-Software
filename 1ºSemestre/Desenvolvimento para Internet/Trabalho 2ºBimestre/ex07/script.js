let preco = document.querySelector('#preco');
let pagamento = document.querySelector('#pagamento');
let txtValor = document.querySelector('#txtValor');

function vendas(){
    let valPreco = parseFloat(preco.value);
    let valPag = parseFloat(pagamento.value);

    if (valPag == 1){
        let calc = valPreco-(valPreco*0.10);
        txtValor.textContent = calc;
    } else if (valPag == 2){
        let calc = valPreco-(valPreco*0.15);
        txtValor.textContent = calc;
    } else if (valPag == 3){
        let calc = valPreco/2
        txtValor.textContent = valPreco + " - Em 2x de: R$" + calc;
    } else{
        let juros = valPreco*1.10;
        let calc = juros/2;
        txtValor.textContent = juros + " - Em 2x de: R$" + calc + " e 10% de juros";
    }
}