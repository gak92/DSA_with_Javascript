// Write a function that takes a string and return a count of each character.
// str = "abab"   return: obj = { a: 2, b:2 }

function isAlphaNumeric(char)
{
  let code = char.charCodeAt();
  if((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122))
  {
    return true;
  }
  return false;
}

function charCount(str)
{
  let result = {};
  for(let char of str)
  {
    if(isAlphaNumeric(char))
    {
      let ch = char.toLowerCase();
      if(result[ch] > 0)
      {
        result[ch]++;
      }
      else
      {
        result[ch] = 1;
      }
    }
  }

  return result;
}

let str = "ababA!$2234";

let obj = charCount(str);
console.log(obj);