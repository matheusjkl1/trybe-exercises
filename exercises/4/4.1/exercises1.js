//Adição
function sum(a, b) {
    return a + b;
  }
//Subtração
function sub(c, d){
    return c - d;
}
//Multiplicação
  function mult(e, f){
      return e * f;
  }
//Divisão
  function div(g, h){
      return g / h;
  }
//Módulo
   function mod(i, j){
    return i % j;   
}
/*Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.*/

    function program(Y, Z){

        if (Y => Z){
            console.log("Y É Maior.");
        }
        else if (Y <= Z){
            console.log("Z É Maior.");
        }
        else {
            Z * 2
        };
    }
   
/*Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.*/
    
function program2(L, M, K){
       if (L > M && L > K){
           console.log(L +" Portanto L é maior");
       }
       else if (M > L && M > K){
           console.log(M +" Portanto M é maior");
       }
       else {
           console.log(K +" Portanto K é maior")
       };
    }
/*Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.*/

function program3(valor){

 if (valor > 0){

    console.log("positive")
 }

 else if (valor < 0) {
     console.log("negative")
 }

 else { console.log("zero")}
}