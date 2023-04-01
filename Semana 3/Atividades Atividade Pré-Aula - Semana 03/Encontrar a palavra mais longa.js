function encontrarPalavraMaisLonga(str) {
    let palavras = str.split(" ");
    let palavraMaisLonga = "";
    for (let i = 0; i < palavras.length; i++) {
      if (palavras[i].length >
  