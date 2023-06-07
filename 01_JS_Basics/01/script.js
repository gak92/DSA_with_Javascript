console.log("null type: ", typeof null);
console.log("undefned type: ", typeof undefined);

/**
 * 7 types of data types
 * number, strng, boolean, null, undefned, object, symbol
 * 
 */


let languages = 'java javaScript python cSharp';
let result = languages.lastIndexOf('S');
console.log(result);

// slce does not mutate orgnal strng / array
let fullName = "wowprogrammer";
let res = fullName.slice(0,5);
console.log(fullName);
console.log(res);

// splt
let colors = "Brown Blue Green, yellow";
let arrColors = colors.split(" ");
console.log("Array of Colors: ", arrColors);