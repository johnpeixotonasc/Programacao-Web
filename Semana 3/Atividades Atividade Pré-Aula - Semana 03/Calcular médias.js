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
  