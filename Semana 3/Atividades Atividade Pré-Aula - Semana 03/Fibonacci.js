function fibonacci(num) {
    let resultado = [];
    for (let i = 0; i < num; i++) {
      if (i < 2) {
        resultado.push(i);
      } else {
        resultado.push(resultado[i - 1] + resultado[i - 2]);
      }
    }
    return resultado;
  }
  
  // Exemplo de uso:
  let numero = 8;
  console.log(fibonacci(numero)); // [0, 1, 1, 2, 3, 5, 8, 13]
  