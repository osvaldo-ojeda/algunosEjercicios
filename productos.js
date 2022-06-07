

// // Escribí una función "products" que tenga dos parámetros, en primer lugar un arreglo de objetos y ademas el nombre de una propiedad. La función tendrá que devolver un arreglo que solamente contenga los valores dentro de la propiedad recibida.
// // Utilizar la siguiente variable:

let productos = [
    { producto: "TV", precio: 6000 },
    { producto: "notbook", precio: 4000 },
    { producto: "Auriculares", precio: 1500 },
    { producto: "Monitor", precio: 12000 },
    { producto: "Teclado", precio: 3000 },
  ];
  
  // Ejemplo:
  
  // elements(productos, 'nombre') // ["TV", "notbook", "Auriculares", "Monitor", "Teclado"]
  
  function products(array, nom) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray.push(array[i][nom]);
    }
    return newArray;
  }
  // products(productos, "producto");
  // products(productos, "precio");