// Deben crear una función llamada paresEimpares 
// que reciba 3 parámetros 
// los dos primeros que sean números y el tercero una palabra (string) 
// la función tiene que mostrar en la consola los números entre el cero y el primer parámetro que recibe 
// pero debe en primer lugar mostrar todos los números pares 
// y luego los impares 
// además, cuando el número sea divisible por el segundo parámetro pasado a la función, en vez de loggearlo, debe imprimir la palabra que recibe como tercer parámetro. 

// Ejemplo: 
paresEImpares(10,7,'prueba')
// ====> 
0
2
4
6
8
10
1
3
5
'Prueba'
9


function paresEImpares(numeroA, numeroB, palabra){
//recorrer hasta nuestro primer parametro
  for(let i = 1; i<= numeroA; i++){
    //sacar los numero pares
    if(i % 2 === 0){
      //evaluamos con un condicional anidado si el elemento es divisible por numeroB
      /* if(i % numeroB == 0){
        console.log(palabra)
      }else{
        console.log(i)
      } */
      //if ternario: refactorizar ; (condicion) ? if : else
      i % numeroB == 0 ? console.log(palabra) : console.log(i)

    }
  }
  console.log("-----------------------------------------------")
  for(let i = 1; i<= numeroA; i++){
    if(i % 2 !== 0){
     /*  if(i % numeroB == 0){
        console.log(palabra)
      }else{
        console.log(i)
      } */
      i % numeroB == 0 ? console.log(palabra) : console.log(i)
    }
  }
}
paresEImpares(10,7,"plataforma")
