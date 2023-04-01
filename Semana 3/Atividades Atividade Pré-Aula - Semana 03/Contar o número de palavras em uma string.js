function contarPalavras(str) {
    let palavras = str.split(" ");
    return palavras.length;
  }
  
  // Exemplo de uso:
  let string = "O rato roeu a roupa do rei de Roma";
  console.log(contarPalavras(string)); // 9
  