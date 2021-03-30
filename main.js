var jogador1 = {
  nome: prompt("Qual o nome do primeiro jogador?"),
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0 
}
var jogador2 = {
  nome: prompt("Qual o nome do segundo jogador?"),
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}
var jogadores = [jogador1, jogador2];

jogador1.pontos = calculaPontos(jogador1);
jogador2.pontos = calculaPontos(jogador2);

function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + (jogador.empates);
  return pontos; 
}

function exibirJogadores(jogadores) {
  var html = "";
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].pontos = calculaPontos(jogadores[i]);
    
    html += "<tr><td>" + jogadores[i].nome + "</td>";
    html += "<td>" + jogadores[i].vitorias + "</td>";
    html += "<td>" + jogadores[i].empates + "</td>";
    html += "<td>" + jogadores[i].derrotas + "</td>";
    html += "<td>" + jogadores[i].pontos + "</td>";
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = html;
}
exibirJogadores(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  exibirJogadores(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  exibirJogadores(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibirJogadores(jogadores);
}