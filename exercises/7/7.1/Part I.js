function testingScope(escopo) { 
    if (escopo === true) { 
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

  testingScope(true);

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortOddsAndEvens = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;
  
    return oddsAndEvens;
  }
  console.log(oddsAndEvens);

  const oddsAndEvensTwo = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvensTwo.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);

//Crie uma função que receba um número e retorne seu fatorial.

const factorial = number => number > 1 ? number * factorial(number - 1) : 1

console.log(factorial(5))

const longestWord = text => {
    let wordArray = text.split(' ')
    let maxLength = 0
    let result = ''

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length
            result = word
        }
    }

    return result
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))

//Longestword com sort em uma linha.

const longestWord2 = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]

console.log(longestWord2("Antonio foi no banheiro e não sabemos o que aconteceuu"))
