// Observe que foi usado Object.values junto com o every. 
// Como o Object.values retorna um array apenas com os valores do objeto, o every percorrerá esse array retornado. 
//Interessante essa combinação de funções, hein?! Experimente alguma combinação dessas na sua própria máquina agora!

const notes = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyNotes = (studentNotes) => {
    return Object.values(studentNotes).every((note) => note === 'Reprovado');
  };

  const verifyNotesReprove = (studentNotes) => {
    return Object.values(studentNotes).some((note) => note === 'Reprovado');
  };

  console.log(verifyNotes(notes));

  