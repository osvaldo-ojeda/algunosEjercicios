// precio total
// devolver un array de objetos con el nombre del producto, total por producto y al final el resumen con el total de todos los productos

let tienda = [
  { producto: "TV", marca: "sony", precio: 600, cant: 10 },
  { producto: "notebook", marca: "phillips", precio: 400, cant: 30 },
  { producto: "Auriculares ", marca: "sony", precio: 150, cant: 15 },
  { producto: "Monitor", marca: "aple", precio: 1200, cant: 20 },
  { producto: "Teclado", marca: "sansumg", precio: 300, cant: 5 },
  { producto: "Teclado", marca: "motorola", precio: 300, cant: 5 },
  { producto: "Teclado", marca: "aple", precio: 300, cant: 5 },
  { producto: "tv", marca: "sansumg", precio: 300, cant: 5 },
];

function precioTotal(arr) {
  // con un for
  //   let newArr = [];
  //   let total = {
  //     total: 0,
  //   };
  //   for (let i = 0; i < arr.length; i++) {
  //     let objPrecio = {};
  //     objPrecio.producto = arr[i].producto;
  //     objPrecio.totalPorProducto = arr[i].precio * arr[i].cant;
  //     total.total += objPrecio.totalPorProducto;
  //     newArr.push(objPrecio);
  //   }
  //   newArr.push(total);

  let total = {
    total: 0,
  };
  let newArr = arr.map((e) => {
    let objPrecio = {};
    (objPrecio.producto = e.producto),
      (objPrecio.totalPorProducto = e.precio * e.cant);
    total.total += objPrecio.totalPorProducto;
    return objPrecio;
  });
  newArr.push(total);

  return newArr;
}

precioTotal(tienda);
