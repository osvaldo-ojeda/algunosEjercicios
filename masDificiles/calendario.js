function calendario() {
  let meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  let calendar = [];
  for (let mes = 0; mes < meses.length; mes++) {
    let currentMes = {};
    let dia = [];
    for (let dias = 1; dias <= 31; dias++) {
      dia.push(dias);
      if (meses[mes] === "febrero" && dias === 28) break;
      if (
        (meses[mes] === "abril" ||
          meses[mes] === "junio" ||
          meses[mes] === "septiembre" ||
          meses[mes] === "noviembre") &&
        dias === 30
      ) {
        break;
      }
    }

    currentMes[meses[mes]] = dia;
    calendar.push(currentMes);
  }
  return calendar;
}

calendario();
// es obvio que falta trabajar con el objeto date
