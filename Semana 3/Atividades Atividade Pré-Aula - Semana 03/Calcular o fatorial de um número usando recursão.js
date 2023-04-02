/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: John Peixoto / 1820228
DATA 17/03/2023
*/

function calcularFatorial(numero) {
    if (numero === 0) {
      return 1;
    } else {
      return numero * calcularFatorial(numero - 1);
    }
  }
  
  // Exemplo de uso
  const numero = 5;
  const resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);
  