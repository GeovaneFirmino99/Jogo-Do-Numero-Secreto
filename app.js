let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag); // Seleciona o elemento com a tag
    campo.innerHTML = texto; // Define o texto dentro do elemento
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

console.log(gerarNumeroAleatorio());

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do Número Secreto!!' );
    exibirTextoNaTela('p', 'Escolha um Número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;    
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns!!!!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas =  `Você descobriu o número secreto!! Com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if( chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosLista == numeroLimite) {
       listaDeNumerosSorteados = [];
   }

   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
       return gerarNumeroAleatorio(); 
   } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
   }
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo()
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}













//let titulo = document.querySelector('h1');
//titulo.innerHTML ='Jogo do Número Secreto!!';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML ='Escolha um Número entre 1 e 10';