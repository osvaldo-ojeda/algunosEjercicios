// crear una funcion llamada conadorLenguajes, que itere una lista de array de objetos y y devuelva un objeto con los lenguajes de programacion y la cantidad de personas que hagan ese curso

var lista = [
  {
    nombre: "Pedlo",
    apellido: "P.",
    edad: 19,
    lenguaje: "C",
  },
  {
    nombre: "Ana",
    apellido: "R.",
    edad: 52,
    lenguaje: "JavaScript",
  },
  {
    nombre: "Ramon",
    apellido: "R.",
    edad: 29,
    lenguaje: "Ruby",
  },
  {
    nombre: "Jolge",
    apellido: "B.",
    edad: 81,
    lenguaje: "C",
  },
];

function conadorLenguajes(params) {
  let obj = {};

  // for (let i = 0; i < params.length; i++) {
  //   if (obj[params[i].lenguaje]) {
  //     obj[params[i].lenguaje] = obj[params[i].lenguaje] + 1;
  //   } else {
  //     obj[params[i].lenguaje] = 1;
  //   }
  // }

  params.forEach((element) => {
    //   obj[element.lenguaje]
    //     ? (obj[element.lenguaje] = obj[element.lenguaje] + 1)
    //     : (obj[element.lenguaje] = 1);

    obj[element.lenguaje] = obj[element.lenguaje] + 1 || 1;
  });

  console.log(obj);
}

// conadorLenguajes(lista);
// { C: 2, JavaScript: 1, Ruby: 1 }
