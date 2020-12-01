function descobreIndice(numeros) {
  let indiceMenorValor = 0;
  for (let indice in numeros) {
    if (numeros[indiceMenorValor] > numeros[indice]) {
      indiceMenorValor = indice;
    }
  }
  return indiceMenorValor;
}
console.log(descobreIndice([2, 4, 6, 7, 10, 0, -3]));
