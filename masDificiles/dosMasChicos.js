// esta function recibe un array como parámetro y devuelve los dos números más chicos
// se podria usar un sort y devolver los dos primeros
function dosMasChicos(arr) {
  let n1 = arr[0];
  let n2 = arr[1];
  arr[0] > arr[1] && ((n1 = arr[1]), (n2 = arr[0])); //esto es un if()
  for (let i = 1; i < arr.length; i++) {
    // if (n1 > arr[i]) {
    //   n1 = arr[i];
    //   i = 0;//esto formatea el contador
    // }
    // if (n2 > arr[i] && arr[i] !== n1) {
    //   n2 = arr[i];
    // }
    n1 > arr[i] && ((n1 = arr[i]), (i = 0)); //lo de arriba pero con azúcar de sintaxis
    n2 > arr[i] && arr[i] !== n1 && (n2 = arr[i]);
  }
  console.log(n1, n2);
}

dosMasChicos([0, -20, -30, 5, 3, 4, -1]);
