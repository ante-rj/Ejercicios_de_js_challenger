// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'


let a = "Hola mundo"
let n = 1


function myFunction(a, n) {
   let ntr = a[n-1]
    return ntr
}

console.log(myFunction(a, n))
