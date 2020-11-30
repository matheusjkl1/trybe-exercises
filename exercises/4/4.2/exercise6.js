/*Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impar = 0;

for (let pos in numbers) {
  if (numbers[pos] % 2 != 0) {
    impar += 1;
  }else if (impar == 0){
    console.log("nenhum valor ímpar encontrado");
  }
}
console.log(impar);