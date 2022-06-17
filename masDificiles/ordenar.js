// Ordenar los inventores por fecha de nacimiento, de mayor a menor

const inventors = [
    { id: 146, name: "Albert", lastName: "Einstein", year: 1879, passed: 1955 },
    { id: 345, name: "Isaac", lastName: "Newton", year: 1643, passed: 1727 },
    { id: 244, name: "Galileo", lastName: "Galilei", year: 1564, passed: 1642 },
    { id: 343, name: "Marie", lastName: "Curie", year: 1867, passed: 1934 },
    { id: 442, name: "Johannes", lastName: "Kepler", year: 1571, passed: 1630 },
    { id: 841, name: "Nicolaus", lastName: "Copernic", year: 1473, passed: 1543 },
    { id: 542, name: "Max", lastName: "Planck", year: 1858, passed: 1947 },
    { id: 643, name: "Katherine", lastName: "Blodget", year: 1898, passed: 1979 },
    { id: 944, name: "Ada", lastName: "Lovelace", year: 1815, passed: 1852 },
    { id: 145, name: "Sarah E.", lastName: "Goode", year: 1855, passed: 1905 },
    { id: 856, name: "Lise", lastName: "Meitner", year: 1878, passed: 1968 },
  ];


function ordenar(inventor) {
    let datos = inventor.sort((a, b) => a.year - b.year);
    console.log(datos);
  }