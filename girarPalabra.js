// Escriba una función "girarPalabra" que tome una cadena de una o más palabras y devuelva la misma cadena, pero con las palabras de cinco o más letras invertidas . Las cadenas pasadas consistirán solo en letras y espacios. Los espacios se incluirán solo cuando haya más de una palabra presente.

function girarPalabra(str) {
  let arr = str.split(" ");
  // metodo 1
  // let rts = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i].length >= 5) {
  //     let palabra = arr[i];
  //     let palabrainvertida = "";
  //     for (let x = palabra.length - 1; x >= 0; x--) {
  //       palabrainvertida += palabra[x];
  //     }
  //     rts.push(palabrainvertida);
  //   } else {
  //     rts.push(arr[i]);
  //   }
  // }
  // console.log(rts.join(" "));
  // metodo 2
  // let rts = arr
  //   .map((elemento) => {
  //     if (elemento.length >= 5) {
  //       return elemento.split("").reverse().join("");
  //     }
  //     return elemento;
  //   })
  //   .join(" ");
  // return rts;
  // metodo 3
  // return arr
  //   .map((elemento) => {
  //    return elemento.length >= 5? elemento.split("").reverse().join(""):elemento;
  //   })
  //   .join(" ");
  // metodo 4

  let rts = arr.reduce((acc, elemento) => {
    return (acc +=
      elemento.length >= 5
        ? " " + elemento.split("").reverse().join("")
        : " " + elemento);
  },'');

  return rts;
}

// /Examples:
// girarPalabra("Hola Osvaldito") // => returns 'Hola otidlavsO'
//  girarPalabra( "This is a test")// => returns "This is a test"
//  girarPalabra( "This is another test")//=> returns "This is rehtona test"
//
