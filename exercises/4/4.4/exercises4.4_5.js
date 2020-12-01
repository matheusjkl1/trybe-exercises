function arrayNomes(nomes){
    let maiorNome = nomes[0];
    for(let indice in nomes){
        if (maiorNome.length < nomes[indice].length) {
            maiorNome = nomes[indice];
        }
    }
    return maiorNome;
}
function maiorPalavra(palavras) {
    let maiorPalavra = palavras[0];
    for (let indice in palavras) {
      if (maiorPalavra.length < palavras[indice].length) {
        maiorPalavra = palavras[indice];
      }
    }
    return maiorPalavra;
  }
  
  console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
  console.log(arrayNomes(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));