const valorBase = 5;
let linha = [];
let asterisco = "*";
let quebraLinha = "\n";

for (let indice = 1; indice <= valorBase; indice += 1) {
  for (let segundoIndex = 1; segundoIndex <= valorBase; segundoIndex += 1) {
    linha += asterisco;
    if (segundoIndex == valorBase) linha += quebraLinha;
  }
}
console.log(linha);
