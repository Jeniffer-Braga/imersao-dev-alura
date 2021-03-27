var numeroSecreto = parseInt(Math.random() * 10); 
var tentativas = 3; 

while (tentativas > 0) {
  var chute = parseInt(prompt("Digite um número entre 0 e 10:"));

  if (numeroSecreto == chute) {
    alert("Acertou! O número secreto é " + numeroSecreto + ".");
    break;
  } else if (chute > numeroSecreto) {
    alert("O número secreto é menor que " + chute + ".");
    tentativas--; 
  } else if (chute < numeroSecreto) {
    alert("O número secreto é maior que " + chute + ".");
    tentativas--; 
  } 
} 

if (chute != numeroSecreto) {
  alert("Suas tentativas acabaram! O número secreto era " + numeroSecreto + ".");
}







