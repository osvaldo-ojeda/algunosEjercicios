// Debes crear una función llamada intervalo que recibira tres parámetros:
//un número de comienzo, uno de final, y un intervalo.
//Esta deberá retornar un arreglo con los numeros que esten entre el
//de comienzo y el de final, pero con el intervalo pasado por parametro.

// Tu función acá:

function intervalo(comienzo, final, sumador) {
  let array = [];
  for (let i = comienzo; i <= final; i += sumador) {
    array.push(i);
  }
  return array;
}

//Tests:

// console.log(intervalo(1,10,3)) //debe retornar [1, 4, 7, 10]
// console.log(intervalo(10, 100, 20)) //debe retornar [10, 30, 50, 70, 90]

//
