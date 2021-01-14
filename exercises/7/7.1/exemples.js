const myName = "Isabella"
console.log('Hello' + ' ' + myName + '!');

console.log(`Welcome ${myName}!`);

// Com o template literals
console.log(`Pipipi
Popopo;
Pepepe;`
)

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n')

const printName = function () {
  const myName = "Matheus";
  return myName;
}

const printName2 = () => "Raquel";

console.log(printName2());
console.log(printName());