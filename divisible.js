//Divisibles
//Debes crear una función llamada modulo que reciba dos parámetros:
//un arreglo de números y un divisor. Esta deberá retornar un arreglo con
//los números que sean divisibles por el segundo parámetro.

// function modulo(array, div) {
//     let newArray = []
//     for (let i = 0; i < array.length; i++) {
//         if ((array[i] % div) === 0) {
//             newArray.push(array[i])
//         }
//     }
//     return newArray
// }
function modulo(array, divisor) {
    return array.filter((num) => num % divisor === 0);
  }
  
  // console.log(modulo([1,2,3,4,5,6], 2)) //debe retornar  [2, 4, 6]
  // console.log(modulo([1,2,3,4,5,6], 3)) //debe retornar  [3, 6]