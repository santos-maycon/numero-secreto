let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio ();
//console.log(`Tenta esse aqui -> ${numeroSecreto}`);
let tentativas = 1;

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let elementosNaLista = listaDeNumerosSorteados.length;
    if (elementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
};

function limparCampo () {
chute = document.querySelector('input');
chute.value = '';
};

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';
// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = `Escolha um número entre 1 e ${numeroSecreto}`;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
};
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`); 
};

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    //console.log (chute == numeroSecreto);
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'ACERTOU!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}.`
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `O número secreto é menor do que ${chute}`);
        } else {
            exibirTextoNaTela('p', `o número secreto é maior do que ${chute}`);
        };
        tentativas ++;
        limparCampo();
    };
};

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
};