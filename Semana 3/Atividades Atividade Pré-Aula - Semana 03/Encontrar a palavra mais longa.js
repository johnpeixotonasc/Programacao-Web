/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: John Peixoto / 1820228
DATA 17/03/2023
*/

function encontrarPalavraMaisLonga(str) {
    let palavras = str.split(" ");
    let palavraMaisLonga = "";
    for (let i = 0; i < palavras.length; i++) {
      if (palavras[i].length >
  