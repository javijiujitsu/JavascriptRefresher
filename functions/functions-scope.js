// Global Scope ( convertFahr, tempOne, TempTwo)
    // Local scope (fahrenheit, celsius) arguments are bound by local scope
        // Local scope (isFreezing)


let convertFahr = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9 

    if (celsius <= 0) {
        let isFreezing = true
    }
    return celsius 
}

let tempOne = convertFahr(32)
let tempTwo = convertFahr(68)

console.log(tempOne)
console.log(tempTwo)