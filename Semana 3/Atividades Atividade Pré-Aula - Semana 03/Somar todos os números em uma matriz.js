/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: John Peixoto / 1820228
DATA 17/03/2023
*/

let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let soma = 0;

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    soma += matriz[i][j];
  }
}

console.log(`A soma de todos os números na matriz é: ${soma}`);
