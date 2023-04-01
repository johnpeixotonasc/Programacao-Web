function fatorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * fatorial(num - 1);
    }
  }
  
  // Exemplo de uso:
  let numero = 5;
  console.log(fatorial(numero)); // 120
  