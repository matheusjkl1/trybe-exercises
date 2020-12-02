//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
//Valor de teste: N = 5.
//Valor esperado no retorno da função: 1+2+3+4+5 = 15.

function numeroInteiro(numeros) {
  let total = 0;
  for (let indice = 1; indice <= numeros; indice++) {
    total = indice + total;
  }
  return total
}

console.log(numeroInteiro(5));
