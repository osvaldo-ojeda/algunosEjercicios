//Chequeador
//Debes crear una función llamada check que reciba un arreglo y
//un elemento a chequear, esta deberá retornar true si el elemento se
//encuentra dentro del arreglo, sino, debe retornar false

//Ejemplo:
function check(array, check) {
    //   for (let i = 0; i < array.length; i++) {
    //     if (array[i] == check) {
    //       return true;
    //     }
    //   }
    //   return false;
  
    return array.find((x) => x === check) ? true : false;
  }
  // console.log(check([1, 2, "hola", "chau", 10], "hola"));
  //debe retornar true
  // console.log(check([1, 2, "hola", "chau", 10], "plataforma5"));
  //debe retornar false
  