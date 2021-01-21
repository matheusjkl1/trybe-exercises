const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => {
  return names.some((name) => name[1] === letter);
};

console.log(verifyFirstLetter('M', listNames)); // true
console.log(verifyFirstLetter('a', listNames)); // false