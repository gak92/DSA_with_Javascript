// Simple Recursive Fibonacci
function fib(n) {
  if(n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}

// Memoization (Top Down Approach)
function fib_memo(n, memo=[]) {
  if(memo[n] !== undefined) return memo[n];
  if(n <= 2) return 1;
  let res = fib(n-1, memo) + fib(n-2, memo);
  memo[n] = res;
  return res;
}

// Tabulated (Bottom Up Approach)
function fib_table(n) {
  if(n <= 2) return 1;
  let fibNums = [0,1,1];
  for(let i=3; i<=n; i++) {
    fibNums[i] = fibNums[i-1] + fibNums[i-2];
  }
  return fibNums[n];
}

console.log("Simple Recursive Fibonacci: ", fib(10));
console.log("Memoization Fibonacci: ", fib(10));
console.log("Tabulated Fibonacci: ", fib(10));