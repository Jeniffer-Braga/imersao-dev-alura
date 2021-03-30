var carta0 = {
  nome: "Seiya de pegaso",
  atributos: {
    ataque: 80,
    defesa: 60,
    magia: 90
  }
}
var carta1 = {
  nome: "Bulbasaur",
  atributos: {
    ataque: 70,
    defesa: 65,
    magia: 85
  }
}
var carta2 = {
  nome: "Lorde Darth Vader",
  atributos: {
    ataque: 88,
    defesa: 62,
    magia: 90
  }
}
var cartas = [carta0, carta1, carta2];

var cartaMaquina; 
var cartaJogador;

function sortearCarta() {
var numeroCartaMaquina = parseInt(Math.random() * 3);
cartaMaquina = cartas[numeroCartaMaquina];

var numeroCartaJogador = parseInt(Math.random() * 3);
while (numeroCartaJogador == numeroCartaMaquina){
  numeroCartaJogador = parseInt(Math.random() * 3);
}
cartaJogador = cartas[numeroCartaJogador];
console.log(cartaJogador);

document.getElementById('btnSortear').disabled = true;
document.getElementById('btnJogar').disabled = false;

exibirOpcoes();
}

function exibirOpcoes() {
var opcoes = document.getElementById('opcoes');
var valorOpcoes = "";
for (var atributo in cartaJogador.atributos) { 
  valorOpcoes += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;  
}
opcoes.innerHTML = valorOpcoes;
}

function pegarAtributoSelecionado() {
var radioAtributo = document.getElementsByName('atributo');
for (var i = 0; i < radioAtributo.length; i++) {
  if (radioAtributo[i].checked) {
    return radioAtributo[i].value;
  }
}
}

function jogar() {
var atributoSelecionado = pegarAtributoSelecionado();
if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
  alert("Você venceu! Sua carta: " + cartaJogador.atributos[atributoSelecionado] + " Carta da máquina: " + cartaMaquina.atributos[atributoSelecionado] );
} else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
  alert("Você perdeu! Sua carta: " + cartaJogador.atributos[atributoSelecionado] + " Carta da máquina: " + cartaMaquina.atributos[atributoSelecionado]);
} else {
  alert("Empate! Sua carta: " + cartaJogador.atributos[atributoSelecionado] + " Carta da máquina: " + cartaMaquina.atributos[atributoSelecionado])
}
console.log(cartaMaquina);
}