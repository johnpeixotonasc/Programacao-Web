/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: John Peixoto / 1820228
DATA 17/03/2023
*/

function calcularMedia(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
      soma += arr[i];
    }
    return soma / arr.length;
  }
  
  // Exemplo de uso:
  let array = [3, 7, 1, 9, 4];
  console.log(calcularMedia(array)); // 4.8
  