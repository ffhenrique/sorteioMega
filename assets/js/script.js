let inserirResultado = document.getElementById('resultadoMegaSena');
let inputJogos = document.getElementById('qntdJogos');
let selecionarBody = document.getElementById('idBody');

function getRandomInt (min, max, numbersToExclude) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const random = Math.floor(Math.random() * (max - min) + min);
    return numbersToExclude.includes(random) ? getRandomInt(min, max, numbersToExclude) : random;
}

function megaSena (qt, numbers=[]) {
    numbers.push(getRandomInt(1, 60, numbers));
    return qt - 1 > 0 ? megaSena(qt - 1, numbers) : numbers
}

function sortear () {
    let totJogos = inputJogos.value;
    let listaJogos = []
    
    
    
    let contador = 1;
    
    while (contador <= totJogos) {
        listaJogos = megaSena(6);
        inserirResultado.classList.remove('hide');
        let paragrafo = document.createElement('p');
        let texto = document.createTextNode(`${listaJogos}`);
        paragrafo.appendChild(texto);
        inserirResultado.appendChild(paragrafo);
        let quebraLinha = document.createElement('br');
        inserirResultado.appendChild(quebraLinha);
        listaJogos = []
        contador += 1;
        
    }
}


function btnJogos (){
    sortear();
    alterarTamanhoBody();
}

function alterarTamanhoBody () {
    selecionarBody.classList.add("ajustarBody");
}


