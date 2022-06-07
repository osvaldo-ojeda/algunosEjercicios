// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
    let strArray = [];
    let camel = "";
  
    if (str === "") {
      return camel;
    } else if (str.includes("_")||str.includes("-")) {
      strArray = str.split("_" );
      camel = strArray[0];
      for (let i = 1; i < strArray.length; i++) {
        camel += strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
      }
    }
  
    // else if (str.includes("-")) {
    //   strArray = str.split("-");
    //   camel = strArray[0];
    //   for (let i = 1; i < strArray.length; i++) {
    //     camel += strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
    //   }
    // }
  
    return camel;
  }
  
  // function toCamelCase(str){
  //   var regExp=/[-_]\w/ig;
  //   return str.replace(regExp,function(match){
  //         return match.charAt(1).toUpperCase();
  //    });
  // }
  // function toCamelCase(str){
  //   return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
  // }
  // 