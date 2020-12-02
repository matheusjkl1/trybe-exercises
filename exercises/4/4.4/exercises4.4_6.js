function arrayInt(inteiros) {
  let maisRepetido = 0;
  let contador = 0;
  let indiceDoRepetido = 0;
  for (let indice in inteiros) {
    let verficiaInteiro = inteiros[indice];
    for (let indice2 in inteiros) {
      if (verficiaInteiro === inteiros[indice2]) {
        contador++;
      }
    }
    if (contador > maisRepetido) {
      maisRepetido = contador;
      indiceDoRepetido = indice;
    }
    contador = 0;
  }
  return inteiros[indiceDoRepetido];
}
console.log(arrayInt([3, 3, 3, 5, 8, 3, 3]))