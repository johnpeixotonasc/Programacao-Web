/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: John Peixoto / 1820228
DATA 17/03/2023
*/

function inverterString(str) {
    let resultado = "";
    for (let i = str.length - 1; i >= 0; i--) {
      resultado += str[i];
    }
    return resultado;
  }
  
  // Exemplo de uso:
  let string = "hello world";
  console.log(inverterString(string)); // "dlrow olleh"
  