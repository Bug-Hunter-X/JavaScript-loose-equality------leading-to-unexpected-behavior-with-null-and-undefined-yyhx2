function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0;
  } else {
    return a + b;
  }
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined, 2)); // Output: 0
console.log(foo(1, undefined)); // Output: 0
console.log(foo(undefined, undefined)); // Output: 0
console.log(foo(undefined, 0)); //Output: 0