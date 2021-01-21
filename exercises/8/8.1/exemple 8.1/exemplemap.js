const persons = [
  { firstName: "Maria", lastName: "Ferreira" },
  { firstName: "João", lastName: "Silva" },
  { firstName: "Antonio", lastName: "Cabral" },
];

const fullNames = [];
for(let i = 0; i < persons.length; i += 1){
  fullNames.push(`${persons[i].firstName} ${persons[i].lastName}`);
}

console.log(fullNames,`Usando o For`);

const persons1 = [
  { firstName: "Maria", lastName: "Ferreira" },
  { firstName: "João", lastName: "Silva" },
  { firstName: "Antonio", lastName: "Cabral" },
];


const fullNames1 = persons1.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames1,`Usando o Map`); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

const selectMain = document.querySelector('.main')

