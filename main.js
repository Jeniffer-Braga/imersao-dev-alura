var carta0 = {
  nome: "Bulbasaur",
  imagem: "http://40.media.tumblr.com/0c18bc432a4c203b21eed2fed4444c6c/tumblr_nv093iPMzt1qf350ao3_1280.jpg",
  atributos: {
    attack: 60,
    defense: 60,
    speed: 60
  }
}
var carta1 = {
  nome: "Charmander",
  imagem: "https://i.pinimg.com/originals/b2/f2/d2/b2f2d2a9d9680e5bb02d605dec67b505.jpg",
  atributos: {
    attack: 80,
    defense: 60,
    speed: 80
  }
}
var carta2 = {
   nome: "Squirtle",
   imagem: "https://pm1.narvii.com/6538/43a85555655fd60fec321c385b7b2f59048f459d_hq.jpg",
   atributos: {
     attack: 60,
     defense: 80,
     speed: 60
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

document.getElementById('btnSortear').disabled = true;
document.getElementById('btnJogar').disabled = false;

exibirCartaJogador();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById('carta-jogador');  
var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`;
var nome = `<p class="carta-subtitle">${cartaJogador.nome}<p>`;
var opcoesTexto = "";

for (var atributo in cartaJogador.atributos) { 
  opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaJogador.atributos[atributo] + "<br>";  
}

var html = "<div id='opcoes' class='carta-status'>"
divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>';
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
var divResultado = document.getElementById('resultado');
var atributoSelecionado = pegarAtributoSelecionado();

if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
  htmlResultado = "<p class='resultado-final'>Você venceu!</p>";
} else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
  htmlResultado = "<p class='resultado-final'>Você perdeu!</p>";
} else {
  htmlResultado = "<p class='resultado-final'>Empate!</p>";
}

divResultado.innerHTML = htmlResultado;
exibirCartaMaquina(); 
}

function exibirCartaMaquina() {
var divCartaMaquina = document.getElementById('carta-maquina');  
var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`;
var nome = `<p class="carta-subtitle">${cartaMaquina.nome}<p>`;
var opcoesTexto = "";

for (var atributo in cartaMaquina.atributos) { 
  opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaMaquina.atributos[atributo] + "</p>";   
}

var html = "<div id='opcoes' class='carta-status --spacing'>"
divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>';
}