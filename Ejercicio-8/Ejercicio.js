// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

let a = "Hola mundo"

function first_half (a) {
  a.length % 2 == 0
  return a.slice(0, a.length / 2);
}

console.log(first_half(a)); 