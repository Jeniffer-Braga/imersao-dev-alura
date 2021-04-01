var carta0 = {
  nome: "Bulbasaur",
  imagem: "https://i.pinimg.com/originals/c2/5e/bf/c25ebf4978c939d47b12fcb058948b8d.jpg",
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
   imagem: "https://i.pinimg.com/564x/67/2c/9f/672c9f01467e4c6673aedb2a1e9cb1a2.jpg",
   atributos: {
     attack: 60,
     defense: 80,
     speed: 60
   }
}
var carta3 = {
   nome: "Butterfree",
   imagem: "https://64.media.tumblr.com/2415b421e24096c6342aa119ab83d165/tumblr_pz2ow6cCdw1ro1rdco1_400.png",
   atributos: {
     attack: 60,
     defense: 80,
     speed: 100
   }
}
var carta4 = {
  nome: "Beedrill",
  imagem: "https://i.pinimg.com/originals/ce/9f/3b/ce9f3b21cf1c95347794b93be3405cf7.jpg",
  atributos: {
    attack: 120,
    defense: 60,
    speed: 100
  }
}
var carta5 = {
  nome: "Pidgeotto",
  imagem: "https://d.furaffinity.net/art/whelpsy/1521829249/1521829249.whelpsy_mega_pidgeot_sml.png",
  atributos: {
    attack: 80,
    defense: 80,
    speed: 100
  }
}
var carta6 = {
  nome: "Arcanine",
  imagem: "https://i.pinimg.com/736x/1d/97/2e/1d972ed2cf20d1a41f9635b95dedd14d.jpg",
  atributos: {
    attack: 140,
    defense: 100,
    speed: 120 
  }
}
var carta7 = {
  nome: "Rapidash",
  imagem: "https://i.pinimg.com/originals/19/4c/70/194c7077e59c4a8dd0b3a1d8cfa23b4e.png",
  atributos: {
    attack: 120,
    defense: 100,
    speed: 140
  }
}
var carta8 = {
  nome: "Pikachu",
  imagem: "https://i.pinimg.com/originals/f4/a7/74/f4a774efa7ef430a085171d23921ec63.jpg",
  atributos: {
    attack: 80,
    defense: 60,
    speed: 120
  }
}
var carta9 = {
  nome: "Golduck",
  imagem: "https://i.pinimg.com/originals/ea/c5/4d/eac54d8d330f0ee0400551308e2528d0.png",
  atributos: {
    attack: 100,
    defense: 100,
    speed: 100
  }
}
var carta10 = {
  nome: "Alakazam",
  imagem: "https://i.etsystatic.com/12512228/r/il/9b0247/1084058413/il_570xN.1084058413_1msn.jpg",
  atributos: {
    attack: 60,
    defense: 60,
    speed: 160
  }
}
var carta11 = {
  nome: "Gengar",
  imagem: "https://cdna.artstation.com/p/assets/images/images/028/363/658/large/matheus-carrera-gengar4.jpg?1594246928",
  atributos: {
    attack: 80,
    defense: 80,
    speed: 140
  }
}
var carta12 = {
  nome: "Onix",
  imagem: "https://i.pinimg.com/originals/d0/b9/1c/d0b91cccc03d9599faad1ad29bfb2808.jpg",
  atributos: {
    attack: 60,
    defense: 200,
    speed: 100
  }
}
var carta13 = {
  nome: "Mewtwo",
  imagem: "https://i.pinimg.com/originals/10/30/ab/1030abeb7191e8db605990885544cea0.jpg",
  atributos: {
    attack: 140,
    defense: 120,
    speed: 160
  }
}

var cartas = [carta0, carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11, carta12, carta13];

var cartaMaquina; 
var cartaJogador;

var pontosMaquina = 0;
var pontosJogador = 0;

atualizarQuantidadeCartas();

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];
  cartas.splice(numeroCartaMaquina, 1);

  var numeroCartaJogador = parseInt(Math.random() * cartas.length);
  cartaJogador = cartas[numeroCartaJogador];
  cartas.splice(numeroCartaJogador, 1);

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
    htmlResultado = "<p class='resultado-final'>Jogador venceu!</p>";
    pontosJogador++;
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    htmlResultado = "<p class='resultado-final'>Máquina venceu!</p>";
    pontosMaquina++;
  } else {
    htmlResultado = "<p class='resultado-final'>Empate!</p>";
  }

  divResultado.innerHTML = htmlResultado;

  document.getElementById('btnJogar').disabled = true;
  document.getElementById('btnProximaRodada').disabled = false;

  exibirCartaMaquina(); 
  atualizarPlacar();
  atualizarQuantidadeCartas();
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

function atualizarPlacar() {
  var divPlacar = document.getElementById('placar');  
  var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina";
  divPlacar.innerHTML = html;
}

function atualizarQuantidadeCartas() {
  var divQuantidadeCartas = document.getElementById('quantidade-cartas');
  var html = "Quantidade de cartas no jogo: " + cartas.length;
  divQuantidadeCartas.innerHTML = html; 
}

function proximaRodada() {
  var divCartas = document.getElementById('cartas');
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`;
  var divResultado = document.getElementById('resultado');
  divResultado.innerHTML = "";
 
  document.getElementById('btnSortear').disabled = false;
  document.getElementById('btnProximaRodada').disabled = true; 

  if (cartas.length == 0) {
    alert("Acabaram as cartas. Fim de jogo!");

    if (pontosJogador > pontosMaquina) {
      htmlResultado = "<p class='resultado-final'>Jogador é o campeão!</p>";
    } else if (pontosMaquina > pontosJogador) {
      htmlResultado = "<p class='resultado-final'>Máquina é a campeã!</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>Jogador e máquina empataram!</p>";
    }
    
    divCartas.innerHTML = "";
    divResultado.innerHTML = htmlResultado;
    document.getElementById('btnSortear').disabled = true;
  } 
}