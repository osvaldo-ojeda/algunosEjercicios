// // ordena de mayor a menor

// function ordenador(arr) {
//   let cont = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] < arr[cont]) {
//         let n = arr[cont];
//         arr[cont] = arr[j];
//         arr[j] = n;
//       }
//     }
//     cont++;
//   }
//   console.log(arr);
// }
// ordenador([-21, 3, -1000, -1, 2,-50,20]);

// ordena de menor a mayor
function ordenador(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        let x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
      }
    }
  }
  console.log(arr);
}
ordenador([1,100, 2, -3,0]);






