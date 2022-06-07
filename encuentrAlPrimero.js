// crea una función encuentraAlPrimero que reciba dos parámetros, un array de objetos, y un lenguaje de programación y encuentre al primer dev en la lista y devuelva un string con el nombre y el país al que pertenece.
//  Si no lo encuentra debe devolver `No hay desarrolladores en lenguaje`

var list2 = [
    {
      nombre: "Pedlo",
      apellido: "P.",
      pais: "Cuba",
      edad: 22,
      lenguaje: "JavaScript",
    },
    {
      nombre: "Victoria",
      apellido: "V.",
      pais: "Puerto Rico",
      edad: 30,
      lenguaje: "Python",
    },
    {
      nombre: "Emma",
      apellido: "B.",
      pais: "Argentina",
      edad: 19,
      lenguaje: "Clojure",
    },
  ];
  
  function encuentraAlPrimero(arr, lenguaje) {
    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i].lenguaje === lenguaje) return `${arr[i].nombre}, ${arr[i].pais}`;
    // }
    // return `No hay desarrolladores en ${lenguaje}`;
  
    let dev = arr.find((elemento) => elemento.lenguaje === lenguaje);
    return dev
      ? `${dev.nombre}, ${dev.pais}`
      : `No hay desarrolladores en ${lenguaje}`;
  }
  
  // console.log(encuentraAlPrimero(list2, "Python"));