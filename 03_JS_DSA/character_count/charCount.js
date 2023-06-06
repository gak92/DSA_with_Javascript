let str = "This is some string to count each character in the string";

function isNumberAndLetter(ch) {

}

function charCount(str) {
  str = str.toLowerCase();
  let count = {};

  for(let i=0; i<str.length; i++) {
    if (isNumberAndLetter(str[i]) {
      if (str[i] in count) {
        
      }
    }
    
  }

  return count;

}

console.log(charCount(str));
