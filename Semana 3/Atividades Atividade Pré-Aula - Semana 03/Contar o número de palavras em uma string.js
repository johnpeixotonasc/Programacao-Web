/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: John Peixoto / 1820228
DATA 17/03/2023
*/

function contarPalavras(str) {
    let palavras = str.split(" ");
    return palavras.length;
  }
  
  // Exemplo de uso:
  let string = "O rato roeu a roupa do rei de Roma";
  console.log(contarPalavras(string)); // 9
  