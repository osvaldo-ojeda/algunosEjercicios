function calcu(num1 = 0, operador = "+", num2 = 0) {
    // switch (operador) {
    //   case "+":
    //     return num1 + num2;
    //   case "-":
    //     return num1 - num2;
    //   case "*":
    //     return num1 * num2;
    //   case "/":
    //     return num1 / num2;
    //   default:
    //     return 0;
    // }
  
     return eval(`${num1}${operador}${num2}`);
  }