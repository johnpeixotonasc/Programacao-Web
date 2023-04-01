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
  