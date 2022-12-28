let inserirResultado = document.getElementById('resultadoMegaSena');
let inputJogos = document.getElementById('qntdJogos');
let selecionarBody = document.getElementById('idBody');


function megaSena() {
    let lista = [];
    let jogos = [];

    let cont = 0;
    let teste = true;

    while (teste) {

    let numeroAleatorio = Math.floor(Math.random() * (60 - 1) + 1);

        let n = numeroAleatorio;
        if (! lista.includes(n)){

            lista.push(n);
            cont += 1;
        if (cont >= 7){
            teste = false;
            break;
        }
        }

    lista.sort((a,b) => {
        if (a > b) return 1;
        if (a < b) return -1;

        return 0;
    })

    jogos.push(lista.slice());
    lista.splice(0, lista.length);
}
return jogos
}




function sortear () {
    let totJogos = inputJogos.value;
    let listaJogos = []
    let jogosSorteados = [];
    
    
    
    let contador = 1;
    
    while (contador <= totJogos) {
        listaJogos = megaSena();
        jogosSorteados.push(listaJogos);
        inserirResultado.classList.remove('hide');
        let paragrafo = document.createElement('p');
        let texto = document.createTextNode(`${jogosSorteados}`);
        paragrafo.appendChild(texto);
        inserirResultado.appendChild(paragrafo);
        let quebraLinha = document.createElement('br');
        inserirResultado.appendChild(quebraLinha);
        listaJogos = []
        jogosSorteados = []
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



