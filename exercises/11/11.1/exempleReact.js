const nome = 'Jorge Maravilha';
const element = <h1>Hello, {nome}</h1>;

function nomeCompleto (nome, sobrenome) {
    return `${nome} ${sobrenome}`;
  }
  
  const element = <h1>Hello, {nomeCompleto("Jorge", "Maravilha")}</h1>;