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
//////////////////////////////////////////////////////
//Duas formas de resolver o exercício
/*function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero++;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); //2*/
