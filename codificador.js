// esta funcion recibe codifica un stringpasado porparametro, devuelve un un numerocon el string y si se repiten los acumula
// ej codificador("hola")=>1h1o1l1a
// ej codificador("hhoolaa")=>2h2o1l2a

function codificador(params) {
  let contador = 1;
  let str = "";
  for (let i = 0; i < params.length; i++) {
    if (params[i] === params[i + 1]) {
      contador++;
    } else {
      str += `${contador}${params[i]}`;
      contador = 1;
    }
  }
  console.log("hola", str);
}

codificador("hola");
codificador("hhoolaa")
