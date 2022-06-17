// Reducir Ejercicio: resumir las instancias de cada uno de estos en un solo objeto
// Ejemplo:
// var mascotas = ['perro', 'gato', 'perro'];
// Resultado: { 'perro': 2, 'gato': 1 }

let cosas = [
    "pelota",
    "pelota",
    "auto",
    "silla",
    "auto",
    "kuka",
    "compu",
    "kuka",
    "kuka",
    "compu",
    "pelota",
    "moto",
    "avion",
    "avion",
    "planta",
    "planta",
    "planta",
  ];
  
  function datos(params) {
    // let obj = {};
    // params.forEach((element) => {
    //   obj[element] = 1;
  
    //   // if (!obj[element]) {
    //   //   obj[element] = 1;
    //   // } else {
    //   //   obj[element] = obj[element] + 1;
    //   // }
    //   // if (obj[element]) {
    //   //   obj[element] ++;
    //   // } else {
    //   //   obj[element] = 1;
    //   // }
    //   // obj[element] ? obj[element]++ : (obj[element] = 1);
  
    //   obj[element] && obj[element]++ || (obj[element] = 1);
    // });
    let obj = params.reduce((ob, element) => {
      (ob[element] && ob[element]++) || (ob[element] = 1);
      return ob;
    }, {});
  
    console.log(obj);
  }
  
  datos(cosas);
  