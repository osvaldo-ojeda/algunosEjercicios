// Crea una función llamada "min" que tome dos parámetros.
// Un arreglo de números desordenados y un string que va a valer "index" o "value".
// Si el string es "value", la función deberá devolver el número más chico del array.
// Si el string es "index", la función deberá devolver el índice (la posición) del número más chico en el array.

// 	Ejemplo:

// - min([5,8,2,3,4,9,1,18], "index") debe retornar 6 (porque es el índice del 1 que es el menor)
// - min([5,8,2,3,4,9,1,18], "value") debe retornar 1 (porque 1 es el menor número)

// metodo Slice(): nos hace una copia del arreglo anterior o al que nosotros le indiquemos
// Metodo Sort(): ordenar los arreglos que nosotros queramos ; ESte metodo modifica el arreglo ordenandolo, devlviendo el mismo arreglo ordenado , pero no uno nuevo. (function(a,b){return a-b})
//Metodo indexOf(): es devolernos el indice de un elemento

function min(array, palabra) {
  let arrayOrdenado = array.slice().sort(function (a, b) {
    return a - b;
  });

  let menorNumero = arrayOrdenado[0];

  if (palabra === "value") {
    return menorNumero;
  } else {
    //index: posicion del menor numero

    let menorIndice = array.indexOf(menorNumero);
    return menorIndice;
  }
}

min([5, 8, 2, 3, 4, 9, 1, 18], "index");
//La copia se realiza con slice.Luego esa copia se ordena con sort. La idea es obtener el elelemento de menor valor. No alteramos el arreglo original para poder tomar el indice de ese elemento si se pide string

// -----------
function min(array, string) {
    let minimo = array[0];
    //recorrer el largo de nuestro arreglo
    for (let i = 1; i < array.length; i++) {
      if (array[i] < minimo) {
        minimo = array[i];
      }
    }
  
    if (string == "value") {
      return minimo;
    }
  
    if (string == "index") {
      return array.indexOf(minimo);
    }
  }
  min(
    [5, 8, 2, 3, 4, 9, 1, 18],
    "index"
  )
//   -----------------------

//SPREAD OPERATOR: es un operador que simplifica la suma o igulación de valores en una estructura de datos. Cvertir un array o un objeto en el conjunto de valores que puede contener.

//Su simbolo son los 3 puntitos: ...

//ejemplo con metodo Math.max:

let arr = [22, 3, 68, 0];
let max = Math.max(...arr);
console.log(max);

//Podemos usar este operador  para pasar elementos de un array como parametros de una funcion!

let min = (arr, string) => {
  let min = Math.min(...arr);
  if (string == "value") {
    return min;
  }
  if (string == "index") {
    return arr.indexOf(min);
  }
};
min([5, 8, 2, 3, 4, 9, 1, 18], "index");

