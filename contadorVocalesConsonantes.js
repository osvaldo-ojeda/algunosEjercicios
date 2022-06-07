let a = ["a", "e", "i", "o", "u"];
let b = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function vocCon(str) {
  let vocales = 0;
  let consonantes = 0;
  // let regVocales = /[aeiouáéíóú]/i;
  // let regConsonantes = /[bcdfghjklmnñpqrstvwxyz]/i;
  // let palabra=

  for (let i = 0; i < str.length; i++) {
    (a.find((e) => e === str[i].toLowerCase()) && vocales++) ||
      (b.find((e) => e === str[i]) && consonantes++);
  }

  // for (let i = 0; i < str.length; i++) {
  //   if (regVocales.test(str[i])) {
  //     vocales++;
  //   }
  //   if (regConsonantes.test(str[i])) {
  //     consonantes++;
  //   }
  // }
  // return `${vocales}, ${consonantes}`;

  // for (let i = 0; i < str.length; i++) {
  //   regVocales.test(str[i]) && vocales++;
  //   regConsonantes.test(str[i]) && consonantes++;
  // }
  // return `${vocales}, ${consonantes}`;

  // strArr.forEach((e) => {
  //   regVocales.test(e) && vocales++;
  //   regConsonantes.test(e) && consonantes++;
  // });

  return `${vocales}, ${consonantes}`;
}

function vocCon2(str) {
  let vocales = 0;
  let consonantes = 0;
  let regVocales = /[aeiouáéíóú]/i;
  let regConsonantes = /[bcdfghjklmnñpqrstvwxyz]/i;
  for (let i = 0; i < str.length; i++) {
    let x = str[i];
    regVocales.test(x) && vocales++;
    regConsonantes.test(x) && consonantes++;
  }

  return `vocales: ${vocales}, consonantes:${consonantes}`;
}
