let nivel = document.querySelector('#nivel');
let aulas = document.querySelector('#aulas');
let txtSalario = document.querySelector('#txtSalario');

function calcSalario(){
    let valNivel = parseInt(nivel.value);
    let qtdAula = parseFloat(aulas.value);

    if (valNivel == 1){
        let valorHora = 12;
        let salario = valorHora * qtdAula * 4.5;
        txtSalario.textContent = salario.toFixed(2);
    } else if (valNivel == 2){
        let valorHora = 17;
        let salario = valorHora * qtdAula * 4.5;
        txtSalario.textContent = salario.toFixed(2);
    } else {
        let valorHora = 25;
        let salario = valorHora * qtdAula * 4.5;
        txtSalario.textContent = salario.toFixed(2);
    }


}