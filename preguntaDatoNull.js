//Crear una función preguntarDatoNull que reciba como parámetro un array de objetos,
// Debe devolver un array de objetos, con los datos del usuario que no proporcionó los datos en ese campo y agregar la propiedad pregunta que diga: "Hola podrías proporcionarnos tu dato."



// en este ejercicio hay que tener quidado porque por mas que haga un slice sobre el array,cada objeto en si esuna entidad distinta y si modifico o agrego algo al obj eso se modifica


// yo hice unpar modificando el array y otro no

var lista = [
    {
      nombre: null,
      apellido: "I.",
      pais: "Argentina",
      edad: 35,
      dni: 99999999,
    },
    {
      nombre: "Lukas",
      apellido: "X.",
      pais: "Croatia",
      edad: 35,
      dni: null,
    },
    {
      nombre: "Madison",
      apellido: "U.",
      pais: "United States",
      edad: 32,
      dni: 33333333,
    },
  ];
  
  // Notas:
  [
    {
      nombre: null,
      apellido: "I.",
      pais: "Argentina",
      edad: 35,
      dni: 99999999,
      pregunta: "Hola podrias proporcionarnos tu nombre.",
    },
    {
      nombre: "Lukas",
      apellido: "X.",
      pais: "Croatia",
      edad: 35,
      dni: null,
      question: "Hola podrias proporcionarnos tu dni.",
    },
  ];
  // Como mucho, solo uno de los valores estará null/ vacío.
  // Preservar el orden de la lista original.
  // Devuelve una matriz vacía []si no hay ningún desarrollador al que le falten detalles.
  // La matriz de entrada siempre será válida y formateada como en el ejemplo anterior.
  
  function preguntarDatoNull(list) {
    //   let filtro = [];
    //   list.forEach((element) => {
    //     for (const key in element) {
    //       if (element[key] === null) {
    //         element.question = `Hi, could you please provide your ${key}.`;
    //         filtro.push(element);
    //       }
    //     }
    //   });
    //   let filtro = list.filter((element) => {
    //     for (const key in element) {
    //       if (element[key] === null) {
    //         element.question = `Hi, could you please provide your ${key}.`;
    //         return element;
    //       }
    //     }
    //   });
  
    // ----------
    // //   let copia = arrObj.slice();
    // let newArr = [];
    // arrObj.forEach((element) => {
    //   for (const key in element) {
    //     if (element[key] === null) {
    //       let obj = Object.assign({}, element);
    //       obj.pregunta = `Hola podrias proporcionarnos tu ${key}`;
    //       newArr.push(obj);
    //     }
    //   }
    // });
  
    // ------
  
    let filtro = list.filter((element) => {
      return Object.keys(element).some(
        (e) =>
          !element[e] &&
          (element.pregunta = `Hola podrias proporcionarnos tu ${e}.`)
      );
    });
    console.log(filtro);
  }
  
  // preguntarDatoNull(lista);