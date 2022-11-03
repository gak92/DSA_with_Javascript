// Write a function to determine if the second string is the anagram of the first string.
// An anagram is a word or phrase or name formed by rearranging the letters of first word.
// e.g: cinema formed from iceman

// (" ", " ")         -->     true
// ("azz", "zza")     -->     true
// ("anagram", "nagaram")     -->   true
// ("awesome", "awesom")      -->   false

function validAnagram(firstWord, secondWord)
{
  if(firstWord.length !== secondWord.length)
    return false;

  const lookup = {};

  for(let i=0; i<firstWord.length; i++)
  {
    let letter = firstWord[i];
    lookup[letter] ? lookup[letter]+=1 : lookup[letter] = 1;
  }
  console.log(lookup);

  for(let i=0; i<secondWord.length; i++)
  {
    let letter = secondWord[i];
    if(!lookup[letter])
      return false
    else
      lookup[letter] -= 1;
  }

  return true;
}

// console.log(validAnagram(" ", " "));
// console.log(validAnagram("azz", "zza"));
// console.log(validAnagram("anagram", "nagaram"));
// console.log(validAnagram("awesome", "awesom"));

let first = "coronavirus";
let second = "carnivorous";

console.log(validAnagram(first, second));
