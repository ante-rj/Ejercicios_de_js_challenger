// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

let a = "Hola mundo"

function myFunction(a) {
    return a.slice(0,+3);
}

console.log(myFunction(a))