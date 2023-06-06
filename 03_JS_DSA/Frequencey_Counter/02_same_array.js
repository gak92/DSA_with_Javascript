// Write a function called same, which accepts two arrays.
// The function should return true if every value in the first array
// has its corresponding value squared in the second array.
// The frequency of value must be same.
// same([1,2,3], [4,1,9])  --> true
// same([1,2,3], [1,9])  --> false
// same([1,2,1], [4,4,1])  --> false

// Optimized Solution

function same(arr1, arr2)
{
  if(arr1.length !== arr2.length)
    return false;
  
  let fc1 = {};
  let fc2 = {};

  for(let val of arr1)
  {
    fc1[val] = (fc1[val] || 0) + 1;
  }
  for(let val of arr2)
  {
    fc2[val] = (fc2[val] || 0) + 1;
  }
  console.log(fc1);
  console.log(fc2);

  for(key in fc1)
  {
    let sq = key**2;
    if(!(sq in fc2))
      return false;

    if(fc2[sq] !== fc1[key])
      return false;

    return true;
  }
}

console.log(same([1,2,3,2], [4,1,9,4]));
console.log(same([1,2,3], [1,9]));
console.log(same([1,2,1], [4,4,1]));
