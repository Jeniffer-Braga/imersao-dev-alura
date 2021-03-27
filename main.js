var operacao = prompt("Escolha a operação: 1 - Soma, 2 - Subtração, 3 - Multiplicação, 4 - Divisão");
var operacaoString = "";
var primeiroValor = parseInt(prompt("Digite o primeiro valor:"));
var segundoValor = parseInt(prompt("Digite o segundo valor:"));

if (operacao == 1) {
  var resultado = primeiroValor + segundoValor;
  operacaoString = " + ";
} else if (operacao == 2) {
  var resultado = primeiroValor - segundoValor;
  operacaoString = " - ";
} else if (operacao == 3) {
  var resultado = primeiroValor * segundoValor;
  operacaoString = " x ";
} else if (operacao == 4) {
  var resultado = primeiroValor / segundoValor;
  operacaoString = " / ";
} 

console.log(primeiroValor + operacaoString + segundoValor + " = " + resultado);
document.write("<h2>" + primeiroValor + operacaoString + segundoValor + " = " + resultado + "</h2>");  







