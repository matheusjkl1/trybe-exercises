/*Utilizando for , descubra qual o menor valor contido no array e imprima-o;*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menor = 0;

for (let pos in numbers) {
    let result = numbers[pos]; 
  if (result < menor || menor == 0) {
    menor = result;
  }
}
console.log(menor); 