const valorBase = 5;
let linha = [];
let asterisco = "*";
let quebraLinha = "\n";
let espaco = " ";
let contadorLinha = 0;
let middleFloor = Math.floor(valorBase / 2);
let middleCeil = Math.ceil(valorBase / 2);

if (valorBase % 2 != 0) {
  for (let indice = 0; indice < middleCeil; indice += 1) {
    for (let segundoIndex = valorBase; segundoIndex >= 0; segundoIndex -= 1) {
      if (
        segundoIndex == middleFloor ||
        (segundoIndex <= middleFloor + contadorLinha &&
            segundoIndex >= middleFloor - contadorLinha)
      )
      linha += asterisco;
      else linha += espaco;
      if (segundoIndex == 0) {
        contadorLinha += 1;
        linha += quebraLinha;
      }
    }
  }
} else {
  middleCeil += 1;
  for (let indice = 0; indice < middleFloor; indice += 1) {
    for (let segundoIndex = valorBase; segundoIndex >= 0; segundoIndex -= 1) {
      if (
        segundoIndex == middleFloor ||
        segundoIndex == middleCeil ||
        (segundoIndex <= middleCeil + contadorLinha &&
            segundoIndex >= middleFloor - contadorLinha)
      )
        linha += asterisco;
      else linha += espaco;
      if (segundoIndex == 0) {
        contadorLinha += 1;
        linha += quebraLinha;
      }
    }
  }
}

console.log(linha);
