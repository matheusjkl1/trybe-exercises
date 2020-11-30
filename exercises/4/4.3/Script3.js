const valorBase = 5;
let linha = [];
let asterisco = "*";
let quebraLinha = "\n";
let espaco = " ";

for (let index = 0; index < valorBase; index += 1) {
  for (let segundoIndex = valorBase; segundoIndex > 0; segundoIndex -= 1) {
    if (segundoIndex > index + 1) linha += espaco;
    else {
      linha += asterisco;
    }
    if (segundoIndex == 1) linha += quebraLinha;
  }
}

console.log(linha);
