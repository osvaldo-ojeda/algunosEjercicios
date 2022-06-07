
function factoreo(num) {
    let numero = num;
    let factor = 2;
    let factores = [1];
    while (numero >= 2) {
      if (numero % factor === 0) {
        factores.push(factor);
        numero /= factor;
      } else {
        factor++;
      }
    }
    return factores;
  }