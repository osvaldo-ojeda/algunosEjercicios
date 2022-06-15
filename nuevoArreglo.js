/* Nuevo Arreglo

Debés crear una función llamada `nuevoArreglo`
que reciba un número como parámetro
y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.

Ejemplo: 

nuevoArreglo(5) debe retornar [1,2,3,4,5]
nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]
 */

/* function nuevoArreglo(number) {
  let newArray = [];

  for (let i = 0; i < number; i++) {
    newArray[i] = i + 1;
  }
  return newArray;
} */

// push: agregarme o pushiarme los numeros que estan en mi indice a la variable que yo le estoy indicando

/* function nuevoArreglo(number) {
  let newArray = [];

  for (let i = 0; i <= number - 1; i++) {
    newArray.push(i + 1);
  }

  return newArray;
} */

function nuevoArreglo(number) {
    let newArray = [];
  
    for (let i = 1; i <= number; i++) {
      newArray.push(i);
    }
  
    return newArray;
  }
  
  nuevoArreglo(10);
  /* Nuevo Arreglo
  
  Debés crear una función llamada `nuevoArreglo`
  que reciba un número como parámetro
  y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.
  
  Ejemplo: 
  
  nuevoArreglo(5) debe retornar [1,2,3,4,5]
  nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]
   */
  