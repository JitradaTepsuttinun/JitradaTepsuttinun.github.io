L = [1,2,3,4,5,6,7,8,9,10]

let sum = 0

for(let i=0; i<L.length; i++) {
    sum += L[i]
}
console.log("For loop:",sum)


// Use array function
sum = 0

function add(a,b) {
    return a+b
}
sum = L.reduce(add) // function as a parameter

// Arrow function
// (parameters) => return value
sum = L.reduce((a,b) => a+b)    // arrow function

console.log("Array function:",sum)


console.log("Products", L.reduce((a,b) => a*b) )