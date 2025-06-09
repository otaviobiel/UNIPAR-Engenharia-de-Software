let saldo = document.querySelector('#saldo');
let txtSaldo = document.querySelector('#txtSaldo');
let txtCredito = document.querySelector('#txtCredito');

function calcSaldo(){
    let valSaldo = parseFloat(saldo.value);

    if (valSaldo >= 0 && valSaldo <= 200){
        txtSaldo.textContent = valSaldo;
        txtCredito.textContent = (valSaldo*0);
    }else if (valSaldo >= 201 && valSaldo <= 400){
        txtSaldo.textContent = valSaldo;
        txtCredito.textContent = (valSaldo*0.2);
    }else if (valSaldo >= 401 && valSaldo <= 600){
        txtSaldo.textContent = valSaldo;
        txtCredito.textContent = (valSaldo*0.3);
    }else{
        txtSaldo.textContent = valSaldo;
        txtCredito.textContent = (valSaldovalSaldo*0.4);
    }
}