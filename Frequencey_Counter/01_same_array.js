// Write a function called same, which accepts two arrays.
// The function should return true if every value in the first array
// has its corresponding value squared in the second array.
// The frequency of value must be same.
// same([1,2,3], [4,1,9])  --> true
// same([1,2,3], [1,9])  --> false
// same([1,2,1], [4,4,1])  --> false

// Naive Solution O(N**2)

function same(arr1, arr2)
{
  if(arr1.length !== arr2.length)
    return false;

  for(let i=0; i<arr1.length; i++)
  {
    let idx = arr2.indexOf(arr1[i]**2);
    if(idx === -1)
      return false;
    else
      arr2.splice(idx,1);
  }
  return true;
}

console.log(same([1,2,3], [4,1,9]));
console.log(same([1,2,3], [1,9]));
console.log(same([1,2,1], [4,4,1]));
