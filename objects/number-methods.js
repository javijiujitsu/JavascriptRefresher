let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))
console.log(Math.round(num))

let min = 10
let max = 20

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

// 0 - 10

console.log(randomNum)

// Challenge area 
// 1 -5 tru if correct and false if not the correct


let makeGuess = function (guess) {
    let min = 1
    let max = 5
    let randonNumber= Math.floor(Math.random() * (max - min + 1)) + min
    
    return guess === randonNumber  
} 

console.log(makeGuess(1))
