function foo(a, b) {
  // Check for null values, handle 0 as a valid number
  a = a === null ? 0 : a;
  b = b === null ? 0 : b;
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo(0, 2)); // Output: 2
console.log(foo(1,0)); // Output: 1
console.log(foo(0,0)); // Output: 0