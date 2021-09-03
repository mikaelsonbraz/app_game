var altura = 0
var largura = 0
var vidas = 3
var tempo = 15

//recuperando o nivel do jogo selecionado no index.html
var nivel = window.location.search.replace('?', '')
var criaMosquitoTempo = 2000

switch (nivel) {
    case 'facil':
        //logica 2000ms, 15s de jogo
        break;
    
    case 'normal':
        //logica 1500ms, 25s de jogo
        criaMosquitoTempo = 1500;
        tempo = 25;
        break;

    case 'dificil':
        //logica 1200ms, 35s de jogo
        criaMosquitoTempo = 1200;
        tempo = 35;
        break;

    case 'muito-dificil':
        //logica 1000ms, 45s de jogo
        criaMosquitoTempo = 1000;
        tempo = 45;
        break;

    case 'hollow':
        //logica 500ms, 60s de jogo
        criaMosquitoTempo = 500;
        tempo = 50;
        break;
}

function ajustaTela() {    
    altura = window.innerHeight
    largura = window.innerWidth
}

ajustaTela()

var cronometro = setInterval(function () {
    tempo--
    if (tempo < 0) {
        window.location.href = 'winner.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)


function posicaoRandomica() {
    //remover o mosquito anterior, caso exista
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if (vidas < 1) {
            window.location.href = 'app_gameover.html'
        } else {
            document.getElementById('vida' + vidas).src = "src/img/coracao_vazio.png"
            vidas--
        }
    }


    var posicaoX = Math.floor(Math.random() * largura) - 120
    var posicaoY = Math.floor(Math.random() * altura) - 120

    //Operadores ternários para tratar caso as cordenadas da img forem menos que zero fazendo-a sair da tela
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY


    //criar o elemento HTML usando o DOM
    var mosquito = document.createElement('img')
    mosquito.src = 'src/img/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()

    //randomizando a posição do mosquito na tela
    mosquito.style.position = 'absolute'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.id = 'mosquito'

    //adicionando o evento onclick ao elemento mosquito
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)

}

//função para randomizar o tamanho do mosquito entre três
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0: return 'mosquito1'
        case 1: return 'mosquito2'
        case 2: return 'mosquito3'
    }
}

//função para randomizar para que lado o mosquito estará virado
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0: return 'esquerda'
        case 1: return 'direita'
    }
}
