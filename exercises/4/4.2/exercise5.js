/*Utilizando for , descubra qual o maior valor contido no array e imprima-o;*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for (let pos in numbers) {
  let sum = numbers[pos]; 
if (sum > soma) {
    soma = sum;
}
}
console.log(soma);