let item = document.querySelector('#item');
let qtd = document.querySelector('#qtd');
let txtValor = document.querySelector('#txtValor');



function lanchonete() {
    let valItem = parseFloat(item.value);
    let valqtd = parseFloat(qtd.value);

    if (valItem == 1) {
        let total = valqtd * 11.00;
        txtValor.textContent = total.toFixed(2);
    } else if (valItem == 2) {
        let total = valqtd * 8.50;
        txtValor.textContent = total.toFixed(2);
    } else if (valItem == 3) {
        let total = valqtd * 8.00;
        txtValor.textContent = total.toFixed(2);
    } else if (valItem == 4) {
        let total = valqtd * 9.00;
        txtValor.textContent = total.toFixed(2);
    } else if (valItem == 5) {
        let total = valqtd * 10.00;
        txtValor.textContent = total.toFixed(2);
    } else {
        let total = valqtd * 4.50;
        txtValor.textContent = total.toFixed(2);
    }
}