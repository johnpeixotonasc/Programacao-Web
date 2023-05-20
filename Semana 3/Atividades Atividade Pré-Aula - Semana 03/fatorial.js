/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: John Peixoto / 1820228
DATA 17/03/2023
*/

function fatorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * fatorial(num - 1);
    }
  }
  
  // Exemplo de uso:
  let numero = 5;
  console.log(fatorial(numero)); // 120
  