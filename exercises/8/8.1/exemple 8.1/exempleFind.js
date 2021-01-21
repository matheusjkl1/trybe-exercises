// Esse exemplo mostra duas formas de resolver o mesmo problema, que é retornar o primeiro número par do array.
// Primeiro observe a função verifyEven. Ela verifica se o número recebido é par. Se sim, seu retorno será true; caso contrário, seu retorno é false.
// Quando a passamos como callback, o find executará a função para cada um dos elementos do array e retornará o primeiro elemento quando o retorno da função for true.

const numbers = [19, 21, 40, 3, 45, 30, 15];

// const verifyEven = (number) => number % 2 === 0;

// const isEven = numbers.find(verifyEven);

// console.log(verifyEven(19)); // False
// console.log(verifyEven(30)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30