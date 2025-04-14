var button1 = document.getElementById('btn1')
var button2 = document.getElementById('btn2')

    button1.onclick = function () {
        document.getElementById('tb1').style.display = 'block';
        document.getElementById('tb2').style.display = 'none';

        button1.classList.add('ativo');
        button2.classList.remove('ativo');
    };
    
    button2.onclick = function () {
        document.getElementById('tb1').style.display = 'none';
        document.getElementById('tb2').style.display = 'block';

        button1.classList.remove('ativo');
        button2.classList.add('ativo');
    };