// Function - input (argument), code, ouput (return value)

let  greetUser = function () {
    console.log('Welcome user')

}

greetUser()

let square = function (num){
    let result = num * num
    return  result 
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

//function challenge 



// convertFahrenheitToCelcius

// call a couple of times ( 32 -> 0) (68 -> 20)


//Print the converted values


let convertFahr = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9 
    return celsius 
}

let tempOne = convertFahr(32)
let tempTwo = convertFahr(68)

console.log(tempOne)
console.log(tempTwo)